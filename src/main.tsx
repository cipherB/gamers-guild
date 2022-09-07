import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './context/ContextProvider';
import { registerLicense } from '@syncfusion/ej2-base';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1gWH9ZcXRVRmlYU0w=');

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
