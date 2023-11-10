import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CustomizedSteppers from './StepperCustomized';
import ImageSlides from './imageSlider';
import * as MobileAbout from '../mobile-about.png'
import * as MobileContact from '../mobile-contact.png'
import * as MobileProducts from '../mobile-product.png'
import * as MobileTeam from '../mobile-team.png'
import * as MobileHome from '../mobile-landing.png'
import * as MobileMenu from '../mobile-menu.png'
import * as LandscapeAbout from '../landscape-about.png'
import * as LandscapeContact from '../landscape-contact.png'
import * as LandscapeProducts from '../landscape-product.png'
import * as LandscapeTeam from '../landscape-team.png'
import * as LandscapeHome from '../landscape-landing.png'

const images  = [
  MobileHome, MobileProducts, MobileTeam, MobileAbout, MobileContact, MobileMenu,
  LandscapeHome, LandscapeProducts, LandscapeTeam, LandscapeAbout, LandscapeContact,
]



export default function Products(props: { id: string }) {
  return (
    <Box
      sx={{
        height: '100vh',
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

      <CustomizedSteppers />
      </Box>
      <Box sx={{ height: '3rem' }} />
    </Box>
  )
}