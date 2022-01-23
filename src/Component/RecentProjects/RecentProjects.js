import React, { Component, Fragment } from 'react';
import Button from '@restart/ui/esm/Button';
import {Card, Col, Container, Row} from 'react-bootstrap'

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
            <Container>
            <div className="ServiceMainTitle">
                    <h2>Recent Projects</h2>
                </div>
            <Row>
                <Col>
                
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg" />
                    <Card.Body>
                        <Card.Title>Web Development</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" className="btn btn-primary">Details</Button>
                    </Card.Body>
                    </Card>
                  </Col>

                <Col>
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg" />
                    <Card.Body>
                        <Card.Title>Web Development</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" className="btn btn-primary">Details</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col>
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg" />
                    <Card.Body>
                        <Card.Title>Web Development</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" className="btn btn-primary">Details</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
            </Fragment>
        );
    }
}


export default RecentProjects;