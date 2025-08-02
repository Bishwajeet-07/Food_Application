import { useState } from "react";
import { LOGO_URL } from "../utils/contain";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeadComponent = () => {
    const [entry, setEntry] = useState("Login")


    // subscribing the store 
    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems)
    return (
        <div className="flex items-center rounded-md justify-between  md:px-6  py-2 bg-white shadow-md">
            {/* Logo */}
            <img className="h-12 w-auto" src={LOGO_URL} alt="Logo" />

            {/* Navigation Links */}
            <ul className="flex justify-center items-center space-x-1 sm:space-x-6 md:space-x-6 text-gray-700 font-medium">
                <li>
                    <Link className="hover:text-emerald-600 transition" to="/">Home</Link>
                </li>
                <li>
                    <Link className="hover:text-emerald-600 transition" to="/about">About</Link>
                </li>
                <li>
                    <Link className="hover:text-emerald-600 transition" to="/contact">Contact</Link>
                </li>
                <li>
                    <Link className="flex items-center gap-1 hover:text-emerald-600 transition" to="/cart">
                        Cart <span className="text-emerald-500 font-bold">({cartItems.length})</span>
                    </Link>
                </li>

                {/* Login/Logout Button */}
                <button
                    onClick={() => setEntry(entry === "Login" ? "Logout" : "Login")}
                    className="ml-4 px-4 py-1.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
                >
                    {entry}
                </button>
            </ul>
        </div>

    )
}

export default HeadComponent;