import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navbar/Navigation';
import Footer from '../Navigation/Footer/Footer';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  background-color: #f0f0f0;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
`;

/**
 * wrapper for every page
 */
const Layout = (props) => {
    const {children} = props;

    return(
        <React.Fragment>
            <Navigation />
            <Main>
                {children}
            </Main>
            <Footer />
        </React.Fragment>
    );
};

Layout.propTypes = {
    /**
     * Layout's children (components on the page)
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

Layout.defaultProps = {
    page: '',
    children: null,
};

export default Layout;
