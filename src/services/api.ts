// API Service Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.azaroth-techhive.com';
const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT || '30000');

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

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return { success: false, error: 'Request timeout' };
        }
        return { success: false, error: error.message };
      }
      
      return { success: false, error: 'Unknown error occurred' };
    }
  }

  async submitContactForm(formData: ContactSubmission): Promise<ApiResponse<{ referenceId: string }>> {
    return this.request<{ referenceId: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
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

    return this.request<{ referenceId: string }>('/rfq', {
      method: 'POST',
      body: formDataToSend,
      headers: {}, // Let browser set Content-Type for FormData
    });
  }
}

export const apiService = new ApiService();
