

const CardBlog = (props) => {
        
       return(
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 mx-auto py-8 px-10 sm:px-6 lg:px-3" id="daftar-blog" >
                <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                    <img src={props.data.gambar} className="h-56 w-full object-cover"/>
                    <div className="bg-white p-4 sm:p-6">
                        <a href="#">
                        <h3 className="mt-0.5 text-lg text-gray-900">{props.judul}</h3>
                        </a>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{props.konten}</p>
                    </div>
                </article>
          </div>
       ) 
}

export default CardBlog;