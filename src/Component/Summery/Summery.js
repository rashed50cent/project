import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'

class Summery extends Component {
    render() {
        return (
            <Fragment>
                 <Container fluid={true} className="SummeryBanner p-0">
                 <div className="SummeryBannerOverlay">
                     <Container className="SummeryMain">
                        <Row>
                            <Col lg={4} md={6} sm={6} col={6}>
                                <div className="projectsItems">
                                    <h3>
                                    <CountUp start={0} end={100} duration={3} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef}  />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h3>
                                    <h4>Total Projects</h4>
                                    <span className="borderBtm">&nbsp;</span>
                                </div>
                            </Col>

                            <Col lg={4} md={6} sm={6} col={6}>
                                <div className="projectsItems">
                                    <h3>
                                        <CountUp start={0} end={100} duration={3} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                   <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h3>
                                    <h4>Total Projects</h4>
                                    <span className="borderBtm">&nbsp;</span>
                                </div>
                            </Col>
                            <Col lg={1}></Col>
                            <Col lg={3} md={12} sm={12}>
                                <div className="HowItWorks">
                                    <h3>How It Work</h3>
                                    <ul>
                                        <li>Requerments Cathering</li>
                                        <li>System Analysis</li>
                                        <li>Coding Test</li>
                                        <li>Implementions</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                     </Container>
                   
                </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summery;