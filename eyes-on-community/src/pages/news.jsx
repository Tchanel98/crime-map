import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const news = () => {
  return (
    <>
      <div style={{margin:"30px"}}>
        <h1>Latest News</h1>
        <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqzN5tLn9nTvfGOWEWyi9VgsKAG5efdrp-6piHWA59Q&s'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Crime</MDBCardTitle>
              <MDBCardText>
              London has unfortunately seen a rise in knife crime over recent years, with various incidents of stabbings reported across different boroughs.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://www.telegraph.co.uk/content/dam/news/2017/10/20/TELEMMGLPICT000144199687_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Burglaries</MDBCardTitle>
              <MDBCardText>
              Certain areas in London experience higher rates of burglaries, particularly in residential areas or during certain times of the year.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713225600&semt=sph'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Cybercrime</MDBCardTitle>
              <MDBCardText>
              With the growth of digital technology, cybercrime such as online scams, identity theft, and hacking are also prevalent in London, impacting individuals and businesses.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </div>
    </>
  );
};

export default news;
