import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../UtilComponents/Layout';
import PropTypes from 'prop-types';
import { Markup } from 'interweave';
import Moment from "moment";
import axios from "axios";
// import Loading from "../../UtilComponents/Loading";
import styled from "styled-components";
import colors from "../../../styles/colors";


const Container = styled.div`
  width: 80%;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
`;

const StyledProjects = styled.div`
    width: 80%;
    .subject {
        color: ${colors.gray_text};
        display: flex;
        align-items: center;
        height: 60px;
        font-size: 20px;
        font-weight: normal;
        margin-top: 30px;
    }
    .date{
        color: ${colors.light_gray};
        display: flex;
        align-items: center;
        height: 30px;
        font-size: 12px;
        font-weight: normal;
    }
    .content {
        font-size: 15px;
        line-height: 25px;
        font-weight: normal;
        width: 75%;
        color: ${colors.gray_text};
    }
    .divider {
        margin-bottom: 30px;
        padding-top: 10px;
    }
`;


const customizedProjects = (item,index, divider) => {
    return (
        <StyledProjects key = {index}>
            <div className='subject'>{item.title}</div>
            <div className='content'>{item.description}</div>
        </StyledProjects>
    );
}
const Projects = () => {
    const [ready, setReady] = useState(false);
    const [projects, setProjects] = useState({});
    const history = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
        const getProjects = async () => {
            const res = await axios.get('/api/data/projects');
            setProjects(res.data.projects);
            setReady(true);
        }
        getProjects();
    }, []);

    useEffect(() => {
        return(() => {
            if(history.action === 'POP' && history.location.pathname === '/') {
                console.log('history')
                history.replace({
                    pathname: '/',
                    state: {
                    }
                });
            }
        });
    }, [history]);

    console.log(projects)
    return(
        <Layout>
            <Container>
                <StyledProjects className="individual">
                    {
                        ready?
                            <>
                                { projects.sort((a,b)=> b.researchArea - a.researchArea).map((item,i) =>
                                        (customizedProjects(item, i, (i !==projects.length-1))))}
                            </>
                            : 'Loading'
                    }
                </StyledProjects>
            </Container>
        </Layout>
    );
}

export default Projects;
