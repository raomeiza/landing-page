import { KeyboardArrowLeft, PlayArrow, KeyboardArrowRight, PauseCircle, PlayArrowRounded } from "@mui/icons-material";
import { Slide, Card, CardHeader, CardMedia, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import React from "react";

export interface IItem {
	title: string
	img: string
}

export interface ISlidesProps {
	items: IItem[]
	circleImage?: boolean
	imageMaxWidth?: string
}

export default function ImageSlides (props: ISlidesProps) {
	const {items, circleImage, imageMaxWidth} = props
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = items.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const [sliderPaused, setSliderPaused] = React.useState(false)

	let slideTimeout: any = null

	React.useEffect(() => {
		slideTimeout = setTimeout(() => {
		console.log(activeStep, 'activeStep')
		if (activeStep === maxSteps - 1) {
			!sliderPaused && setActiveStep(0)
		} else {
			!sliderPaused && setActiveStep((prevActiveStep) => prevActiveStep + 1);
		}
	}, 5000)
	return () => clearTimeout(slideTimeout)
	}, [activeStep])
	return (
		<>
			{items.map((item, index) => (
				<Slide direction="left" in={activeStep === index} timeout={{enter: 500, exit: 50, appear: 300}} mountOnEnter unmountOnExit >
					<Card sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
						<CardMedia component="img" src={item.img} alt={item.title} sx={{minWidth: '100%', ...(props.circleImage ? {borderRadius: '50%'} : {})}} />
            <CardHeader subheader={item.title} />
						{/* <CardActions disableSpacing>
							<Button size="small" >Learn More</Button>
						</CardActions> */}
					</Card>
				</Slide>
			))}
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Button size="small" onClick={
					() => {
						clearTimeout(slideTimeout)
						handleBack()
					}
				}><KeyboardArrowLeft /></Button>
				{/* pause and play button */}
				<Button size='small' onClick={() => setSliderPaused(!sliderPaused)}>
					{sliderPaused ? (<PlayArrowRounded />) : (<PauseCircle />)}
				</Button>
				
				<Button size="small" onClick={
					() => {
						clearTimeout(slideTimeout)
						handleNext()
					}
				}><KeyboardArrowRight /></Button>
			</Box>
		</>
	)
}
