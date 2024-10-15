import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
    <Container className='d-flex justify-content-center align-items-center my-5 mx4'>
        <Row className='d-flex justify-content-center align-items-center '>
            <Col md={6}>
            <h2 id='brand'>Welcome to <span className='text-danger' style={{fontWeight:600}}>WatchNow</span></h2>
            <p style={{textAlign:'justify'}}>Discover a world of entertainment with WatchNow, the go-to platform for movie lovers, binge-watchers, and TV series fanatics. Whether you're into the latest blockbusters, classic films, or original web series, we've got you covered. Enjoy seamless streaming in HD, exclusive content, and personalized recommendations tailored to your taste.</p>
            <Link to={'/home'}><button className='btn btn-warning'>Get started</button></Link>
            </Col>
            <Col md={1}></Col>
            <Col md={5} className='d-flex justify-content-center align-items-center mt-5 mt-md-0'><img src="https://c.tenor.com/dqybJUNzYI0AAAAC/tenor.gif" alt="" className='w-75' /></Col>

        </Row>
    </Container>
{/* Features */}
    <Container className='mt-5'>
        <h2 className='text-center'>Features</h2>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
          <Row className='mt-5 d-flex justify-content-center align-items-center'>
            <Col md={4} className='p-3'><Card style={{ width: '100%',height:'350px'  }} className='d-flex justify-content-center align-items-center'>
      <Card.Img variant="top" src="https://media.tenor.com/PPHu5jNAggcAAAAM/movies-popcorn.gif" height={'200px'}/>
      <Card.Body>
        <Card.Title className='text-center'>Watch everywhere</Card.Title>
        <Card.Text className='text-center'>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%',height:'350px' }}>
      <Card.Img variant="top" src="https://media.tenor.com/mBqxIYnWHccAAAAM/its-showtime-prabhas.gif" height={'200px'} />
      <Card.Body>
        <Card.Title className='text-center'>Download your shows to watch offline</Card.Title>
        <Card.Text className='text-center'>
        Save your favourites easily and always have something to watch.
        </Card.Text>
      </Card.Body>
    </Card></Col>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%',height:'350px'  }}>
      <Card.Img variant="top" src="https://i.giphy.com/lQredg3DM01jTWzX0m.webp" height={'200px'} />
      <Card.Body>
        <Card.Title className='text-center'>Enjoy on your TV</Card.Title>
        <Card.Text className='text-center'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
        </Card.Text>
      </Card.Body>
    </Card></Col>
            </Row></Col>
            <Col md={1}></Col>
        </Row>
    </Container>
    {/*section yt*/}

    <div className='container'>
        <div className='row p-md-5 p-3'>
            <div className='col border border-secondary border-2 rounded p-md-5 p-4'>
                <div className='row'>
                  <div className='col-md-6'>
                    <h2 className='text-warning'>Watch TV Shows & Movies Online.</h2>
                    <p><span className='fs-4'>Play everything</span> Step into a world where entertainment knows no boundaries, where your screens come alive with an endless array of captivating stories.</p>
                    <p className='mt-2'><span className='fs-4'>Multiple Device Support</span> Including smart TVs, smartphones, tablets, laptops, and gaming consoles.</p>
                    <p className='mt-2'><span className='fs-4'>High-Definition Streaming</span> Stunning visuals with content available in 4K, Ultra HD and HDR.</p>
                  </div>
                  <div className='col-md-6'>
                  <iframe width="100%" height="414" src="https://www.youtube.com/embed/zSWdZVtXT7E?si=-n36GVvn8Li1_EMZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Landing