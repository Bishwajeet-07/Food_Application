import { useEffect, useState } from "react";
import { CARD_URL } from "../utils/contain";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const CardMenuComponent = () => {

    const [resInfo, setResInfo] = useState(null)

    const { resId } = useParams();
    // console.log(resId + "hii");


    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch(CARD_URL + resId)
            const json = await data.json();
            // console.log(json)
            setResInfo(json.data)
        } catch (error) {
            console.log(error)
        }
    }
    if (resInfo === null || resInfo === undefined) return (<div className=" min-h-screen text-white text-center text-5xl font-mono mt-10">Loading...</div>);

    const { name, costForTwoMessage, cuisines, totalRatingsString, avgRatingString, nearestOutletNudge } = resInfo?.cards[2]?.card?.card?.info;
    // console.log(resInfo);
    // console.log(resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards[0].card.info)
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


    return (
        <div>
            <h1 className=" w-full md:w-8/12 text-3xl m-auto mt-6 font-bold text-white">{name}</h1>
            <div className="w-full md:w-8/12  m-auto mt-6 shadow-sm rounded-md bg-zinc-900 shadow-gray-700 p-5">
                <div className=" text-white ">
                    <span>{avgRatingString} ({(totalRatingsString)}) - {costForTwoMessage}</span>
                    <p className=" text-yellow-400">{cuisines}</p>
                    <p>Outlet - {nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.areaName}</p>
                    <p>{nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.sla?.slaString}</p>

                </div>
            </div>
            <div>
                {categories.map((each) => <RestaurantCategory key={each.card.card.title} data={each.card.card} />)}
            </div>
        </div>

    )
}

export default CardMenuComponent;