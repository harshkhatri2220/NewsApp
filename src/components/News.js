import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {


  static defaultProps ={
    country:'in',
    pageSize:8,
    category:'general'
  }

  static propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }

  article = [];

 capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  constructor(props) {
    super(props); //we have to use super() in constructor compursarily to run constructor
    this.state = {
      articles: this.article,
      loading: true,
      page: 1,
      totalResults:0
    };

    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`
  }

  async updateNews(){
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d27448fdb5f04b8db2b18e5001028686&page=${
      this.state.page
    }&pageSize=${this.props.pageSize}`;
    //url comes from NewsApi
   
    this.props.setProgress(30);

    let data = await fetch(url); //fetch data from url and save in data
    let parsedData = await data.json();
    
    this.props.setProgress(50);


    this.setState({
      articles:parsedData.articles  ,
      totalResults:parsedData.totalResults,
      loading:false
    })
    this.props.setProgress(100);


  }

  // async means compundDidMount function will wait until internal work will done
  async componentDidMount() {
    //compundDidMount func returns after render() function
  this.updateNews();
  }
 
  fetchMoreData =async()=>{
    this.setState({page:this.state.page+1})

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d27448fdb5f04b8db2b18e5001028686&page=${
      this.state.page
    }&pageSize=${this.props.pageSize}`;
    //url comes from NewsApi
    this.setState({loading:true})

    let data = await fetch(url); //fetch data from url and save in data
    let parsedData = await data.json();

    this.setState({
      articles:this.state.articles.concat(parsedData.articles)  ,
      loading:false,
      totalResults:parsedData.totalResults
    })

  }

  render() {
    
    return (
     <>
        <h1 className="text-center" style={{margin:'20px 0px'}} > News-App - Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading && <Loading/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults }
          loader={<Loading />}
        >
          <div className="container">
        <div className="row">
          { this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={
                    element.title ? element.title.slice(0, 100) + "...." : ""
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 100) + "...."
                      : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={!element.author?"Unknown":element.author}
                  date={element.publishedAt}
                  sourse={element.source.name}
                />
              </div>

            );
          })}
            </div>

        </div>
        </InfiniteScroll>
        
        </>
    );
  }
}

export default News;
