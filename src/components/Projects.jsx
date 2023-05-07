import { useEffect, useState } from 'react';
import Project from './Project';
import { motion } from 'framer-motion';

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/projects`)
			.then((res) => res.json())
			.then((data) => {
				setProjects(data);
			})
			.catch((error) => {
				setError(true);
			});
	});

	return (
		<motion.div
			initial={{ transform: 'translateX(-100%)', duration: '500ms' }}
			whileInView={{ transform: 'translateX(0%)' }}
			viewport={{ once: true }}
			transition={{ duration: 1.25, type: 'spring' }}
			className='w-full pb-16 text-left'
			id='projects'
		>
			<h4 className='lg:text-6xl text-5xl font-bold sm:mt-0 mb-16 text-pink-300 text-center lg:text-left'>
				Projects
			</h4>
			{error ? (
				<p>Something went wrong retrieving the projects...</p>
			) : (
				<div className='w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8'>
					{projects.map((project) => (
						<Project key={project._id} {...project} />
					))}
				</div>
			)}
		</motion.div>
	);
};

export default Projects;
