
function BikeCard({ id, bikeName, bikeBrand, bikePrice, bikeStyle, bikeImageUrl, bikeWeightLb, bikeSizeCm }){

    return (
        <div>
            <div>
                <img src={bikeImageUrl} alt={bikeName} width="300px" height="300px"/>
                <h2>{bikeName}</h2>
                <ul>{bikePrice}</ul>
                <ul>{bikeBrand}</ul>
                <ul>{bikeStyle}</ul>
                <ul>{bikeSizeCm} cm</ul>
                <ul>{bikeWeightLb} lbs</ul>
                <ul></ul>
            </div>
        </div>
    )
}

export default BikeCard;