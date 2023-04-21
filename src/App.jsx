import './App.css';
import 'animate.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import { HashRouter } from 'react-router-dom';

const App = () => {
	return (
		<HashRouter>
			<div className='select-none'>
				<Nav />
				<Home />
				<About />
			</div>
		</HashRouter>
	);
};

export default App;
