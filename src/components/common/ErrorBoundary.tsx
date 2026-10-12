import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught in ErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '4rem 1.5rem', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ color: 'var(--color-dark-forest)', marginBottom: '1rem' }}>Something encountered an issue</h2>
          <p style={{ maxWidth: '500px', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
            An unexpected error occurred. You can return to the homepage or reload the application.
          </p>
          <button
            onClick={() => window.location.assign('/')}
            className="btn btn-primary"
          >
            Return to Homepage
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
