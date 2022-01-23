
import React, { Component, Fragment } from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import '../../assets/css/style.css';
import '../../assets/css/bootstrap.min.css';
import whitelogo from '../../assets/images/navlogo.svg';
import bluelogo from '../../assets/images/navlogoScroll.svg'
import { NavLink } from 'react-router-dom';

class TopNavigation extends Component {

    constructor(props) {
        super();
        this.state = {
        NavBarTitle: "NavTitle",
        NavBarLogo: [whitelogo],
        NavBarBack  : "NavBackGround",
        navBarItem : "navItem",
        navVariant: "dark",
        pagesTitle: props.title,
        }
    }

    onScroll =()=>{
        if(window.scrollY>100){
            this.setState( {navVariant:'light', NavBarTitle: 'NavTitleScroll', NavBarLogo: [bluelogo], NavBarBack: 'NavBackGroundScroll', navBarItem:'navItemScroll' } )
        }
        else if (window.scrollY<100){
            this.setState( {navVariant:'dark',NavBarTitle: 'NavTitle', NavBarLogo: [whitelogo], NavBarBack: 'NavBackGround', navBarItem:'navItem'} )
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }





    render() {
        return (
            <Fragment>
                <title>{this.state.pagesTitle}</title>
                <Container>
                    <Row>
                    <Navbar variant={this.state.navVariant} className={this.state.NavBarBack} fixed="top" collapseOnSelect expand="lg" >

                    <Navbar.Brand href="#home" className={this.state.NavBarTitle}>
                        <img src={this.state.NavBarLogo}/> Rashedul Islam</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto"></Nav>

                            <Nav>
                                <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/">Home</NavLink>
                                <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/about">About</NavLink>
                                <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/service">Services</NavLink>
                                <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/portfolio">Porfolio</NavLink>
                                <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/course">Course</NavLink>
                                <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/contact">Contact</NavLink>
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TopNavigation;