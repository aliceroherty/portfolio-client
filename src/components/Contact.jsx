import { TextField, Button, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
	const [success, setSuccess] = useState(null);
	const [loading, setLoading] = useState(false);

	const ref = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				'service_bh6e8td',
				'template_216pnnj',
				ref.current,
				'O1qSorvnoI16YFMqs'
			)
			.then(
				(result) => {
					console.log(result.text);
					setSuccess(true);
					setLoading(false);
				},
				(error) => {
					console.log(error.text);
					setSuccess(false);
					setLoading(false);
				}
			);
	};

	return (
		<motion.div
			initial={{ transform: 'translateX(-100%)', duration: '500ms' }}
			whileInView={{ transform: 'translateX(0%)' }}
			viewport={{ once: true }}
			transition={{ duration: 1.25, type: 'spring' }}
			className='w-full pb-16 text-left px-5 md:px-24 mt-2'
			id='contact'
		>
			<h4 className='lg:text-6xl text-5xl font-bold sm:mt-0 mb-16 text-pink-300 text-center lg:text-left'>
				Contact Me
			</h4>
			<form
				ref={ref}
				onSubmit={onSubmit}
				className='flex flex-col gap-16 w-full my-auto h-auto lg:w-[55%] lg:mx-0 bg-[#212121] px-14 py-16 rounded-lg justify-between'
			>
				{!loading ? (
					<>
						<TextField
							label='What is your name?'
							name='name'
							fullWidth
							required
							disabled={success}
						/>
						<TextField
							label='What is your email?'
							name='email'
							fullWidth
							required
							disabled={success}
						/>
						<TextField
							label='What would you like to say?'
							name='message'
							fullWidth
							multiline
							required
							type='email'
							disabled={success}
						/>
					</>
				) : (
					<CircularProgress className='m-auto' />
				)}
				<Button
					variant='outlined'
					endIcon={
						loading ? (
							<CircularProgress size='1rem' />
						) : success ? (
							<CheckIcon />
						) : (
							<SendIcon />
						)
					}
					type='submit'
					color={success ? 'success' : 'primary'}
					className='h-14'
					disabled={success}
				>
					{loading ? 'Sending' : success ? 'Sent' : 'Send'}
				</Button>
			</form>
		</motion.div>
	);
};

export default Contact;
