/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { NavBarProvider } from './src/components/NavBarContext';
import { AuthProvider } from './src/components/AuthContext';
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