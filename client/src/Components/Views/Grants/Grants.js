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

const StyledNews = styled.div`
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


const customizedNews = (item,index, divider) => {
    return (
        <StyledNews key = {index}>
            <div className='subject'>{Moment(item.date).format("MMM Do, YYYY")}</div>
            <div className='content'><Markup content={item.content}/></div>
        </StyledNews>
    );
}
const News = () => {
    const [ready, setReady] = useState(false);
    const [news, setNews] = useState({});
    const history = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
        const getNews = async () => {
            const res = await axios.get('/api/data/news');
            setNews(res.data.news);
            setReady(true);
        }
        getNews();
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

    return(
        <Layout>
            <Container>
                <StyledNews className="individual">
                    {
                        ready?
                            <>
                                {news.sort((a,b)=> new Date(b.date) - new Date(a.date)).map((item,i) =>
                                        (customizedNews(item, i, (i !==news.length-1))))}
                            </>
                            : 'Loading'
                    }
                </StyledNews>
            </Container>
        </Layout>
    );
}

export default News;
