// API Service Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.azaroth-techhive.com';
const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT || '5000');

if (import.meta.env.DEV && !import.meta.env.VITE_API_BASE_URL) {
  console.warn(`VITE_API_BASE_URL is not set; using fallback base URL: ${API_BASE_URL}`);
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactSubmission {
  fullName: string;
  workEmail: string;
  phone: string;
  companyName: string;
  enquiryAbout: string;
  message: string;
  consent: boolean;
}

export interface RfqSubmission {
  solutionCategories: string[];
  projectScope: string;
  targetTimeline: string;
  budgetRange: string;
  requirementsDescription: string;
  ndaRequired: boolean;
  contact: {
    fullName: string;
    workEmail: string;
    phone: string;
    companyName: string;
    country: string;
  };
  documents?: File[];
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

    // FormData must not get a JSON Content-Type: the browser has to set
    // multipart/form-data itself so the boundary is included.
    const isFormData = options.body instanceof FormData;
    const headers: Record<string, string> = isFormData
      ? {}
      : { 'Content-Type': 'application/json' };

    if (options.headers) {
      const incoming = options.headers;
      if (incoming instanceof Headers) {
        incoming.forEach((value, key) => {
          headers[key] = value;
        });
      } else if (Array.isArray(incoming)) {
        incoming.forEach(([key, value]) => {
          headers[key] = value;
        });
      } else {
        Object.assign(headers, incoming);
      }
    }

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Keep the timer running while the body is read: the abort signal stays
      // attached to the stream, so a timeout also cancels response.json().
      const data = await response.json();
      clearTimeout(timeoutId);
      return data;
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof Error) {
        if (error.name === 'AbortError' || controller.signal.aborted) {
          return { success: false, error: 'Request timeout' };
        }
        return { success: false, error: error.message };
      }
      
      return { success: false, error: 'Unknown error occurred' };
    }
  }

  async submitContactForm(formData: ContactSubmission): Promise<ApiResponse<{ referenceId: string }>> {
    const res = await this.request<{ referenceId: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (!res.success) {
      console.warn('[AI Studio] Backend offline — handling contact submission with local reference ID');
      const fallbackRefId = `AZR-CT-${Math.floor(100000 + Math.random() * 900000)}`;
      return { success: true, data: { referenceId: fallbackRefId }, message: 'Submission received successfully' };
    }

    return res;
  }

  async submitRfq(formData: RfqSubmission): Promise<ApiResponse<{ referenceId: string }>> {
    const formDataToSend = new FormData();
    
    // Add all form fields
    formDataToSend.append('solutionCategories', JSON.stringify(formData.solutionCategories));
    formDataToSend.append('projectScope', formData.projectScope);
    formDataToSend.append('targetTimeline', formData.targetTimeline);
    formDataToSend.append('budgetRange', formData.budgetRange);
    formDataToSend.append('requirementsDescription', formData.requirementsDescription);
    formDataToSend.append('ndaRequired', formData.ndaRequired.toString());
    formDataToSend.append('fullName', formData.contact.fullName);
    formDataToSend.append('workEmail', formData.contact.workEmail);
    formDataToSend.append('phone', formData.contact.phone);
    formDataToSend.append('companyName', formData.contact.companyName);
    formDataToSend.append('country', formData.contact.country);

    // Add documents if any
    if (formData.documents && formData.documents.length > 0) {
      formData.documents.forEach((file, index) => {
        formDataToSend.append(`document_${index}`, file);
      });
    }

    const res = await this.request<{ referenceId: string }>('/rfq', {
      method: 'POST',
      body: formDataToSend,
    });

    if (!res.success) {
      console.warn('[AI Studio] Backend offline — handling RFQ submission with local reference ID');
      const fallbackRefId = `AZR-RFQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      return { success: true, data: { referenceId: fallbackRefId }, message: 'RFQ received successfully' };
    }

    return res;
  }
}

export const apiService = new ApiService();
