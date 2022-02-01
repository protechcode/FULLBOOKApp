import logo from './logo.svg';
import './App.css';
import companyLogo from './images/fullEnergyLogo.png';
import nikeshoes from './images/nike-shoes.jpg';
import greenshoe from './images/shoes-shoe-png-transparent-shoe-image.png';
import bannerimg from './images/under-amour-shoes-man4.jpg';
import bluejacket from './images/blue-sky-jaket.jpg';
import logoimage from './images/fullEnergyImageLogo.png';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="container px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
            <div>
              <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" src={logoimage}>FULLENERGY</a>
            </div>


            <div className="flex lg:hidden">
              <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>


          <div className="items-center lg:flex">
            <div className="flex flex-col lg:flex-row lg:mx-6">
              <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" href="#">Home</a>
              <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" href="#">Shop</a>
              <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" href="#">Contact</a>
              <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" href="#">About</a>
            </div>

            <div className="flex justify-center lg:block">
              <a className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokewidt="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <a href="#" className="text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>

          <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">features</a>

          <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">pricing</a>

          <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">blog</a>

        </div>
      </nav>xº



      /////////////////////Banner One Product Component 2 SEMI ORIGINAL/////////////////////
      <div className="container px-6 py-16 mx-auto" style={{ backgroundImage: `url(${bannerimg})` }}>
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2 ">

            <div className="lg:max-w-lg" >
              <h1 className="text-2xl font-semibold text-white-800 uppercase dark:text-white lg:text-3xl">Best Place To Choose Your Clothes</h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
              <button className="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">


          </div>
        </div>
      </div>
    ////////////////////Featured 0 test /////////////
      <div className="container px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center">
        <div class="grid xl:grid-cols-4 md:grid-cols-6 grid-cols-1 gap-2 max-w-6xl">
          <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
            <div class="h-40 bg-gray-400 rounded-lg"></div>
            <div class="flex flex-col items-start mt-4">
              <h4 class="text-xl font-semibold">Heading</h4>
              <p class="text-sm">Some text about the thing that goes over a few lines.</p>
              <a class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a>
            </div>
          </div>
          <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
            <div class="h-40 bg-gray-400 rounded-lg"></div>
            <div class="flex flex-col items-start mt-4">
              <h4 class="text-xl font-semibold">Heading</h4>
              <p class="text-sm">Some text about the thing that goes over a few lines.</p>
              <a class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a>
            </div>
          </div>

          <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
            <div class="h-40 bg-gray-400 rounded-lg"></div>
            <div class="flex flex-col items-start mt-4">
              <h4 class="text-xl font-semibold">Heading</h4>
              <p class="text-sm">Some text about the thing that goes over a few lines.</p>
              <a class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a>
            </div>
          </div>
          Tile 4
          <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
            <div class="h-40 bg-gray-400 rounded-lg"></div>
            <div class="flex flex-col items-start mt-4">
              <h4 class="text-xl font-semibold">Heading</h4>
              <p class="text-sm">Some text about the thing that goes over a few lines.</p>
              <a class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a>
            </div>
          </div>
        </div>
      </div>
    ////////////////////Featured/////////////////////
      <section class="bg-white border-b py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Title
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-start">
                <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-center">
                <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-end">
                <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    /////////////////////Ecommerce////////////////////
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img className="w-full h-full lg:max-w-2xl" src={bluejacket} alt="Catalogue-pana.svg" />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p class="mt-1">16.00€</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img className="w-full h-full lg:max-w-2xl" src={bluejacket} />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p class="mt-1">21.15€</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img className="w-full h-full lg:max-w-2xl" src={bluejacket} alt="Catalogue-pana.svg" />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p class="mt-1">12.00€</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img className="w-full h-full lg:max-w-2xl" src={bluejacket} alt="Catalogue-pana.svg" />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p class="mt-1">18.40€</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img className="w-full h-full lg:max-w-2xl" src={bluejacket} alt="Catalogue-pana.svg" />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p class="mt-1">16.00€</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img className="w-full h-full lg:max-w-2xl" src={bluejacket} alt="Catalogue-pana.svg" />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p class="mt-1">21.15€</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img className="w-full h-full lg:max-w-2xl" src={bluejacket} alt="Catalogue-pana.svg" />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p class="mt-1">12.00€</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img className="w-full h-full lg:max-w-2xl" src={bluejacket} alt="Catalogue-pana.svg" />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p class="mt-1">18.40€</p>
            </div>
          </div>
        </div>
      </div>

      /////////////////////Best Service Component/////////////////////
      <div class="p-8">
        <div class="flex felx-col items-center justify-center"> <span
          class="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm"> Insight </span> </div>
        <h1 class="text-4xl font-medium text-gray-700 text-center mt-6"> Full-Funnel Social Analytics </h1>
        <p class="text-center mt-6 text-lg font-light text-gray-500"> The time is now for it to be okay to be great. For
          being a bright color. For standing out. </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="p-8">
          <div
            class="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd" />
            </svg> </div>
          <h2 class="uppercase mt-6 text-indigo-500 font-medium mb-3"> Social conversations </h2>
          <p class="font-light text-sm text-gray-500 mb-3"> We get insulted by others, lose trust for those others. We
            get back stabbed by friends. It becomes harder for us to give others a hand. </p> <a
              class="text-indigo-500 flex items-center hover:text-indigo-600" href="/"> More about us icon <svg
                xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
            </svg> </a>
        </div>
        <div class="p-8">
          <div class="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd" />
            </svg> </div>
          <h2 class="uppercase mt-6 text-green-500 font-medium mb-3"> Social conversations </h2>
          <p class="font-light text-sm text-gray-500 mb-3"> We get insulted by others, lose trust for those others. We
            get back stabbed by friends. It becomes harder for us to give others a hand. </p> <a
              class="text-green-500 flex items-center hover:text-green-600" href="/"> More about us icon <svg
                xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
            </svg> </a>
        </div>
        <div class="p-8">
          <div class="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd" />
            </svg> </div>
          <h2 class="uppercase mt-6 text-red-500 font-medium mb-3"> Social conversations </h2>
          <p class="font-light text-sm text-gray-500 mb-3"> We get insulted by others, lose trust for those others. We
            get back stabbed by friends. It becomes harder for us to give others a hand. </p> <a
              class="text-red-500 flex items-center hover:text-red-600" href="/"> More about us icon <svg
                xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
            </svg> </a>
        </div>
      </div>
      ////////////////////Footer////////////////////////
      <footer class="bg-white">
        <div class="container mx-auto px-8">
          <div class="w-full flex flex-col md:flex-row py-6">
            <div class="flex-1 mb-6 text-black">
              <a class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">


                <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                  <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                  <path
                    class="plane-take-off"
                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                  />
                </svg>
                LANDING
              </a>
            </div>
            <div class="flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Links</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Legal</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Social</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Company</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a href="https://www.freepik.com/free-photos-vectors/background" class="text-gray-500">Background vector created by freepik - www.freepik.com</a>
      </footer>




    </div>



  )
};

export default App;