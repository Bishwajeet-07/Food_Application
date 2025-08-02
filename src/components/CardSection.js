// import { useSelector } from "react-redux";
// import ItemList from "./ItemList";
// import { IMG_URL } from "../utils/contain";
// import { useDispatch } from "react-redux";
// import { removeItem } from "../utils/cartSlice";



// const CardSection = () => {

//     const cartData = useSelector((store) => store.cart.items)
//     // console.log(cartData)
//     const dispatch = useDispatch()

//     const HandleRemove = (itemdata) => {
//         dispatch(removeItem(itemdata))
//     }

//     const items = [
//         { id: 1, name: 'Veggie Pizza', qty: 1, price: 299 },
//         { id: 2, name: 'Cold Coffee', qty: 2, price: 120 },
//         { id: 3, name: 'Garlic Bread', qty: 1, price: 99 },
//     ];

//     const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
//     const tax = subtotal * 0.05;
//     const discount = 50;
//     const total = subtotal + tax - discount;

//     return (
//         <div>
//             {cartData.map(itemdata => (
//                 <div key={itemdata.card.info.id} className="flex justify-between  mt-5 border-b-2 border-gray-400 p-5 relative">
//                     <div className=" w-9/12 ">
//                         <span className=" text-2xl text-gray-100">{itemdata.card.info.name} </span> <br></br>
//                         <span className=" text-xl font-bold text-yellow-400"> ₹ {itemdata.card.info.price ? itemdata.card.info.price / 100 : itemdata.card.info.defaultPrice / 100} </span>
//                         <p className="mt-3 text-sm text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">{itemdata.card.info.description} </p>
//                     </div>
//                     <div className="flex h-32 max-w-32  ">
//                         <img src={IMG_URL + itemdata.card.info.imageId} className="h-auto w-full object-cover rounded-lg" />
//                     </div>
//                     <button className=" absolute right-7 bottom-2 text-green-500  bg-gray-100  px-6 font-bold rounded-md py-1   border-2 border-green-500" onClick={() => HandleRemove(itemdata)} > Remove</button>
//                 </div>
//             ))}

//             {/* billing */}

//             <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
//                 <h2 className="text-xl font-bold mb-4">🧾 Order Summary</h2>
//                 <ul className="divide-y">
//                     {items.map((item) => (
//                         <li key={item.id} className="flex justify-between py-2">
//                             <span>{item.name} x {item.qty}</span>
//                             <span>₹{item.price * item.qty}</span>
//                         </li>
//                     ))}
//                 </ul>

//                 <div className="mt-4 space-y-1 text-sm">
//                     <div className="flex justify-between">
//                         <span>Subtotal</span>
//                         <span>₹{subtotal.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between">
//                         <span>Tax (5%)</span>
//                         <span>₹{tax.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between text-green-600">
//                         <span>Discount</span>
//                         <span>-₹{discount.toFixed(2)}</span>
//                     </div>
//                     <hr className="my-2" />
//                     <div className="flex justify-between font-bold text-lg">
//                         <span>Total</span>
//                         <span>₹{total.toFixed(2)}</span>
//                     </div>
//                 </div>

//                 <button className="w-full mt-6 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
//                     Proceed to Payment
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default CardSection;