import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Thumbnail from "../../asset/thumbnail.png"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const SingleVideo = () => {
    return(
        <div className="flex justify-center items-center flex-col bg-nav">
        <div className="bg-nav-color p-2 rounded-md shadow-2xl">
        <div><img src={Thumbnail} width={300}/></div>
        <div> Watch Video </div>
        </div>
    </div>
    )
}

const VideoSuggetions = () => {
  return (
    <Carousel responsive={responsive}>
        <SingleVideo/>
        <SingleVideo/>
        <SingleVideo/>
        <SingleVideo/>
        <SingleVideo/>
        <SingleVideo/>
        <SingleVideo/>
        <SingleVideo/>
        <SingleVideo/>
    </Carousel>
  )
}

export default VideoSuggetions