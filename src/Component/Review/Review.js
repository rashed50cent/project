import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick";
import circleImage from '../../assets/images/circleImages.jpg'

class Review extends Component {
    render() {

        var settings = {
            autoplay:false,
            autoplaySpeed:3000,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            centerPadding:'500',
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };




        return (
            <Fragment>
                <Container className="text-center">
                <div className="ServiceMainTitle">
                                <h2>Clients Says</h2>
                            </div>
                            <Slider {...settings}>
                                <div >
                                    <Row>
                                        <Col >
                                            <img className="circleImg" src={circleImage} />
                                            <h4 className="pb-2">Web Development</h4>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop</p>
                                        
                                        </Col>
                                    </Row>
                                </div>


                                <div>
                                    <Row>
                                        <Col lg={12} md={12} sm={12}>
                                            <img className="circleImg" src={circleImage} />
                                            <h4>Web Development</h4>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop</p>
                                        
                                        </Col>
                                    </Row>
                                </div>


                                <div>
                                    <Row>
                                        <Col lg={12} md={12} sm={12}>
                                            <img className="circleImg" src={circleImage} />
                                            <h4>Web Development</h4>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop</p>
                                        
                                        </Col>
                                    </Row>
                                </div>
                            </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default Review;