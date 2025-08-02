import { CopyIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CardComponent from "./components/CardComponent";


const SpecificCard = () => {

    const { collectionId, tagId } = useParams();
    // console.log(collectionId, tagId);

    const [copyItem, setCopyitem] = useState(null)
    const [collectedcard, setCollectedcard] = useState([])
    useEffect(() => {
        fetchItem();
    }, [])

    const fetchItem = async () => {
        try {
            const carditem = await fetch(`https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9083826%26lng%3D77.6063726%26collection%3D${collectionId}%26tags%3D${tagId}%26sortBy%3D%26filters%3D%26type%3Drcv2%26offset%3D0%26page_type%3Dnull`)
            const jsonitem = await carditem.json();
            // console.log(jsonitem);
            setCopyitem(jsonitem)

            setCollectedcard(jsonitem?.data?.cards)

        }
        catch (err) {
            console.log(err);
        }
    }

    // console.log(collectedcard);

    if (copyItem === null || copyItem === undefined) return (<div className=" min-h-screen text-white text-center text-5xl font-mono mt-10">Loading...</div>);


    return (
        <div className="component">
            {collectedcard.slice(3).map((card, i) => <Link key={i} to={"/resturant/" + card?.card?.card?.info?.id} >
                <CardComponent resdata={card?.card?.card} />
            </Link>)}
        </div>
    )
}

export default SpecificCard;