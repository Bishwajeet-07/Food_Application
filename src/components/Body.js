
import CardComponent, { withPromoted } from "./CardComponent";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MAIN_URL } from "../utils/contain";
import ListOfItems from "./ListOfItems";

const Body = () => {
    const [listOfRestaurants, setlistOfRasturants] = useState([]);
    const [keyvalue, setKeyValue] = useState("");
    const [searchData, setSearchData] = useState([]);
    const WithPromotedCard = withPromoted(CardComponent)
    const [listOfItems, setListOfItems] = useState([])
    const [datalistitem, setdatalistitem] = useState(null)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const dataList = await fetch("https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9083826%26lng%3D77.6063726%26offset%3DCJhlELQ4KIDowd7un9C0dDCnEw")
        // console.log("fech call")
        const json = await dataList.json()
        // const dataList = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9165757&lng=77.6101163")
        setdatalistitem(json);
        // console.log(json)
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        // setlistOfRasturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // setSearchData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


        // console.log(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants )
        setlistOfRasturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setSearchData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfItems(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
        // console.log(listOfItems);

    }
    if (datalistitem === null || datalistitem === undefined) return (<div className=" min-h-screen text-white text-center text-5xl font-mono mt-10">Loading...</div>);

    return (
        <div>

            <ListOfItems bannerItem={listOfItems} />

            <h2 className=" text-white text-3xl font-bold mt-6">Top Restaurant</h2>
            <div className=" flex flex-col md:flex-row  mt-4">
                <div className=" w-full flex justify-between sm:justify-normal">
                    <input type="text" value={keyvalue} placeholder="Search Items" className=" w-full md:max-w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-black" onChange={(e) => {
                        setKeyValue(e.target.value);

                    }} />
                    <button className="btn2 rounded-md text-white bg-emerald-600 ml-2 py-2 px-4" onClick={() => {
                        let searchvalue = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(keyvalue.toLowerCase()))
                        setSearchData(searchvalue)
                    }} >Search</button>
                </div>

                <div className=" flex justify-center md:justify-end  items-center w-full mt-4 sm:mt-0">
                    <div className="m mx-2" >
                        <button className=" text-[14px] p-1 sm:px-4 sm:py-2 sm:text-xl  text-black rounded-md bg-white" onClick={() => {
                            const datanew = listOfRestaurants.filter((res) => res?.info?.avgRating > 4.5)
                            // setlistOfRasturants(datanew)
                            setSearchData(datanew)
                        }}>
                            Top rated Food
                        </button>
                    </div>
                    <div className=" mx-2" >
                        <button className="text-[14px] p-1 sm:px-4 sm:py-2 sm:text-xl  text-black rounded-md bg-white" onClick={() => {
                            const datanew = listOfRestaurants.filter((res) => res?.info?.avgRating > 4.0)
                            // setlistOfRasturants(datanew)
                            setSearchData(datanew)
                        }}>
                            Rating 4.0+
                        </button>
                    </div>
                    <div className=" mx-2">
                        <button className="text-[14px] p-1 sm:px-4 sm:py-2 sm:text-xl  text-black rounded-md bg-white" onClick={() => {
                            const datanew = listOfRestaurants.filter((res) => res?.info?.sla?.deliveryTime < 20)
                            // setlistOfRasturants(datanew)
                            setSearchData(datanew)
                        }}>
                            Delevery in 20 mint.
                        </button>
                    </div>
                </div>
            </div>
            <div className="component">
                {searchData.map((card) => <Link key={card.info.id} to={"/resturant/" + card.info.id} >
                    {card.info.promoted ? <WithPromotedCard resdata={card} /> : <CardComponent resdata={card} />}
                </Link>)}
            </div>
        </div>
    )
}

export default Body;