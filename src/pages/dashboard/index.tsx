import React from 'react';
import { useAuth } from '../../context/AuthContext';
import DashboardNavbar from '../../components/dashboard-bar';
import { Box } from '@mui/material';

const Dashboard: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return (
      <Box>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">log in to show DashBoard </h1>
      </div>
      </Box>
    );
  }

  return (
    <div>
      <div className="p-1">
      <DashboardNavbar />
        <h1 className="text-3xl font-bold mb-4">Hello {user?.username}!</h1>
        <p className="text-lg mb-6">This is your Dashboard , you can show the problems and solutions here😎 </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">problems count</h2>
            <p className="text-lg font-bold mt-2">25</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">solutions number</h2>
            <p className="text-lg font-bold mt-2">40</p>
          </div>
        </div>

        <button
          onClick={logout}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
           log out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
