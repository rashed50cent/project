import React, { Component, fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {Bar, BarChart, ResponsiveContainer, XAxis, Tooltip} from 'recharts';

class Analysis extends Component {


    constructor(){
        super();

        this.state={

            data:[

                {Technology:'Java', Projects:100},
                {Technology:'Kothlin', Projects:80},
                {Technology:'React', Projects:60},
                {Technology:'Html', Projects:40},
                {Technology:'css', Projects:10},
                {Technology:'PHP', Projects:90},
                {Technology:'Vuejs', Projects:85},
                {Technology:'Python', Projects:75}

            ]


        }
    }




    render() {
        var blue = "rgb(53 126 221)";
        return (
            <fragment>
                <Container>
                <div className="ServiceMainTitle">
                        <h2>Technology Used</h2>
                    </div>
                    <Row>
                        <Col style={{width:'100% !importent', height:'300px'}} lg={6} md={6} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology"/>
                                    <Tooltip datatype="Projects"/>
                                    <Bar dataKey="Projects" fill={blue} >

                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                            
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <div className="analysis-text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </fragment>
        );
    }
}

export default Analysis;