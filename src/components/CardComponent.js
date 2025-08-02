import { IMG_URL } from "../utils/contain";

const CardComponent = (props) => {
    const { resdata } = props;
    // console.log(resdata);


    return (
        <div className="card-data m-1 mt-10 md:m-4 w-36 md:w-60">
            <div className="img-div h-36 md:h-44">
                <img className="card-img" src={IMG_URL + resdata?.info?.cloudinaryImageId} />
            </div>
            <div className="card-data-value">
                <h2>{resdata?.info?.name}</h2>
                <h3>{resdata?.info?.costForTwo}</h3>
                <p> ⭐ {resdata?.info?.avgRating} <span><b> • {resdata?.info?.sla?.slaString}</b></span></p>
                <p>{resdata?.info?.cuisines.join(", ")}</p>
                <p>{resdata?.info?.areaName}</p>
            </div>
        </div>
    )
}


export const withPromoted = (CardComponent) => {
    return (props) => {
        return (
            <div>
                <label className="promoted">Promoted</label>
                <CardComponent {...props} />
            </div>
        )
    }
}

export default CardComponent;