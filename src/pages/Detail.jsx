import React from "react";
import { useLocation } from "react-router-dom";
import CardBlog from "../component/CardBlog";

const Detail = () => {
  const location = useLocation();
  const detailItem = location.state;

  return (
    <div>
      {/* <CardBlog data={detailItem} /> */}
      <img src={detailItem.gambar} alt="" />
      <div>{detailItem.judul}</div>
      <div>{detailItem.konten}</div>
    </div>
  );
};

export default Detail;
