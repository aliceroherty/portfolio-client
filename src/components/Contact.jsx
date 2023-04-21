const Contact = () => {
	return (
		<div className='w-full h-screen text-left' id='contact'>
			<h4 className='lg:text-6xl text-5xl font-bold sm:mt-0 mb-16 text-pink-300 text-center lg:text-left'>
				Contact Me
			</h4>
			<form>
				<div>
					<label>Your Name</label>
					<input type='text' placeholder='What is your name?' />
				</div>
				<div>
					<label>Your Email</label>
					<input
						type='text'
						placeholder='What is your email address?'
					/>
				</div>
				<div>
					<label>Your Message</label>
					<input
						type='text'
						placeholder='What would you like to say?'
					/>
				</div>
			</form>
		</div>
	);
};

export default Contact;
