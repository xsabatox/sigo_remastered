/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { NavBarProvider } from './src/contexts/NavBarContext';
import { AuthProvider } from './src/contexts/AuthContext';
import { Routes } from './src/routes/index';

/********************************************************************************
COMPONENT
********************************************************************************/
export default function App() {
  return (
    <NavBarProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavBarProvider>
  );
}