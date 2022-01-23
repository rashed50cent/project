import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import graphicslogo from '../../assets/images/graphics.svg'
import weblogo from '../../assets/images/web.svg'
import mobilelogo from '../../assets/images/mobile.svg'

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <div className="ServiceMainTitle"><h2>My Service</h2> </div>

                    <Row>
                        <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard ">
                               <img src={graphicslogo}/>
                               <h3 className="serviceName">Web Development</h3>
                               <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>


                           </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard ">
                                <img src={weblogo} />
                                <h3 className="serviceName">Mobile Development</h3>
                                <p className="serviceDescription">I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard ">
                                <img src={mobilelogo} />
                                <h3 className="serviceName">Graphics Design</h3>
                                <p  className="serviceDescription">I desing modern user interface and other graphical components for your business and instiution.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;