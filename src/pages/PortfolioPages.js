import React, { Component, Fragment } from 'react';
import Footer from '../Component/Footer/Footer';
import PageTop from '../Component/PageTop/PageTop';
import PortfolioDesc from '../Component/Portfolio/PortfolioDesc';
import TopNavigation from '../Component/TopNavigation/TopNavigation';

class PortfolioPages extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Portfolio"/>
                <PageTop PageTopTitle="Portfolio"/>
                <PortfolioDesc/>
                <Footer/>
                
            </Fragment>
        );
    }
}

export default PortfolioPages;