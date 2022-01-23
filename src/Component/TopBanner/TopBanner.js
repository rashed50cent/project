import Button from '@restart/ui/esm/Button';
import React, { Component, Fragment } from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
import '../../assets/css/style.css'
import '../../assets/css/bootstrap.min.css'


class TopBanner extends Component {
    render() {
        return (
            <Fragment>
               <Container fluid={true} className="TopBanner p-0">
                    <div className="TOpBannerOverlay">
                        <Container className="TopContent">
                            <Row>
                                <Col className="ToptitleMain">
                                    <h1 className="TopTitle">
                                    Software Engineer
                                    </h1>
                                    <p className="TopsubTitle">Mobile & Web Application</p>
                                    <Button  variant="primary">More Info</Button>
                                    
                                </Col>
                            </Row>
                        </Container>

                    </div>
               </Container>
            </Fragment>
        );
    }
}

export default TopBanner;