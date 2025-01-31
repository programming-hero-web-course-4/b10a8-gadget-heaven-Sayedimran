import { useLoaderData, useParams } from "react-router-dom";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";

const AllCard = () => {

    const  {category} =  useParams()
  
    
    const data = useLoaderData()
 
    
    const [cards ,setCards] =useState([])
   
    
    useEffect(()=>{
        if(category){
            const filterBycategory = [...data].filter(card => card.category === category)
        setCards(filterBycategory)
        }
        else{
            setCards(data)
        }
    },[category, data])
    
    
    
    return (
        <div className="grid grid-cols-1 my-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            cards.map(Card => <Cards key={Card.product_id} card={Card} />)
          }
        </div>
    );
};

export default AllCard;