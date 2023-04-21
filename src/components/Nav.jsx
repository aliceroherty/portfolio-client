import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

const Nav = () => {
	return (
		<nav className='flex justify-between items-center w-screen fixed top-0 bg-[#121212] z-50 py-5 px-5 md:px-24'>
			<ul className='flex flex-row items-center list-none gap-5 m-0 h-full'>
				<li>
					<ScrollLink
						to='home'
						className='cursor-pointer text-white text-xl hover:text-gray-500 transition-colors ease-in-out duration-300'
						activeClass='active'
						smooth
						spy
					>
						Home
					</ScrollLink>
				</li>
				<li>
					<ScrollLink
						to='about'
						className='cursor-pointer text-white text-xl hover:text-gray-500 transition-colors ease-in-out duration-300'
						activeClass='active'
						smooth
						spy
					>
						About
					</ScrollLink>
				</li>
				<li>
					<ScrollLink
						to='projects'
						className='cursor-pointer text-white text-xl hover:text-gray-500 transition-colors ease-in-out duration-300'
						activeClass='active'
						smooth
						spy
					>
						Projects
					</ScrollLink>
				</li>
				<li>
					<ScrollLink
						to='contact'
						className='cursor-pointer text-white text-xl hover:text-gray-500 transition-colors ease-in-out duration-300'
						activeClass='active'
						smooth
						spy
					>
						Contact
					</ScrollLink>
				</li>
			</ul>
			<div>
				<ScrollLink
					to='contact'
					className='bg-pink-400 text-white font-bold p-2 rounded-md px-5 hover:bg-pink-600 transition-colors duration-300 ease-in-out cursor-pointer'
					smooth
				>
					Hire Now
				</ScrollLink>
			</div>
		</nav>
	);
};

export default Nav;
