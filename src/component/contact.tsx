import { Button, Card, CardContent, CardHeader, CardMedia, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';


export default function Contact(props: { id: string }) {
  return (
    <Box id={props.id}>
    <Typography variant="h2" component="div" gutterBottom>
        Contact us
      </Typography>
      <Typography variant="h4" component="div" gutterBottom>
        You can contact us at:
      </Typography>        
        <Card sx={{ padding: 2, }} component={'form'} >
          <CardHeader title="Contact Us" subheader="Please fill the form below  to contact us" />
          <CardContent >
            <TextField
              id="outlined-basic"
              label="Names"
              variant="outlined"
              helperText="Please enter your names"
              fullWidth
            />
              <Box sx={{ height: '1rem' }} />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              required
              helperText="Please enter your email"
              fullWidth
            />
              <Box sx={{ height: '1rem' }} />
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              helperText="Please enter your message. We will reply as soon as possible"
              fullWidth
            />
            <Box sx={{ height: '1rem' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '100%' }}>
            <Button variant="contained" color="primary" type="reset">
              Reset
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            </Box>
          </CardContent>
        </Card>
        <Box sx={{ height: '3rem' }} />
    </Box>
  )
}