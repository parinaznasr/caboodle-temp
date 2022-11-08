import React from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';

const StyledFooter = styled.div`
  position: relative;
  bottom: 0%;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #273739;
`

const FooterContent = styled.div`
    width: 90%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const FooterItem = styled.div`
    display: flex;
    align-items: center;
    color: ${colors.light_gray};
    font-size: 10px;
    a {
        color: ${colors.light_gray};
        text-decoration: none;
    }
    .divider {
        margin: 0px 10px;
    }
    .logo-sm {
        img {
            width: 100%;
        }
        margin-right: 30px;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <FooterContent>
                <FooterItem>
                    <span className='link'><a href='/'>HOME</a></span>
                    <span className='divider'>|</span>
                    <span className='link'><a href='/members'>MEMBERS</a></span>
                    <span className='divider'>|</span>
                    <span className='link'><a href='/projects'>PROJECTS</a></span>
                    <span className='divider'>|</span>
                    <span className='link'><a href='/grants'>GRANTS</a></span>
                    <span className='divider'>|</span>
                    <span className='link'><a href='/admin'>ADMIN</a></span>
                </FooterItem>
                <FooterItem>
                    <span>BHKLAB &#169; 2022</span>
                </FooterItem>
            </FooterContent>
        </StyledFooter>
    );
}

export default Footer;
