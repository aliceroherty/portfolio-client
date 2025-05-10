import './App.css';
import 'animate.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience'
import Preloader from './components/Preloader';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';

const muiTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#f9a8d4',
        },
        secondary: {
            main: '#db2777',
        },
        error: {
            main: '#ff0081',
        },
    },
});

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadComplete = () => {
        setIsLoading(false);
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <Preloader onLoadComplete={handleLoadComplete} />
            <HashRouter>
                <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
                    <Nav />
                    <div className="select-none px-5 md:px-24">
                        <Home />
                        <About />
                        <Experience />
                        <Projects />
                        <Contact />
                    </div>
                </div>
            </HashRouter>
        </ThemeProvider>
    );
};

export default App;
