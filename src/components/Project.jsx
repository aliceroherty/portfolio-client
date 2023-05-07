import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Project = ({ title, imageUrl, githubUrl, description }) => {
	useEffect(() => {
		VanillaTilt.init(document.querySelectorAll('.tilt'), {
			glare: true,
			'max-glare': 0.25,
		});
	});

	return (
		<CardActionArea
			sx={{ borderRadius: '4px' }}
			className='tilt'
			href={githubUrl}
		>
			<Card className='w-full h-full'>
				<CardMedia
					className='h-64'
					component='img'
					image={imageUrl}
					alt={`${title} Image`}
				/>
				<CardContent>
					<h3 className='text-2xl font-bold mb-2'>{title}</h3>
					<p className='font-light'>{description}</p>
				</CardContent>
			</Card>
		</CardActionArea>
	);
};

export default Project;
