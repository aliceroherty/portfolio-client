import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { slideInLeft } from '../utils/motion';

const Timeline = () => {
	const timelineElements = [
		{
			id: 1,
			title: 'High School Diploma',
			location: 'Dalhousie, New Brunswick',
			description:
				'Excelled in computer science course where projects where written in Visual Basic. Learned basics of core programming concepts.',
			date: 'September 2014 - June 2018',
			icon: 'school',
		},
		{
			id: 2,
			title: 'Web and Mobile App Development',
			location: 'Moncton, New Brunswick',
			description:
				'Further cemented my skills in software development working primarily in .NET Framework with C#. Built hybrid and native mobile apps using React-Native, Swift, and Kotlin.',
			date: 'September 2018 - May 2020',
			icon: 'school',
		},
		{
			id: 3,
			title: 'BC Jobs',
			location: 'Vancouver, British Columbia (Remote)',
			description:
				'Migrated system from a data center to a cloud-based solution. Automated deployments using GitHub Actions. Maintained and expanded upon ASP.NET Core application. Improved site’s SEO resulting in an increase of traffic.',
			date: 'June 2020 - July 2022',
			icon: 'work',
		},
	];

	return (
		<motion.div
			variants={slideInLeft}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			className='w-full text-left mt-1 mb-24'
			id='timeline'
			name='timeline'
		>
			<h4 className='lg:text-6xl text-5xl font-bold sm:mt-0 mb-16 text-pink-300 text-center lg:text-left'>
				Timeline
			</h4>
			<VerticalTimeline>
				{timelineElements.map((element) => {
					return (
						<VerticalTimelineElement
							key={element.id}
							date={element.date}
							dateClassName='date'
							contentStyle={{
								background: '#212121',
								color: '#fff',
							}}
							contentArrowStyle={{
								borderRight: '7px solid #212121',
							}}
							iconStyle={{ background: 'rgb(249 168 212)' }}
							icon={
								element.icon === 'work' ? (
									<WorkOutlineIcon />
								) : (
									<SchoolIcon />
								)
							}
						>
							<h3 className='vertical-timeline-element-title text-2xl'>
								{element.title}
							</h3>
							<h5 className='vertical-timeline-element-subtitle'>
								{element.location}
							</h5>
							<p id='description'>{element.description}</p>
						</VerticalTimelineElement>
					);
				})}
			</VerticalTimeline>
		</motion.div>
	);
};

export default Timeline;
