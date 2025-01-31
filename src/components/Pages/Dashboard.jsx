
import { CartContext } from "../../Provider/ContextProvider";
import { useContext } from "react";

const Dashboard = () => {
     const obj = useContext (CartContext )
     
       
    const {productId} = obj

    const { product_title, product_image ,price , description} = productId[0] ;
    
    
       
  return (
    
    <div>
      <div className="text-center  bg-purple-700  py-14">
        <h1 className="text-3xl  text-white font-bold py-10">Dashboard</h1>
        <p>
        Explore the latest gadgets that will take your experience to <br/> the next level. From smart devices to the coolest accessories, we have it all!
        </p>

         <div className="mt-8" >
             <button className="btn btn-primary rounded-3xl btn-ghost border border-white text-white mx-5">Cart</button>
             <button className="btn btn-primary rounded-3xl btn-ghost border border-white text-white">Wishlist</button>
         </div>
      </div>
              
       <div>
          <div className="border border-gray-200 rounded-xl mt-6 mx-16 p-3">
              <div className="flex flex-row gap-12 items-center">
                  <div>
                  <img className="size-20" src={product_image} alt="" />
                  </div>
                   <div>
                    <h1 className="text-3xl">{product_title}</h1>
                   <p>{description}</p>
                    <h1 className="font-bold">price: {price}</h1>
                    <button className="btn rounded-3xl bg-primary text-white ">Add To card</button>
                   </div>
              </div>
          </div>
       </div>
    </div>
  );
};

export default Dashboard;
