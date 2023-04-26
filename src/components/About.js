import React from 'react';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
export default function About() {
 
  return (
    <div >
        <div className='mt-2 mx-3' >
            <h1 >About US</h1>
            <div className="accordion" id="accordionExample" >
                
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne" >
          <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
            About The Application
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body" >
          <strong>News Monkey Application</strong> This is a News Fetching application. All the news here are being written by a very talented writer MR. NEWSAPI and Miss Bootstrap is Makeup artist here. Another thing it has is it can fetch News according to defferent categories like sports, science etc. Go Switch to your Favourite Category and check the latest news, I am still reading technology news.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo" >
          <button className="accordion-button " type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
           Additional functionality
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body" >
          News Fetching is one thing, It also has Sticky Navigation Tab. And the loading spinner I added you will see it for few miliseconds while it is loading. Another thing i did here is loading, click on any tab you will see a line going from left to right which shows loading a full page, Giving it a more real look.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree" >
          <button className="accordion-button  " type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
            Resources used and about Developer
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body " >
          This React application is developed by Souravpreet Singh, who has graduated from Sheridan College April, 2023. ReactJS is the main framework used in developing this application. I used useState, useEffects Hooks to fetch data and handle side effects. Also I used Default props and props type etc to make it more professional. As It holds an API call it also uses enviornmental Variable for deployment. For the weird combination of characters called code <a href="https://github.com/sourav-thind/News_Monkey">CLICK HERE</a>. 
          </div>
        </div>
      </div>
    </div>
          
        </div>
        <Footer/>
        </div>
      )
}
