import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps = {
        country : "in",
        pageSize : 12,
        category : ""
    }
    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }
    articles = [
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Analysis: Short sellers gain nearly $304 bln after tumble in U.S. stocks",
        "description": "This year's steep decline in U.S. equities is juicing the returns of short sellers, who are on track for their first yearly gain since 2018 thanks in part to bets against shares of Tesla ",
        "url": "https://www.reuters.com/markets/us/short-sellers-gain-nearly-304-bln-after-tumble-us-stocks-2022-12-22/",
        "urlToImage": "https://www.reuters.com/resizer/YLmhWehcSPf83jpcxb_5NZwvu1s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KLSBJWBSURPJFAFCBKNXXO3XMM.jpg",
        "publishedAt": "2022-12-22T06:04:54Z",
        "content": "NEW YORK, Dec 22 (Reuters) - This year's steep decline in U.S. equities is juicing the returns of short sellers, who are on track for their first yearly gain since 2018 thanks in part to bets against… [+4673 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Tesla offers discount on some car models in U.S., Canada",
        "description": "Tesla Inc <a href= \"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> is offering discounts on Model 3 and Model Y vehicles delivered in the Area.",
        "url": "https://www.reuters.com/business/autos-transportation/tesla-offers-discount-some-car-models-us-canada-2022-12-22/",
        "urlToImage": "https://www.reuters.com/resizer/2GKZ10ZmzP2WrBCZW3mpbSNW-5g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FE4DIZIULJIG5HYR3MVGF7OYIY.jpg",
        "publishedAt": "2022-12-22T05:11:17Z",
        "content": "Dec 21 (Reuters) - Tesla Inc (TSLA.O) is offering discounts on Model 3 and Model Y vehicles delivered in the United States and Canada this month, sales pages on its website showed on Wednesday, amid … [+1420 chars]"
        },
        
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Rebecca Szkutak",
        "title": "Investor interest in SpaceX appears immune to Musk's meddling",
        "description": "While Elon Musk's acquisition of Twitter negatively impacted Tesla's stock price, SpaceX didn't see the same result.",
        "url": "https://techcrunch.com/2022/12/21/investor-interest-in-spacex-appears-immune-to-musks-meddling/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/12/GettyImages-1323284095.jpg?resize=1200,675",
        "publishedAt": "2022-12-21T20:41:30Z",
        "content": "Elon Musk’s acquisition of Twitter sent Tesla’s stock price on a roller coaster this year as its value correlated largely negatively with each development at the social media company. But SpaceX’s su… [+910 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Darrell Etherington",
        "title": "Tesla said to be conducting a fresh round of layoffs next quarter",
        "description": "Tesla will reportedly conduct a new round of layoffs and also pause hiring starting in the first quarter of 2023.",
        "url": "https://techcrunch.com/2022/12/21/tesla-said-to-be-conducting-a-fresh-round-of-layoffs-next-quarter/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/GettyImages-1160314766.jpg?resize=1200,800",
        "publishedAt": "2022-12-21T19:02:09Z",
        "content": "Tesla is battening down the hatches against feature oil a worsening economy, according to a new report from Electrek. The automaker will conduct a new round of layoffs in the first quarter of 2023, p… [+983 chars]"
        },
        {
        "source": {
        "id": "breitbart-news",
        "name": "Breitbart News"
        },
        "author": "Lucas Nolan",
        "title": "Elon Musk Argues with Investors Over Tesla Shares Dropping Like a Rock",
        "description": "Tesla CEO and Twitter owner Elon Musk has been arguing with Tesla investors in recent days as the electric car company's stock price continues to plummet. Long-time Tesla bull Ross Gerber complained that Tesla has \"no CEO,\" while Musk steadfastly claimed that…",
        "url": "https://www.breitbart.com/tech/2022/12/21/elon-musk-argues-with-investors-over-tesla-shares-dropping-like-a-rock/",
        "urlToImage": "https://media.breitbart.com/media/2019/11/Elon-Musk-examines-cracked-Cybertruck-windows-640x335.jpg",
        "publishedAt": "2022-12-21T18:42:22Z",
        "content": "Tesla CEO and Twitter owner Elon Musk has been arguing with Tesla investors in recent days as the electric car company’s stock price continues to plummet. Long-time Tesla bull Ross Gerber complained … [+3340 chars]"
        },{
            "source": {
            "id": "gruenderszene",
            "name": "Gruenderszene"
            },
            "author": null,
            "title": "Elon Musk macht ein soziales Netzwerk erfolgreich – nur ist es nicht Twitter",
            "description": "Das bisher wenig bekannte Mastodon verzeichnet seit dem Twitter-Chaos Tausende Anmeldungen pro Stunde. Außerdem: Tesla soll neue Fabrik in Mexiko planen und Netflix will das Fitnessstudio ersetzen.",
            "url": "https://www.businessinsider.de/gruenderszene/business/elon-musk-macht-soziales-netzwerk-erfolgreich-aber-nicht-twitter/",
            "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2022/12/GettyImages-1244585198.jpg?ver=1671669701",
            "publishedAt": "2022-12-22T04:55:00+00:00",
            "content": "Das bisher wenig bekannte Mastodon verzeichnet seit dem Twitter-Chaos Tausende Anmeldungen pro Stunde. Außerdem: Tesla soll neue Fabrik in Mexiko planen und Netflix will das Fitnessstudio ersetzen. \r… [+5366 chars]"
            }
        
        ]
        capitalizeFirstLetter=(string) =>{
            return string.charAt(0).toUpperCase() + string.slice(1);
          }   
    constructor(props){
        super(props);
        this.state={
            articles : this.articles,
            loading : false,
            page: 1,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`
    }
    
    async updateNews() {
        this.setState({loading:true})
            const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a73a7c23b853408dade2e4b24dc30321&pagesize=${this.props.pageSize}&page=${this.state.page}`
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState(
                {page : this.state.page,
                    articles : parsedData.articles,
                    loading:false})
                
            }

    
    async componentDidMount(){
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a73a7c23b853408dade2e4b24dc30321&pagesize=${this.props.pageSize}&page=${this.state.page}`
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({articles : parsedData.articles, totalResults : parsedData.totalResults})
        this.setState({page: 1})
        this.updateNews()
        }
    
    handlePrevClick = async () =>{
        
            // this.setState({loading:true})
            // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a73a7c23b853408dade2e4b24dc30321&pagesize=${this.props.pageSize}&page=${this.state.page -1}`
            // let data = await fetch(url);
            // let parsedData = await data.json();
            // this.setState(
            //     {page: this.state.page -1,
            //         articles : parsedData.articles,
            //         loading:false})
            this.setState({page: this.state.page - 1})
                this.updateNews()
            }
    
    handleNextClick = async () =>{
        // if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){ 
        // }
        // else{
        //     this.setState({loading:true})
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a73a7c23b853408dade2e4b24dc30321&pagesize=${this.props.pageSize}&page=${this.state.page +1}`
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState(
        //     {page: this.state.page +1,
        //     articles : parsedData.articles,
        //     loading:false})
        // }
        this.setState({page: this.state.page + 1})
            this.updateNews()
    }

    
  render() {
    return (
   
      <div className='container my-3 text-center'> 
      <h2>News Monkey-Top {this.capitalizeFirstLetter(this.props.category)} Headlines  </h2>
      {this.state.loading && <Spinner/>}
      <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{

        return <div className="col-md-3" key={element.url}>
         < NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
        </div>
        })}
        </div>
        
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-info" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-info" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      
      </div>
    )
  }
}

