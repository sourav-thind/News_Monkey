import React, { useState, useEffect , } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import data from '../data.json';
import { useLocation } from 'react-router-dom';

const News =(props)=>{
   
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const location = useLocation();
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    

    document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`

      useEffect(() => {
        const filteredArticles = data.articles.filter(article => article.source.category === props.category);
        location.pathname==='/'?setArticles(data.articles):setArticles(filteredArticles);
      }, [props.category]);
      
    // const updateNews= async() =>{
    //     props.setProgress(10)
    //     setLoading(true)
    //     const url = `${process.env.REACT_APP_NEWS_API_URL}?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&pagesize=${props.pageSize}&page=${page}`
    //     props.setProgress(30)
    //     props.setProgress(40)
    //     let data = await fetch(url);
    //     props.setProgress(60)
    //     let parsedData = await data.json();
    //     props.setProgress(80)
    //     setArticles(parsedData.articles)
    //     setTotalResults(parsedData.totalResults)
    //     setLoading(false)
    //     setPage(1)
    //        props.setProgress(100)
    // }

    // useEffect(() => {
    //  updateNews()
    // }, [])
  
    // const fetchMoreData = async() => {
         
    //     setPage(page+1)
       
    //     const url = `${process.env.REACT_APP_NEWS_API_URL}?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&pagesize=${props.pageSize}&page=${page+1}`
    //     setLoading(true)
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
        
    //     setArticles(articles.concat(parsedData.articles))
    //     setTotalResults(parsedData.totalResults)
    //     setLoading(false)

            
            
    //   };
   
        return (

            <div className='container my-3 text-center'>
                <h1 style={{marginTop: 70 }}>News Monkey-Top {capitalizeFirstLetter(props.category)} Headlines  </h1>
                {/* {  loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={articles.length}
                   // next={fetchMoreData}
                    hasMore={  articles.length !==   totalResults}
                    loader={ <Spinner />}
                >
                    <div className="row">
                        {  articles.map((element) => {

                            return <div className="col-md-3" key={element.url}>
                                < NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>

            </div>
        )
    }

News.defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News

