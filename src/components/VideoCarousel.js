import React from "react";
import {Carousel} from '3d-react-carousal';

export const VideoCarousel = () => {

    let slides = [
        <iframe title="video1" className="video" src="https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1"></iframe>
       ,
      <iframe title="video2" className="video" src="https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1"></iframe>
      , 
        <iframe title="video3" className="video" src="https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1"></iframe>
       ,
      <iframe title="video4" className="video" src="https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1"></iframe>,
       <iframe title="video3" className="video" src="https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1"></iframe>
    ];

  return (
    <div className="carousel-container">
      <Carousel slides={slides}/>
    </div>
  );
};

export default VideoCarousel;