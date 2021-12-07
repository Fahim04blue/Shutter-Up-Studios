import AuthProvider from 'contexts/AuthContext';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster />
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
