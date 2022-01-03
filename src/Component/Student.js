import React,{useContext} from 'react' //useContext key used to get the datas from the props from the context by only this (useContetxt-keyword) to this children (student)
import {ContextApi} from './Context'  //importing those needed props fron the context
import {Link} from 'react-router-dom'  //link needed for page navigation

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Student() {
    const [student,setStudent]=useContext(ContextApi)  //assigning the datas from props to the useState like useContext //using context data
  return (
  <div>
    <p className='Heading'><h1>Student Details</h1><Link to='/student-desc' className='addbtn'>Add Student</Link></p>
    <TableContainer sx={{
      width:'90%',
      margin:'0 5% 0 5%'
      }}component={Paper}>
        
        {/* <hr></hr> */}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {student.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.batch}</TableCell>
              <TableCell align="right"><b className='fas fa-edit'></b></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
export default Student

// npm install @mui/material @emotion/react @emotion/styled mui install cmd