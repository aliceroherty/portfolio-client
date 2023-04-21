const About = () => {
	return (
		<div
			className='w-full h-screen text-left px-5 md:px-24'
			id='about'
			name='about'
		>
			<h4 className='lg:text-6xl text-5xl font-bold sm:mt-0 mb-16 text-pink-300 text-center lg:text-left'>
				About Me
			</h4>
			<p className='sm:text-3xl text-xl mb-16 lg:w-1/2'>
				I am a skilled software developer with experience in JavaScript
				and expertise in .NET Core. I'm a quick learner and collaborate
				closely with clients to create effecient and user-friendly
				solutions that solve real world problems. Let's work together
				and bring your ideas to life!
			</p>
			<p className='sm:text-3xl text-xl mb-16 lg:w-1/2'>
				I began programming in high school with VB.NET. I then enrolled
				at New Brunswick Community College / NBCC where I majored in Web
				and Mobile application development. After two years of training
				at NBCC I graduated with honours.
			</p>
			<p className='sm:text-3xl text-xl mb-16 lg:w-1/2'>
				I then began my career at a small startup called BCJobs where I
				would stay for two years working as the sole developer at the
				company. While holding this position I migrated their
				application from a traditional data center to Amazon Web
				Services. I also maintained and expanded upon their job board
				which was built in .NET Core.
			</p>
		</div>
	);
};

export default About;
