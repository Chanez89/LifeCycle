import { useEffect, useState } from "react";
import BikeCard from "./BikeCard";

function Bikes() {
const [shopBikes, setShopBikes] = useState([])

    useEffect (() => {
        fetch("http://localhost:3000/bikes")
        .then((response) => response.json())
        .then((data) => setShopBikes(data))
    
    }, []);


    function renderShopBikes(){
        return shopBikes.map((shopBike) => {
                return (
                        <BikeCard
                        key={shopBike.id}
                        id={shopBike.id}
                        bikeName={shopBike.name}
                        bikeBrand={shopBike.brand}
                        bikePrice={shopBike.price}
                        bikeStyle={shopBike.style}
                        bikeImageUrl={shopBike.img_url}
                        bikeWeightLb={shopBike.weight_lb}
                        bikeSizeCm={shopBike.size_cm}
                        />
                    )
                })
            
    }

    return (
        <div>
            {renderShopBikes()}
        </div>
    )
}


export default Bikes;