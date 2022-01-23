
import React, { Component, Fragment } from 'react';
import CoursePageDesc from '../Component/CoursePageDesc/CoursePageDesc';
import Footer from '../Component/Footer/Footer';
import PageTop from '../Component/PageTop/PageTop';

import TopNavigation from '../Component/TopNavigation/TopNavigation';

class CoursePages extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Our Course"/>
                <PageTop PageTopTitle="Our Course"/>
                <CoursePageDesc/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursePages;