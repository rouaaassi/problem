import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../theme';
import MainNav from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/home';
import LoadScreen from './components/laoding-screen';
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {isLoading? (<LoadScreen isLoading={true}/>):
      (
      <><CssBaseline /><MainNav isDarkMode={isDarkMode} toggleTheme={toggleTheme} /><div style={{ textAlign: 'center', marginTop: '20px' }}>
            <HomePage />
            <Footer />
          </div></>
      )}
    </ThemeProvider>
  );
}
