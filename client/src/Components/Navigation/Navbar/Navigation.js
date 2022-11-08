import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../../styles/colors';

const StyledNavigation = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid ${colors.navigation_background};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.navigation_background};
`;

const Container = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
`;

const NavigationContent = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
  
    a {
        text-decoration: none;
    }
`;

const LogoContainer = styled.div`
    height: 70%;
    align-items: center;
    margin-right: 70%;
    img {
        height: 100%;
    }
`;

const StyledLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .gray {
        color: ${colors.gray_text};
        margin-left: 30%;
    }
    .gray.active {
        color ${colors.hyperlink};
    }
    a:first-child {
        margin-left: 0;
    }
`;

/**
 * Component for the navigation with links and logo.
 *
 * @component
 * @example
 *
 */
const Navigation = () => {
    return (
        <StyledNavigation>
            <Container>
                <NavigationContent>
                    <LogoContainer>
                        <img alt='CoBE' src='/images/logo.png'/>
                    </LogoContainer>
                    <StyledLinks>
                        <NavLink to='/' className='gray' activeclassname="active">HOME</NavLink>
                        <NavLink to='/members' className='gray' activeclassname="active">MEMBERS</NavLink>
                        <NavLink to='/projects' className='gray' activeclassname="active">PROJECTS</NavLink>
                        <NavLink to='/grants' className='gray' activeclassname="active">GRANTS</NavLink>
                        <NavLink to='/admin' className='gray' activeclassname="active">ADMIN</NavLink>
                    </StyledLinks>
                </NavigationContent>
            </Container>
        </StyledNavigation>
    );
};

export default Navigation;
