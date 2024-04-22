import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

const signUp = () => {
  return (
    <>
    <div style={{margin:"30px"}}>
      <h1>Join Us</h1>
      <center>
        <div style={{width:"450px"}}>
          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
          <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Eye of Community</h3>

          <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Name' id='formControlLg' type='text' size="lg"/>
          <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

          <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' style={{backgroundColor:"#1976d2"}}>JOIN</MDBBtn>
          </div>
        </div>
      </center>
    </div>
    </>
  )
}

export default signUp