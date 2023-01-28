import AuthProvider from 'contexts/AuthContext';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <Toaster />
          <AppRoutes />
        </Router>
      </AuthProvider>
    </HelmetProvider>

  );
}

export default App;
