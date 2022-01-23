
import React, { Component, Fragment } from 'react'
import AboutDescription from '../Component/AboutDescription/AboutDescription'
import Footer from '../Component/Footer/Footer'
import PageTop from '../Component/PageTop/PageTop'
import TopNavigation from '../Component/TopNavigation/TopNavigation'

export default class AboutPages extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="About TItle"/>
                <PageTop PageTopTitle="About Me"/>
                <AboutDescription/>
                <Footer/>
                
            </Fragment>
        )
    }
}
