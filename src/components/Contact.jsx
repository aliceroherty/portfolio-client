import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';

const Contact = () => {
	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<motion.div
			initial={{ transform: 'translateX(-100%)', duration: '500ms' }}
			whileInView={{ transform: 'translateX(0%)' }}
			viewport={{ once: true }}
			transition={{ duration: 1.25, type: 'spring' }}
			className='w-full h-screen text-left px-5 md:px-24 mt-2'
			id='contact'
		>
			<h4 className='lg:text-6xl text-5xl font-bold sm:mt-0 mb-16 text-pink-300 text-center lg:text-left'>
				Contact Me
			</h4>
			<form
				onSubmit={onSubmit}
				className='flex flex-col gap-16 w-full my-auto h-[50%] lg:h-auto lg:w-[55%] lg:mx-0 bg-[#212121] px-14 py-16 rounded-lg justify-between'
			>
				<TextField
					label='What is your name?'
					name='name'
					fullWidth
					required
				/>
				<TextField
					label='What is your email?'
					name='email'
					fullWidth
					required
				/>
				<TextField
					label='What would you like to say?'
					name='message'
					fullWidth
					multiline
					required
				/>
				<Button
					variant='outlined'
					endIcon={<SendIcon />}
					type='submit'
					color='primary'
					className='h-14'
				>
					Send
				</Button>
			</form>
		</motion.div>
	);
};

export default Contact;
