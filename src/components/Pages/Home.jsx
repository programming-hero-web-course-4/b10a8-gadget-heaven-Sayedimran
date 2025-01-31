import { Outlet, useLoaderData } from "react-router-dom";
import Categorise from "../Categorise/Categorise";
import Banner from "../Banner/Banner";

const Home = () => {
  const categorise = useLoaderData();

  return (
    <div>
      <div
        className="
             rounded-3xl mx-1 md:mx-8 lg:mx-8 "
      >
        <Banner />
      </div>

      <div>
        <h1 className=" my-10 text-4xl  font-bold text-purple-700 text-center">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row lg:items-start lg:flex-row justify-center  gap-10">
        <div className="bg-gray-100 h-fit  p-3 rounded-2xl ">
          <div className="w-32  ">
            <Categorise categorise={categorise} />
          </div>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
