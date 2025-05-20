const CardBlog = ({ data, onClickCard }) => {

  return (
    <div className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg" onClick={onClickCard}>
      <img src={data.gambar} className="h-56 w-full object-cover" />
      <div className="bg-white p-4 sm:p-6">
        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">{data.judul}</h3>
        </a>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{data.konten}</p>
      </div>
    </div>
  );
};

export default CardBlog;
