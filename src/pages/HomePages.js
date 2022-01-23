import React, { Component, Fragment } from 'react';
import TopBanner from '../Component/TopBanner/TopBanner';
import TopNavigation from '../Component/TopNavigation/TopNavigation';
import Services from '../Component/Services/Services';
import Analysis from '../Component/Analysis/Analysis';
import Summery from '../Component/Summery/Summery';
import RecentProjects from '../Component/RecentProjects/RecentProjects';
import OurCourse from '../Component/OurCourse/OurCourse';
import Video from '../Component/Video/Video';
import Review from '../Component/Review/Review';
import Footer from '../Component/Footer/Footer';

class HomePages extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Home"/>
      <TopBanner/>
      <Services/>
      <Analysis/>
      <Summery/>
      <RecentProjects/>
      <OurCourse/>
      <Video/>
      <Review/>
      <Footer/>
            </Fragment>
        );
    }
}

export default HomePages;