/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Categorise = ({ categorise }) => {



  return (
    <div className=" rounded-3xl ">
      <div >
         <Link to='/Allproduct' className=" text-white btn bg-purple-600 rounded-3xl px-8 py-7 font-bold"> All Product </Link>

        {categorise.map(category => (
          <Link
            key={category.category_name}
            to={`/allCategory/${category.category_name}`}
            className=" btn  flex flex-col my-2 text-lg text-black rounded-3xl font-semibold py-6 "
          >
            {category.category_name}
          </Link>
        ))}
      </div>

      
    </div>
  );
};

export default Categorise;
