import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthProvider";
import SearchInput from "../components/SearchInput";
const Products = () => {
  const { input } = useContext(AuthContext);

  const [productData, setProductData] = useState([]);
  const getProducts = async () => {
    await axios
      .get("http://127.0.0.1:8002/products")
      .then((data) => setProductData(data.data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const { data } = productData;

  return (
    <>
      <SearchInput />

      <div className="mt-6 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-3 md:gap-x-3  md:px-10 md:gap-y-5 mx-auto justify-center">
        {data?.map((item, index) => (
          <div key={index}>
            <div className="xl:h-80 h-50 w-full bg-red-100">
              <img
                src={item.images[0]}
                alt=""
                className="h-[200px] w-full object-fit lg:h-full lg:w-full rounded-xl"
              />
            </div>
            <div className="text-center mt-4 xl:mt-2 md:mt-2">
              <span className="font-bold font-montserrat">{item.title}</span>
            </div>
            <div className="grid grid-cols-3 mt-4 xl:mt-2 md:mt-2 mx-auto items-center text-center justify-center xl:px-3">
              <span className="text-green-600 font-bold font-montserrat">
                {item.price}$
              </span>
              <div className="mt-4 xl:mt-2 md:mt-2  items-center flex mx-auto justify-center ">
                <span className="items-center font-montserrat gap-2 flex  font-bold text-yellow-500">
                  <span>⭐️</span>
                  {item.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
