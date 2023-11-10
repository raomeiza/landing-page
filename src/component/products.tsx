import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ImageSlides, { IItem } from './imageSlider';

const images = [
  {
    img: 'https://github.com/raomeiza/landing-page/blob/landing-page/src/landscap-about.PNG?raw=true',
    title: 'About- Desktop View',
  },
  {
    img: 'https://github.com/raomeiza/landing-page/blob/landing-page/src/landscap-contact.PNG?raw=true',
    title: 'Contact- Desktop View',
  },
  {
    img: 'https://github.com/raomeiza/landing-page/blob/landing-page/src/landscap-landing.PNG?raw=true',
    title: 'Landing- Desktop View',
  },
  {
    img: 'https://github.com/raomeiza/landing-page/blob/landing-page/src/landscap-product.PNG?raw=true',
    title: 'Product- Desktop View',
  },
  {
    img: 'https://github.com/raomeiza/landing-page/blob/landing-page/src/landscap-team.PNG?raw=true',
    title: 'Team- Desktop View',
  },
  {
    img: 'https://github.com/raomeiza/landing-page/blob/landing-page/src/mobile-landing.PNG?raw=true',
    title: 'Landing- Mobile View',
  },
  {
    img: 'https://github.com/raomeiza/landing-page/blob/landing-page/src/mobile-menu.PNG?raw=true',
    title: 'Menu - mobile view'
  },
  {
    img: 'https://github.com/raomeiza/landing-page/blob/landing-page/src/mobile-contact.PNG?raw=true',
    title: 'Contact - mobile view'
  },
  {
    img: 'https://github.com/raomeiza/landing-page/blob/landing-page/src/mobile-product.PNG?raw=true',
    title: 'Product - mobile view'
  },
  {
    img: 'https://github.com/raomeiza/landing-page/blob/landing-page/src/mobile-about.PNG?raw=true',
    title: 'About - mobile view'
  },
  {
    img: 'https://github.com/raomeiza/landing-page/blob/landing-page/src/mobile-team.PNG?raw=true',
    title: 'Team - mobile view'
  }
]



export default function Products(props: { id: string }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
      id={props.id}
    >
      <Typography variant="h2" component="div" gutterBottom>
        Products
      </Typography>
      <Typography variant="h4" component="div" gutterBottom>
        Here are some of our products.
      </Typography>
      <Box >
        <ImageSlides items={images} />
      </Box>
      <Box sx={{ height: '3rem' }} />
    </Box>
  )
}