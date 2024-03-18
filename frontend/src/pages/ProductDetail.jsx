import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductDetail = () => {
  const navigate = useNavigate();
  const [detailsdata, setDetailsData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getDetailsProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        if (response.data) {
          setDetailsData(response.data);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };

    getDetailsProduct();
  }, [id]);
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {detailsdata.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <h1 className="text-center font-montserrat font-bold">
          {detailsdata.title}
        </h1>
        <p className="text-center font-montserrat font-bold italic">
          {detailsdata.description}
        </p>
        <p className="text-center text-gray-500">
          Category:{detailsdata.category}
        </p>
      </div>
      <div className="mx-auto flex justify-center gap-3 mt-5">
        <button
          className="bg-gray-400 px-5 py-2 rounded-lg"
          onClick={() => navigate("/dashboard/products")}
        >
          Geri
        </button>
        <button
          className="bg-yellow-400 px-3 py-2 rounded-lg"
          onClick={() => navigate("/dashboard")}
        >
          Anasayfa
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
