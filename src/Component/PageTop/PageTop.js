import React, { Component, Fragment } from 'react';
import {Col, Container, Row} from 'react-bootstrap'


class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="PageTopBanner p-0">
                    <div className="PageTOpOverlay">
                        <Container className="PageTopContent text-center">
                            <Row>
                                <Col className="PageTopTitle">
                                   <h5>{this.props.PageTopTitle}</h5>
                                </Col>
                            </Row>
                        </Container>

                    </div>

                </Container>
            </Fragment>
        );
    }
}

export default PageTop;