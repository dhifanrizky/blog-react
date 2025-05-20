import CardBlog from "../component/CardBlog.jsx";
import {blog} from "../index.js";


const Blogpage = ({Blogpage}) => {
    //const { gambar, judul, konten } = blog;
    console.log(blog)

    return (
        <div>
          <div className="bg-white-50 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-2xl ">
                <span className="text-green-700">EcoLearn</span>: A blog that provides educational content on climate change and practical ways to <span class="text-green-700">protect the Earth.</span>
              </h2>
    
              <p className="mx-auto text-gray-500 sm:mt-4 sm:block">
                EcoLearn is your go-to source for learning about climate change, its global impact, and the simple actions we can take to protect our planet.
              </p>
            </div>
    
            <div className="mx-auto mt-8 max-w-xl">
              <form action="#" className="sm:flex sm:gap-4">
                <div className="sm:flex-1">
                  <label for="Search">
                  
                    <div className="relative">
                      <input
                        type="text"
                        id="Search"
                        placeholder="Search for eco-friendly tips"
                        className="mt-1 w-full rounded-full border-gray-300 bg-white pe-10 shadow-sm sm:text-base py-3 px-4 
                        focus:outline-none focus:border-green-600 focus:ring focus:ring-green-600"
                      />
    
                      <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                        <button
                          type="button"
                          aria-label="Submit"
                          className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                          </svg>
                        </button>
                      </span>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
          {blog.map ((item, index) => {
            <CardBlog data={item}/>
          })}
          
        </div>   
    );
};

export default Blogpage;