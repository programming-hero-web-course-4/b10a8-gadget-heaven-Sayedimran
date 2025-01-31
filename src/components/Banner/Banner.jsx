import Mainbanner from "/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className=" rounded-b-3xl hero  bg-purple-700 min-h-[700px]  ">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl text-white font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6 text-amber-50">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>

            <button className="btn btn-primary bg-amber-50 rounded-3xl p-6 text-black">
              {" "}
              Shop Now{" "}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex flex-col items-center   rounded-3xl  ">
          <img
            className="rounded-3xl lg:w-[800px] border
            -translate-y-24 
                 lg:-translate-y-52 border-gray-200 p-3"
            src={Mainbanner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
