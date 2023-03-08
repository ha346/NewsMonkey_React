// React Function Based Component

import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); 
  // const [pageSize, setPageSize] = useState(0);
  const [totalResults, setTotalResults] = useState(0); 

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const updatePage= async()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true) 
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updatePage(); 
    // eslint-disable-next-line
  }, [])

  const handlePrevClick = async () => {
    // console.log("Previous")
    //  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d7ef701adfdc469b9ff8470c2698fd6e&page=${state.page-1}&pageSize=${props.pageSize}`
    // setLoading(true); 
    //  let data = await fetch(url);
    // let parsedData = await data.json();
    // setArticles(parsedData.articles)
    // setTotalResults(parsedData.totalResults)
    // setLoading(false)
    setPage(page - 1);
    updatePage();
  };

  const handleNextClick = async () => {
    // // if (this.state.page + 1 > Math.ceil(totalResults /  props.pageSize)) {

    // // }
    // // else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d7ef701adfdc469b9ff8470c2698fd6e&page=${page + 1}&pageSize=${props.pageSize}`
    // setLoading(true)
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    // setArticles(parsedData.articles)
    // setTotalResults(parsedData.totalResults)
    // setLoading(false) 
    // // }
    setPage(page+1)
    updatePage();
  };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
 
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop:"90px" }}>
          News Monkey - Top {capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h1>
        <div className="d-flex justify-content-center align-items-center">
          {loading && <Spinner />}
        </div>

        {/* <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={
            <div className="d-flex justify-content-center align-items-center">
              <Spinner />
            </div>
          }
        > */}

{/* <InfiniteScroll
                    // dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
          >  */}
            
          <div className="container">
            <div className="row">
              {/* {!this.state.loading && this.state.articles.map((element) => { */}
              {articles.map((element, index) => {
                return (
                  <div className="col md-4 my-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
            {/* <div className="container d-flex justify-content-between">
          <button disabled={page<=1} type="button" className="btn btn-dark" onClick={ handlePrevClick}>&larr; Previous</button>
          <button disabled={page+1>Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr; </button>
        </div> */}
          </div>
        {/* </InfiniteScroll> */}
      </>
    ); 
}


News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;









// React Class Based Component

// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// export default class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 6,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   constructor(props) {
//     super(props);
//     // console.log("This is a constructor of news component.");
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       pageSize: 0,
//       totalResults: 0,
//     };
//     document.title = `${this.capitalizeFirstLetter(
//       this.props.category
//     )} - NewsMonkey`;
//   }

//   async updatePage() {
//     this.props.setProgress(10);
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     this.props.setProgress(30);
//     let parsedData = await data.json();
//     this.props.setProgress(70);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     this.props.setProgress(100);
//   }

//   async componentDidMount() {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d7ef701adfdc469b9ff8470c2698fd6e&page1&pageSize=${this.props.pageSize}`;
//     // this.setState({loading:true})
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults, loading:false})
//     this.updatePage();
//   }

//   handlePrevClick = async () => {
//     // console.log("Previous")
//     //  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d7ef701adfdc469b9ff8470c2698fd6e&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
//     //  this.setState({loading:true})
//     //  let data = await fetch(url);
//     // let parsedData = await data.json();
//     // this.setState({ articles: parsedData.articles, page: this.state.page - 1, loading:false});
//     this.setState({ page: this.state.page - 1 }, () => this.updatePage());
//     // this.updatePage();
//   };

//   handleNextClick = async () => {
//     // // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

//     // // }
//     // // else {
//     //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d7ef701adfdc469b9ff8470c2698fd6e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
//     // this.setState({ loading: true });
//     //   let data = await fetch(url);
//     //   let parsedData = await data.json();
//     //   this.setState({ articles: parsedData.articles, page: this.state.page + 1, loading:false });
//     // // }

//     this.setState({ page: this.state.page + 1 }, () => this.updatePage());
//     // this.updatePage();
//   };

//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1 className="text-center" style={{ margin: "35px 0px" }}>
//           News Monkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
//           Headlines
//         </h1>
//         <div className="d-flex justify-content-center align-items-center">
//           {this.state.loading && <Spinner />}
//         </div>

//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={
//             <div className="d-flex justify-content-center align-items-center">
//               <Spinner />
//             </div>
//           }
//         >
//           <div className="container">
//             <div className="row">
//               {/* {!this.state.loading && this.state.articles.map((element) => { */}
//               {this.state.articles.map((element, index) => {
//                 return (
//                   <div className="col md-4 my-3" key={element.url}>
//                     <NewsItem
//                       title={element.title ? element.title : ""}
//                       description={
//                         element.description ? element.description : ""
//                       }
//                       imageUrl={element.urlToImage}
//                       newsUrl={element.url}
//                       author={element.author}
//                       date={element.publishedAt}
//                       source={element.source.name}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//             {/* <div className="container d-flex justify-content-between">
//           <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
//           <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
//         </div> */}
//           </div>
//         </InfiniteScroll>
//       </>
//     );
//   }
// }
