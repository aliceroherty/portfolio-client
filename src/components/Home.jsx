import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { KeyboardModel } from './KeyboardModel';

const Home = () => {
	return (
		<div className='h-screen flex px-5 md:px-24' id='home'>
			<div className='w-full text-center lg:w-4/6 lg:text-left h-1/2 z-10 flex flex-col pt-24'>
				<h1 className='lg:text-6xl text-4xl font-bold xl:mt-56 lg:mt-10 mt-6 mb-5 animate__animated animate__slideInLeft'>
					My Name is{' '}
					<span
						className='text-pink-300  animate__animated  animate__bounce inline-block'
						style={{ animationDelay: '1s' }}
					>
						Alice
					</span>
				</h1>
				<h3
					className='lg:text-4xl md:text-2xl text-xl animate__animated animate__slideInLeft'
					style={{ animationDelay: '2s' }}
				>
					I Build Web and Mobile Applications.
				</h3>
				<a
					href='#about'
					className='mx-auto lg:mx-0 lg:text-2xl md:text-xl text-lg lg:w-48 md:w-38 w-40 animate__animated animate__zoomIn bg-pink-400 text-white font-bold p-5 rounded-md hover:bg-pink-600 transition-colors duration-300 ease-in-out text-center mt-5'
					style={{ animationDelay: '3s' }}
				>
					Learn More
				</a>
			</div>
			<div>
				<Canvas
					style={{ zIndex: 0, position: 'absolute', top: 0, left: 0 }}
				>
					<Suspense fallback={null}>
						<KeyboardModel />
						<ambientLight intensity={0.2} />
						<directionalLight
							intensity={0.4}
							position={[0, 0, 10]}
						/>
					</Suspense>
				</Canvas>
			</div>
		</div>
	);
};

export default Home;
