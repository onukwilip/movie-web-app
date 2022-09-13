/*import { Link } from "react-router-dom";

function HomeCard({
  item: { id, cover, name, rating, time, desc, starring, genres, tags, video },
}) {
  return (
    <>
      <div className="box">
        <div className="coverImage">
          <img src={cover} alt="Movie image" />
        </div>
        <div className="content flex">
          <div className="details row">
            <h1>{name}</h1>
            <div className="rating flex">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
            <label htmlFor="">{rating}</label>
            <span>GP</span>
            <label htmlFor="">{time}</label>

            <p>{desc}</p>
            <div className="cast">
              <h4>
                <span>Starring</span>
                {starring}
              </h4>
              <h4>
                <span>Genres</span>
                {genres}
              </h4>
              <h4>
                <span>Tags</span>
                {tags}
              </h4>
            </div>
            <button className="primary-btn">
              <i className="fas fa-play"></i> PLAY NOW
            </button>
          </div>

          <div className="playButton row">
            <Link to={`/singlepage/${id}`}>
              <button>
                <div className="img">
                  <img src="./images/play-button.png" alt="play button" />
                  <img src="./images/play.png" alt="play" className="change" />
                </div>
                WATCH TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCard;*/

import React from "react";
import { Link } from "react-router-dom";
/*Self*/
import "./home.css";

const HomeCard = ({
  item: { id, cover, name, rating, time, desc, starring, genres, tags, video },
}) => {
  return (
    <>
      <div className="box">
        <div className="coverImage">
          <img src={cover} alt="" />
        </div>
        <div className="content flex">
          <div className="details row">
            <h1>{name}</h1>
            <div className="rating flex">
              <div className="rate">
                <i className="fas fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </div>
              <label>{rating}(Imdb)</label>
              <span>GP</span>
              <label>{time}</label>
            </div>
            <p>{desc}</p>
            <div className="cast">
              <h4>
                <span>Starring </span>
                {starring}
              </h4>
              <h4>
                <span>Genres </span>
                {genres}
              </h4>
              <h4>
                <span>Tags </span>
                {tags}
              </h4>
            </div>
            <button className="primary-btn">
              <i className="fas fa-play"></i> PLAY NOW
            </button>
          </div>
          <div className="palyButton row">
            <Link to={`/singlepage/${id}`}>
              <button>
                <div className="img">
                  <img src="./images/play-button.png" alt="" />
                  <img src="./images/play.png" className="change" />
                </div>
                WATCH TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
