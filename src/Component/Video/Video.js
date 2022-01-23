import React, { Component, Fragment } from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import Button from '@restart/ui/esm/Button'
import "video-react/dist/video-react.css"
import {Player, BigPlayButton} from 'video-react'

class Video extends Component {
   
    constructor(){
        super();
        this.state={
            show:false
        }
    }

    modalClose =()=>this.setState({show:false});
    modalOpen =()=>this.setState( {show:true} )


    render() {
        return (
            <Fragment>
                <Container>
                <div className="ServiceMainTitle">
                    <h2>Video</h2>
                </div>
                    <Row>
                        <Col lg={12} sm={12}>
                            <div className="HowiDoItems">
                                <h4>How I Do</h4>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>
                                
                                <Button>
                                <FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle} /> 
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                    
                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                        <Modal.Body>

                            <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            <BigPlayButton position="center" />
                            </Player>
                            
                        </Modal.Body>
                    <Modal.Footer>
                        
                    <Button variant="primary" className="btn btn-primary" onClick={this.modalClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
}

export default Video;