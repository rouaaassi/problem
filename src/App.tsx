import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../theme';
import MainNav from './components/navbar';
import HomePage from './pages/home';
import LoadScreen from './components/laoding-screen';
import { Routes, Route } from 'react-router-dom';
import SignInSide from './pages/sing-in';
import SignUpSide from './pages/sign-up';
import { AuthProvider } from './context/AuthContext';
import { ProblemProvider } from './context/ProblemContext';
import Problems from './pages/Problems';
import ProblemDetails from './pages/Problem-details';
import Solutions from './pages/Solutions';
import Dashboard from './pages/dashboard';
import Footer from './components/footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading screen
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <AuthProvider>
        <ProblemProvider>
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            {isLoading ? (
              <LoadScreen isLoading={true} />
            ) : (
              <div className="page-transition">
                <MainNav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                <main>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sign-in" element={<SignInSide />} />
                    <Route path="/sign-up" element={<SignUpSide />} />
                    <Route path="/Problems" element={<Problems />} />
                    <Route path="/Problems/:id" element={<ProblemDetails />} />
                    <Route path="/Solutions" element={<Solutions problemId={10} />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            )}
          </ThemeProvider>
        </ProblemProvider>
      </AuthProvider>
    </div>
  );
}
