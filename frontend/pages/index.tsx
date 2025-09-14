
import React from 'react';
import { useAuth } from '../utils/auth';
import DashboardIAM from '../components/DashboardIAM';
import DashboardOmega from '../components/DashboardOmega';
import DashboardNexus from '../components/DashboardNexus';
import LoginPage from './login';

const HomePage = () => {
  const { operator, roles } = useAuth();

  if (!operator) {
    return <LoginPage />;
  }

  switch (operator) {
    case 'M29':
      return <DashboardIAM />;
    case 'MΩ':
      return <DashboardOmega />;
    case 'M9':
      return <DashboardNexus />;
    case 'ADMIN':
      return <DashboardNexus />; // Admin tem a visão do Nexus por padrão
    default:
      return <div>Painel Padrão</div>;
  }
};

export default HomePage;
