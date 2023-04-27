import React from 'react'
import sampleimg from '../assets/fav.png'
const NewsItem =(props)=>{

    let {title,description, imageUrl, newsUrl , author , date} = props;
    return (
      <div><div className="card my-2" style={{width: '18rem'}}>
       <img src={imageUrl===null?sampleimg:imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div></div>
    )
  }
export default NewsItem
