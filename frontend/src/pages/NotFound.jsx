import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex notFound mx-auto justify-center flex-col text-center mt-20">
        <p className="text-9xl">404</p>
        <h1 className="text-9xl">NOT FOUND</h1>
        <p className="text-5xl animate-bounce">😔</p>
      </div>
      <button
        onClick={() => navigate("/")}
        className="mx-auto flex bg-indigo-400 px-10 py-2 rounded-xl "
      >
        Geri
      </button>
    </div>
  );
};

export default NotFound;
