import './App.css';
import { FaCheck } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function App() {
  return (
    <div className="App">
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img className='pt-10 pr-4 pb-8 pl-2' alt='img' src='https://bazaar.ui-lib.com/assets/images/logo2.svg' />
            </div>
            <div className='col-6'>
              <div className='flex py-12'>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                  <h6 className=' pr-10  pl-2 text-[#808080]'>Features</h6>
                  <h6 className=' pr-10  pl-2 text-[#808080]'>Demos</h6>
                  <h6 className=' pr-10  pl-2 text-[#808080]'>Storybook</h6>
                  <h6 className=' pr-10  pl-2 text-[#808080]'>Documantaction</h6>
                  <button className=' pr-10 pl-2 text-[#808080] border-solid border-black border-1 box-content text-center rounded-md'>Purches Now</button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className='text-center pt-12 text-5xl font-bold'>Build your online store with</p>
        <p className='text-center text-5xl font-bold text-red-500'>Bazaar</p>
        <p className='text-center pt-10 text-2xl'>SEO friendly Next.js Ecommerce Template. Helps you to build<br></br> performant online store faster.</p>
        <div className='flex justify-center px-8 py-8 pt-6'>
          <div className='px-3'><FaCheck color='green' /></div>
          <p>SSR</p>
          <div className='px-3'><FaCheck color='green' /></div>
          <p>Rest API</p>
          <div className='px-3'><FaCheck color='green' /></div>
          <p>Multi vendor Support</p>
        </div>
      </div>
      <div className='text-center'>
        <button className='py-2 px-8 mx-6 border-red-500 text-red-500 rounded-md'>What's inside</button>
        <button className='py-2 px-8 bg-orange-500 text-white border-red-500 rounded-md'>View Demo</button>
      </div>
      <div>
        <a className='flex justify-center py-6 text-blue-800' href='I need server integration'>I need server integration</a>
      </div>
      <div className='shadow-zinc-100 shadow-lg'>
        <div className='text-center py-10'>
          <h2>WHAT YOU GET?</h2>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className='flex'>
                <img className='rounded-lg pt-10' alt='img' src='https://bazaar.ui-lib.com/assets/images/landing/niche-demos.png' height={'230px'} />
                <div className='flex flex-col'>
                  <h4 className='pl-10 pt-10'>Niche Demos</h4>
                  <p className='pl-10'> Niche shop demos for online store. Super<br></br> store, Fashion, Electronic, Grocery and etc</p>
                  <button className='ml-10 mt-10 py-2 border-red-500 text-red-500 rounded-md  w-[150px]'>Browse Demos</button>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='flex'>
                <img className='rounded-lg pt-10' alt='img' src='https://bazaar.ui-lib.com/assets/images/landing/inner-pages.png' height={'230px'} />
                <div className='flex flex-col'>
                  <h4 className='pl-10 pt-10'>Shop Pages</h4>
                  <p className='pl-10'> Niche shop demos for online store. Super<br></br> store, Fashion, Electronic, Grocery and etc</p>
                  <button className='ml-10 mt-10 py-2 border-red-500 text-red-500 rounded-md w-[120px]'>Browse Pages</button>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='flex'>
                <img className='rounded-lg pt-10' alt='img' src='https://bazaar.ui-lib.com/assets/images/landing/user-dashboard.png' height={'230px'} />
                <div className='flex flex-col'>
                  <h4 className='pl-10 pt-10'>User Dashboard</h4>
                  <p className='pl-10'> Niche shop demos for online store. Super<br></br> store, Fashion, Electronic, Grocery and etc</p>
                  <button className='ml-10 mt-10 py-2 border-red-500 text-red-500 rounded-md  w-[200px]'>Browse User Dashboard</button>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='flex'>
                <img className='rounded-lg pt-10' alt='img' src='https://bazaar.ui-lib.com/assets/images/landing/admin-dashboard.png' height={'230px'} />
                <div className='flex flex-col'>
                  <h4 className='pl-10 pt-10'>Admin Dashboard</h4>
                  <p className='pl-10'> Niche shop demos for online store. Super<br></br> store, Fashion, Electronic, Grocery and etc</p>
                  <button className='ml-10 mt-10 py-2 border-red-500 text-red-500 rounded-md  w-[200px] mb-20'>Browse Admin Dashboard</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-center'>
          <h2 className='py-20'>
            POWERFUL FEATURES
          </h2>
        </div>
        <div className='flex justify-center'>
          <div className='mx-8 my-20 text-center shadow-zinc-100 shadow-lg px-10 py-10 w-[15%] h-[10%]'>
            <img alt='img' src='https://bazaar.ui-lib.com/assets/images/icons/verify.svg' />
            <h5 className='pt-3'>SEO Friendly</h5>
          </div>
          <div className='mx-8 my-20 text-center shadow-zinc-100 shadow-lg px-20 py-10 w-[15%] h-[10%]'>
            <img alt='img' src='https://bazaar.ui-lib.com/assets/images/icons/cloud-data.svg' />
            <h5 className='pt-3'>REST API</h5>
          </div>
          <div className='mx-8 my-20 text-center shadow-zinc-100 shadow-lg px-8 py-10 w-[15%] h-[10%]'>
            <img alt='img' src='https://bazaar.ui-lib.com/assets/images/icons/multivendor.svg' />
            <h5 className='pt-3'>Multi-Vendor Support</h5>
          </div>
          <div className='mx-8 my-20 text-center shadow-zinc-100 shadow-lg px-8 py-10 w-[15%] h-[5%]'>
            <img alt='img' src='https://bazaar.ui-lib.com/assets/images/icons/optimization.svg' />
            <h5 className='pt-3'>Optimized for Mobile</h5>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='mx-8 text-center shadow-zinc-100 shadow-lg px-10 py-10 w-[15%] h-[10%]'>
            <img alt='img' src='https://bazaar.ui-lib.com/assets/images/icons/code.svg' />
            <h5 className='pt-3'>Clean Code</h5>
          </div>
          <div className='mx-8 text-center shadow-zinc-100 shadow-lg px-20 py-10 w-[15%] h-[10%]'>
            <img alt='img' src='https://bazaar.ui-lib.com/assets/images/icons/lighting.svg' />
            <h5 className='pt-3'>Fast</h5>
          </div>
          <div className='mx-8 text-center shadow-zinc-100 shadow-lg px-8 py-10 w-[15%] h-[10%]'>
            <img alt='img' src='https://bazaar.ui-lib.com/assets/images/icons/admin-dashboard.svg' />
            <h5 className='pt-3'>Admin Dashboard</h5>
          </div>
          <div className='mx-8  text-center shadow-zinc-100 shadow-lg px-8 py-14 w-[15%] h-[10%]'>
            <img alt='img' src='https://bazaar.ui-lib.com/assets/images/icons/figma.svg' />
            <h5 className='pt-3'>Figma Ready</h5>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-20'>
        <div>
          <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Flanding%2Fproduct-model.png&w=640&q=75' height={'450px'} />
        </div>
        <div>
          <p className='pt-20 ml-10 font-bold text-3xl'>Data structure with<br></br> Typescript Data models</p>
          <div className='flex'>
            <div className='px-3 ml-8'><FaCheck color='green' /></div>
            <p>Product model</p>
          </div>
          <div className='flex'>
            <div className='px-3 ml-8'><FaCheck color='green' /></div>
            <p>User model</p>
          </div>
          <div className='flex'>
            <div className='px-3 ml-8'><FaCheck color='green' /></div>
            <p>Shop model</p>
          </div>
          <div className='flex'>
            <div className='px-3 ml-8'><FaCheck color='green' /></div>
            <p>Order model</p>
          </div>
          <div className='flex'>
            <div className='px-3 ml-8'><FaCheck color='green' /></div>
            <p>Address model</p>
          </div>
          <div className='flex'>
            <div className='px-3 ml-8'><FaCheck color='green' /></div>
            <p>20+ more models</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center pt-40 '>
        <div className='pt-20 pr-40'>
          <h3>REST API endpoints</h3>
          <p>Customize and use existing data structure to<br></br> implement your server easily.</p>
        </div>
        <div>
          <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Flanding%2Frest-api-endpoint.png&w=640&q=75' height={'300px'} />
        </div>
      </div>
      <div>
        <div className='flex justify-center pt-40'>
          <img alt='img' src='https://ui-lib.com/wp-content/uploads/2023/10/bazaar-server.jpg' />
        </div>
      </div>
      <div>
        <div className='flex flex-col pt-40 text-center '>
          <div>
            <h1 className='text-5xl  text-red-500'>58+</h1>
          </div>
          <div>
            <p className='text-red-500'>Server side rendered</p>
          </div>
          <div>
            <h3>DEMOS & PAGES</h3>
          </div>
          <div className='flex justify-center gap-10 pt-8'>
            <h6>All</h6>
            <h6>Homepages</h6>
            <h6>Shop</h6>
            <h6>Uer Deshbord</h6>
            <h6>Admin Deshbord</h6>
          </div>
        </div>
      </div>
      <div className='flex justify-center  pt-8'>
        <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=640&q=75' height={'300'} />
        <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=640&q=75' height={'300'} />
        <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=640&q=75' height={'300'} />
      </div>
      <div className='flex justify-center gap-20 pt-8'>
        <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FProduct%201.png&w=828&q=75' height={'200'} />
        <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FProduct%202.png&w=828&q=75' height={'200'} />
        <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FProduct%204.png&w=828&q=75' height={'200'} />
      </div>
      <div className='flex justify-center gap-10 pt-8'>
        <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FFurniture%20Shop%2FFurniture%20(1).png&w=640&q=75' height={'300'} />
        <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FFurniture%20Shop%2FFurniture%20(2).png&w=640&q=75' height={'300'} />
        <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FFurniture%20Shop%2FFurniture%20(3).png&w=640&q=75' height={'300'} />
      </div>
      <div className='flex justify-center gap-10 pt-8'>
        <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FHealth%20Shop%2FProduct%20(5).png&w=256&q=75' height={'300'} />
        <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FHealth%20Shop%2FProduct%20(3).png&w=256&q=75' height={'300'} />
        <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FHealth%20Shop%2FProduct%20(7).png&w=256&q=75' height={'300'} />
      </div>
      <div className='flex justify-center gap-10 pt-8'>
        <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F1.Ford2019.png&w=640&q=75' height={'300'} />
        <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F3.Tesla2015.png&w=640&q=75' height={'300'} />
        <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F18.Audi2019.png&w=640&q=75' height={'300'} />
      </div>
      <div className='flex justify-center'>
        <button className='bg-orange-700 text-white px-5 py-2 rounded-lg border-0'>Purches Now</button>
      </div>
      <div className='flex justify-center pt-20'>
        <div>
          <h1>TECHNOLOGIES USED</h1>
        </div>
      </div>
      <div className='flex justify-center pt-20'>
        <div className='mx-8 text-center shadow-zinc-100 shadow-lg px-20 py-10 w-[15%] h-[10%]'>
          <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Flogos%2Freact.png&w=64&q=75' />
          <h5>React</h5>
        </div>
        <div className='mx-8 text-center shadow-zinc-100 shadow-lg px-20 py-10 w-[15%] h-[10%]'>
          <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fnext-js.png&w=64&q=75' />
          <h5>Next.js</h5>
        </div>
        <div className='mx-8 text-center shadow-zinc-100 shadow-lg px-20 py-10 w-[15%] h-[10%]'>
          <img alt='img' src='https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Flogos%2Ftypescript.png&w=64&q=75' />
          <h5>TypeScript</h5>
        </div>
        <div className='mx-8 text-center shadow-zinc-100 shadow-lg px-20 py-10 w-[15%] !h-[20%]'>
          <img alt='img' src='https://bazaar.ui-lib.com/assets/images/logos/mui.svg' />
          <h5>MUI</h5>
        </div>
      </div>
      <div className='flex'>
        <p className='pt-20 ml-80'>Developed with& Care by
          UI Lib</p>
        <div className='pt-20 flex gap-3 pl-3'>
          <span><SiFacebook /></span>
          <span><FaTwitter /></span>
          <span><FaYoutube /></span>
          <span><FaInstagram /></span>
        </div>
      </div>
    </div>
  );
}

export default App;
