import * as React from 'react'
import MiniDrawer, { DrawerHeader } from './MiniDrawer'
import { UserContext } from '../context/userContext';
import Landing from './landing';
import Box from '@mui/material/Box';
import Products from './products';
import Contact from './contact';
import Team from './team';
import About from './about';

export default function Home() {
  const { user, token } = React.useContext(UserContext);

  return (
    <Box  component={'main'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Landing id='Home'/>
      <Box sx={{width: {xs: '90%', sm: '80%', md: '70%' }}}>
      <Products id='Products'/> 
      <Team id='Team'/>
      <About id='About'/>
      <Contact id='Contact'/>
      </Box>
      <MiniDrawer />
    </Box>
  )
}
