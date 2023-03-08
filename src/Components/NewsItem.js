// React Function Based Component

import React from "react";

const NewsItem = (props) => { 
  
    let { title, description, imageUrl, newsUrl, author, date, source  } = props;  // destructuring
    return (
      <div>
        <div className="card mx-auto" style={{ width: "17rem" }}>
          <div style={{ display: 'flex', justifyContent:'flex-end',position:'absolute',right:0}}>
          <span className="badge rounded-pill bg-danger">{source}</span>
          </div> 
          <img src={imageUrl?imageUrl:"https://images.firstpost.com/wp-content/uploads/2020/07/Xiaomi_Redmi_Note_9_review_-4.jpg?impolicy=website&width=640&height=362"} className="card-img-top" alt="maxresdefault-img" />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="badge bg-success mx-2">New</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted" >By {!author ? "undefined" : author} on {new Date(date).toGMTString() }</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a> 
          </div>
        </div>
      </div>
    ); 
}

export default NewsItem;









// React Class Based Components

// import React from "react";

// class NewsItem extends React.Component {
//     // constructor() {
//     //     super();
//     //     console.log("This is a constructor from newsitem component.")
//     // }
//   render() {
//     let { title, description, imageUrl, newsUrl, author, date, source  } = this.props;  // destructuring
//     return (
//       <div>
//         <div className="card mx-auto" style={{ width: "17rem" }}>
//           <div style={{ display: 'flex', justifyContent:'flex-end',position:'absolute',right:0}}>
//           <span className="badge rounded-pill bg-danger">{source}</span>
//           </div>
//           <img src={!imageUrl?"https://images.firstpost.com/wp-content/uploads/2020/07/Xiaomi_Redmi_Note_9_review_-4.jpg?impolicy=website&width=640&height=362":imageUrl} className="card-img-top" alt="maxresdefault-img" />
//           <div className="card-body">
//             <h5 className="card-title">{title}<span className="badge bg-success mx-2">New</span></h5>
//             <p className="card-text">{description}</p>
//             <p className="card-text"><small className="text-muted" >By {!author ? "undefined" : author} on {new Date(date).toGMTString() }</small></p>
//             <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewsItem;
