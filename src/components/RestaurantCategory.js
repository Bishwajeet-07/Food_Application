import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({ data }) => {

    const [showitem, setShowItem] = useState(true)
    const [icon, setIcon] = useState("⬆️")
    function clickHandle() {
        setShowItem(!showitem)
        if (icon === "🔽") {
            setIcon("⬆️")
        }
        else {
            setIcon("🔽")
        }
    }



    return (
        <div className=" w-full md:max-w-screen-lg  m-auto mt-10 shadow-sm rounded-md shadow-gray-700 p-5">
            <div onClick={clickHandle} className="flex  justify-between cursor-pointer ">
                <h3 className=" border-l-2 mb-6   pl-1 text-2xl cursor-pointer text-white">{data.title}  ({data.itemCards.length}) </h3>
                <p>{icon}</p>
            </div>
            {showitem && <ItemList item={data.itemCards} />}
        </div>
    )
}

export default RestaurantCategory;