import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../../assets/images/web.jpg'

class OurCourse extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                <div className="ServiceMainTitle">
                        <h2>My Service</h2>
                    </div>
                    <Row>
                        <Col lg={6} md={12} sm={12} >
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <div className="CourseImagesRc">
                                        <img src={img1} />
                                    </div>
                                    
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <div className="CourseContent">
                                        <h4>Web Development</h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                                        <a href="#">Details</a>
                                    </div>
                                </Col>
                            </Row>
                            


                        </Col>


                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="CourseImagesRc">
                                            <img src={img1} />
                                        </div>
                                        
                                    </Col>

                                    <Col lg={6} md={6} sm={12}>
                                        <div className="CourseContent">
                                            <h4>Web Development</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                                            <a href="#">Details</a>
                                        </div>
                                    </Col>
                                </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="mt-3">
                            <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="CourseImagesRc">
                                            <img src={img1} />
                                        </div>
                                        
                                    </Col>

                                    <Col lg={6} md={6} sm={12}>
                                        <div className="CourseContent">
                                            <h4>Web Development</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                                            <a href="#">Details</a>
                                        </div>
                                    </Col>
                                </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="mt-3">
                            <Row >
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="CourseImagesRc">
                                            <img src={img1} />
                                        </div>
                                        
                                    </Col>

                                    <Col lg={6} md={6} sm={12}>
                                        <div className="CourseContent">
                                            <h4>Web Development</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                                            <a href="#">Details</a>
                                        </div>
                                    </Col>
                                </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default OurCourse;