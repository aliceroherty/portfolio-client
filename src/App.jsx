import './App.css';
import 'animate.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
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
				<div className='select-none'>
					<Nav />
					<Home />
					<About />
				</div>
			</HashRouter>
		</ThemeProvider>
	);
};

export default App;
