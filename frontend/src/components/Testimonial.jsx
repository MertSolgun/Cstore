import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { testimonials } from "../helper/data";

const Testimonial = () => {
  return (
    <div>
      <div className="flex items-center justify-between h-full w-full absolute z-0">
        <div className="w-1/3h-full" />
        <div className="w-4/6 ml-16 h-full" />
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={testimonials.length}
          className="flex justify-center items-center text-center flex-col"
        >
          <h1 className="text-3xl font-bold mb-4 font-montserrat xl:block hidden leading-tight text-gray-800">
            What our customers are saying
          </h1>
          <h1 className="text-3xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
            What our customers are saying
          </h1>

          <Slider>
            {testimonials.map((item, index) => (
              <Slide index={index} key={index}>
                <div className="flex justify-center">
                  <img src={item.avatar} alt="" />
                </div>
                <div>
                  <p className="font-bold font-montserrat ">{item.name}</p>
                  <p className="font-bold font-montserrat  text-gray-500">
                    {item.title}
                  </p>
                </div>

                <div className="font-montserrat max-w-sm mx-auto">
                  <div>{item.quote}</div>
                </div>
              </Slide>
            ))}
          </Slider>

          <div className="flex items-center mt-8">
            <ButtonBack
              className="cursor-pointer "
              role="button"
              aria-label="previous slide"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                alt="previous"
              />
            </ButtonBack>

            <ButtonNext
              role="button"
              aria-label="next slide"
              className="cursor-pointer ml-2"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                alt="next"
              />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default Testimonial;
