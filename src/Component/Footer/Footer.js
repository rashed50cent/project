import React, { Component, Fragment } from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
    render() {
        return (
            <Fragment>
                 <div className="FooterSection">
                <Container  className="FooterDescription">
                <div className="ServiceMainTitle">&nbsp;</div>
                    <Row> 
                        <Col lg={3} Md={3} sm={12}>
                            <div className="FooterTitle">
                                <h4>Follow Me</h4>
                            </div>
                            <div className="FooterDetailsItem">
                                
                               <ul>
                                <li><a href="#"><FontAwesomeIcon  icon={faFacebook} />  Facebook</a> </li>
                               <li>
                                 <a href="#"><FontAwesomeIcon  icon={faYoutube} /> YouTube</a> </li>
                               </ul>
                                
                            </div>
                        </Col>

                        <Col lg={4} Md={4} sm={12}>
                        <div className="FooterTitle">
                                <h4>Address</h4>
                            </div>
                            <div className="FooterDetailsItem">
                                <p>73 Harper Street <br/>
                                Campbellsville, KY 42718</p>
                                <p><FontAwesomeIcon  icon={faEnvelope} /> micheal50cent@gmail.com </p>
                                <p><FontAwesomeIcon  icon={faPhone} />  +9711 635 3651</p>
                            </div>
                        </Col>

                        <Col lg={3} Md={3} sm={12}>
                        <div className="FooterTitle">
                                <h4>Information</h4>
                            </div>
                            <div className="FooterDetailsItem">
                                <ul>
                                    <li> <a href="#">About Us</a> </li>
                                    <li> <a href="#">My Resume</a> </li>
                                    <li> <a href="#">Contact Me</a> </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={2} Md={2} sm={12}>
                        <div className="FooterTitle">
                                <h4>Legal</h4>
                            </div>
                            <div className="FooterDetailsItem">
                                <ul>
                                    <li> <a href="#">Refund Policy</a> </li>
                                    <li> <a href="#">Terms And Condition</a> </li>
                                    <li> <a href="#">Privacy Policy</a> </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
                <Container fluid={true} className="FooterBottoms">
                    <Row>
                        <Col lg={12} md={12} className="text-center FooterBorder">
                            <p>Copyright © 2021. Rashedul Islam. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;