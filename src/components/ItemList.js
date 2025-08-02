
import { IMG_URL } from "../utils/contain"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";
import { ToastContainer, toast } from 'react-toastify';

const ItemList = ({ item }) => {

    const dispatch = useDispatch();

    const handleAdd = (itemdata) => {
        dispatch(addItem(itemdata))
        // console.log("click")
        toast.success("Added to Cart !", {
            position: "bottom-right",
        })
    }

    // console.log(item)

    return (
        <div className="grid gap-6">
            <ToastContainer />
            {item.map((itemdata) => {
                const info = itemdata.card.info;
                const price = info.price ? info.price / 100 : info.defaultPrice / 100;

                return (
                    <div
                        key={info.id}
                        className="flex flex-col md:flex-row w-full  items-start md:items-center justify-between gap-4 p-5 bg-zinc-800 text-white rounded-2xl shadow-sm border border-gray-200 relative"
                    >
                        {/* Text Info */}
                        <div className="flex-1">
                            <h3 className="text-lg md:text-2xl sm:text-xl font-semibold text-white">
                                {info.name}
                            </h3>
                            <p className="text-md font-bold text-yellow-300 mt-1">₹ {price}</p>
                            <p className="mt-2 text-sm text-gray-100 line-clamp-none">
                                {info.description}
                            </p>
                        </div>

                        {/* Image */}
                        <div className="w-28 min-w-md h-28 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                            <img
                                src={IMG_URL + info.imageId}
                                alt={info.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Add Button */}
                        <button
                            onClick={() => handleAdd(itemdata)}
                            className="absolute bottom-6 right-8 sm:text-emerald-500 sm:bg-white bg-emerald-700 text-white px-5 py-1.5 rounded-md text-sm font-semibold hover:bg-green-700  hover:text-white transition"
                        >
                            Add +
                        </button>
                    </div>
                );
            })}
        </div>

    )
}
export default ItemList;
