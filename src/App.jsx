import './App.css';
import 'animate.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

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
	return (
		<ThemeProvider theme={muiTheme}>
			<HashRouter>
				<Nav />
				<div className='select-none px-5 md:px-24'>
					<Home />
					<About />
					<Projects />
					<Contact />
				</div>
			</HashRouter>
		</ThemeProvider>
	);
};

export default App;
