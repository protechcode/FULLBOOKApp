import bannerimg from '../images/under-amour-shoes-man4.jpg';

function BannerOneProduct() {
    return (
      <div class="h-80">   

      <div class="bg-cover h-full "  style={{ backgroundImage: `url(${bannerimg})` }}>
        <div className="h-full items-center lg:flex">
          <div className=" w-full lg:w-1/2 ">

            <div className=" text-center " >
              <h1 className="text-2xl font-semibold text-white-800 uppercase dark:text-white lg:text-3xl">Best Place To Choose Your Clothes</h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
              <button className="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">


          </div>
        </div>
      </div>
      </div>
    )
};
export default BannerOneProduct;