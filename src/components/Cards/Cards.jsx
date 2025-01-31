import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Cards = ({ card }) => {

 
  
  const {
    product_title,
    price ,
    product_image ,
    product_id ,
    
    
  } = card || {};

  return (
    <div className="">
      <div className="card bg-base-100 w-96 p-4 shadow-sm">
        <figure>
          <img
             className="rounded-3xl"
            src={product_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
           <h3 className="text-base font-semibold">Price: {price}</h3>
          <div className="card-actions justify-start">
            <div className="btn btn-ghost border border-purple-700 rounded-3x text-fuchsia-700 rounded-3xl">
                <Link to={`/card/${product_id}`}> View Details </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
