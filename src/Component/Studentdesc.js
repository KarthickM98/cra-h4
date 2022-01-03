
import * as React from 'react';
import '../App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Studentdesc() {
  return (
  <div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch',margin:'50px'},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="Your Name"
        />
        <TextField
          id="outlined-number"
          label="Age"
          type="Number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
      <TextField
          required
          id="outlined-required"
          label="Course"
          defaultValue="Your Course"
        />
        <TextField
          required
          id="outlined-required"
          label="Batch"
          defaultValue="Your Batch"
        />
      </div><Button
      style={{
        color:'black',
        borderColor:'black',
        marginLeft:'63%'
        // position:'absolute',
        // top:'300px',
        // right:'0px'
      }}
      variant="outlined">Cancel</Button>  &nbsp;  <Button variant="contained">Update!</Button>

    </Box>   
  </div> 
  );
}


