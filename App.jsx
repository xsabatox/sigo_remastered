/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { AuthProvider } from './src/components/AuthContext';
import { Routes } from './src/routes/index';

/********************************************************************************
COMPONENT
********************************************************************************/
export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}