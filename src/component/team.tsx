import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import * as Om from '../om.jpg'
import * as Om1 from '../om1.jpg'
import * as Om2 from '../om2.jpg'
import * as Om3 from '../om3.jpg'
import * as Om4 from '../om4.jpg'
import Slides, { IItem } from './slider';


const items: IItem[] = [
	{
	name: 'R A Omeiza',
	image: Om,
	description: 'A full stack developer with a passion for learning and teaching.',
	url: 'https://linkedin.com/in/raheem-a-omeiza',
	},
	{
	name: 'Abdulraheem A Omeiza',
	image: Om1,
	description: 'A full stack developer with a passion for learning and teaching.',
	url: 'https://github.com/raomeiza',
	},
	{
	name: 'A A Omeiza',
	image: Om2,
	description: 'A full stack developer with a passion for learning and teaching.',
	url: 'https://twitter.com/raomeiza',
	},
	{
	name: 'Emotion',
	image: Om3,
	description: 'A full stack developer with a passion for learning and teaching.',
	url: 'https://emotion.sh/docs/introduction',
	},
	{
	name: 'Omeiza',
	image: Om4,
	description: 'A full stack developer with a passion for learning and teaching.',
	url: 'https://reactrouter.com/',
	}
]

export default function Team(props: { id: string }) {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}
      id={props.id}
    >
      <Typography variant="h2" component="div" gutterBottom>
        Team
      </Typography>
      <Slides items={items} circleImage />
      <Box sx={{ height: '3rem' }} />
    </Box>
  )
}