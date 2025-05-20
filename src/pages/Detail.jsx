import React from "react";
import { useLocation } from "react-router-dom";
import CardBlog from "../component/CardBlog";

const Detail = () => {
  const location = useLocation();
  const detailItem = location.state;

  return (
    
    <div className="bg-white-50 p-8 md:p-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-lg text-center">
      <div className="text-2xl font-bold text-gray-900 md:text-3xl">{detailItem.judul}</div>
      </div>
      <div className="mx-auto max-w-3xl text-center mt-5 mb-5 ">
      <img src={detailItem.gambar} alt="photo unknown" className="rounded-2xl" />
      </div>
      <div className="text-2xl text-justify tracking-wide">{detailItem.konten}</div>
    </div>
  );
};

export default Detail;
