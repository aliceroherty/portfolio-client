import './App.css';
import 'animate.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div className='px-5 md:px-24 select-none'>
				<Nav />
				<Home />
				<About />
			</div>
		</BrowserRouter>
	);
};

export default App;
