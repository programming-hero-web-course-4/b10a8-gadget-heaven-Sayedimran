import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Shopicon from "/ShopIcon.png";
import Harticon from "/love.png";
import { CartContext } from "../../Provider/ContextProvider";

const CasrdDetails = () => {
  const obj = useContext(CartContext);
  const { productId, setProductId } = obj;
  const allCartData = useLoaderData();

  const { id } = useParams();

  const [viewcard, setViewCard] = useState({});
  useEffect(() => {
    const singleCart = allCartData.find((card) => card.product_id == id) || {} ;

    setViewCard(singleCart);
  }, [allCartData, id]);

  

  const handleSelectedProduct = (idx) => {
    setProductId([...productId, viewcard]);
  };

  const {
    product_title,
    product_image,
    price,
    description,
    specifications,

    availability,
  } = viewcard;

  return (
    <div>
      <div className="bg-purple-700 max-h-[400px] lg:mx-8 ">
        <div className="text-center  py-12">
          <h1 className="text-3xl  text-white font-bold">Product Details</h1>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>

        <div
          className="hero  bg-gray-200 rounded-3xl border border-gray-300 
      
      lg:w-[900px]
      mx-auto"
        >
          <div className="hero-content flex-col lg:gap-24 md:flex-row lg:flex-row">
            <img
              src={product_image}
              className=" w-[300px] h-[400px] rounded-2xl shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{product_title}</h1>
              <h3 className="text-base py-4 font-medium">Price: $ {price}</h3>
              <h4 className="btn rounded-3xl text-green-500 border border-green-400 font-bold my-0.5">
                {availability ? "in stoke" : "out stoke"}
              </h4>
              <p className="py-6 font-medium "> {description}</p>
              <h3 className="text-base font-medium ">
                {specifications?.length > 0 ? (
                  <>
                    <p>Specifications:</p>
                    {specifications.map((spec, index) => (
                      <p key={index}>
                        {index + 1}. {spec}
                      </p>
                    ))}
                  </>
                ) : (
                  <p>No specifications available.</p>
                )}
              </h3>

              <div className="flex flex-col">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>

                <div>
                  <button
                    onClick={() => handleSelectedProduct(viewcard)}
                    className="btn mr-6 btn-ghost border border-fuchsia-700 text-fuchsia-600 rounded-3xl mt-2"
                  >
                    Add To Card <img className="size-6" src={Shopicon} alt="" />
                  </button>
                  <button className=" btn btn-ghost border rounded-full h-12 w-13 border-gray-400  mt-2">
                    <img className="size-5" src={Harticon} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasrdDetails;
