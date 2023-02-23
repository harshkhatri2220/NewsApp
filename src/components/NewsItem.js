import React, { Component } from "react";
// import imageNotFound from './imageNotFound.jpg';


export class NewsItem extends Component {
  
  render() {
    
    let { title, description, imageUrl, newsUrl, author, date , sourse } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{position:'absolute', right:0 }}>
          <span className=" badge rounded-pill bg-danger">
            {sourse}
            <span className="visually-hidden">unread messages</span>
          </span>
          </div>
          <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2021/06/2021-06-09T205305Z_1_LYNXNPEH581AY_RTROPTP_4_INDIA-FRANKLINTEMPLETON-673x435.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
