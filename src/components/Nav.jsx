import { NavHashLink } from 'react-router-hash-link';

const Nav = () => {
	return (
		<nav className='h-[7vh] flex justify-between items-center py-0 w-full sticky top-0 bg-[#121212] z-50'>
			<ul className='flex flex-row items-center list-none gap-5 m-0 h-full'>
				<li>
					<NavHashLink
						to='#home'
						className='cursor-pointer text-white text-xl hover:text-gray-500 transition-colors ease-in-out duration-300'
						smooth
					>
						Home
					</NavHashLink>
				</li>
				<li>
					<NavHashLink
						to='#about'
						className='cursor-pointer text-white text-xl hover:text-gray-500 transition-colors ease-in-out duration-300'
						smooth
					>
						About
					</NavHashLink>
				</li>
				<li>
					<NavHashLink
						to='#projects'
						className='cursor-pointer text-white text-xl hover:text-gray-500 transition-colors ease-in-out duration-300'
						activeClassName='active'
						smooth
					>
						Projects
					</NavHashLink>
				</li>
				<li>
					<NavHashLink
						to='#contact'
						className='cursor-pointer text-white text-xl hover:text-gray-500 transition-colors ease-in-out duration-300'
						activeClassName='active'
						smooth
					>
						Contact
					</NavHashLink>
				</li>
			</ul>
			<div>
				<NavHashLink
					to='#contact'
					className='bg-pink-400 text-white font-bold p-2 rounded-md px-5 hover:bg-pink-600 transition-colors duration-300 ease-in-out'
					smooth
				>
					Hire Now
				</NavHashLink>
			</div>
		</nav>
	);
};

export default Nav;
