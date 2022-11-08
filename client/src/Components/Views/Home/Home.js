import React from 'react';
import styled from 'styled-components';
import Layout from '../../UtilComponents/Layout';


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LogoContainer = styled.div`
    height: 70%;
    align-items: center;
    img {
        height: 100%;
        width: 80%;
        margin-left: 10%;
    }
`;


const Home = () => {
    return(
        <Layout>
            <Container>
                <div className="Logo">
                    <LogoContainer>
                        <img alt='CoBE' src='/images/Caboodle.png'/>
                    </LogoContainer>
                </div>
            </Container>
        </Layout>
    );
}

export default Home;
