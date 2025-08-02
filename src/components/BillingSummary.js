import React, { useState, useEffect } from 'react';

import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { IMG_URL } from "../utils/contain";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const BillingSummary = () => {
    // const [items, setItems] = useState([
    //     {
    //         id: 1,
    //         name: 'Veggie Pizza',
    //         details: 'Cheese burst, Capsicum, Onion',
    //         qty: 1,
    //         price: 299,
    //         image: 'https://source.unsplash.com/80x80/?pizza'
    //     },
    //     {
    //         id: 2,
    //         name: 'Cold Coffee',
    //         details: 'With ice cream',
    //         qty: 2,
    //         price: 120,
    //         image: 'https://source.unsplash.com/80x80/?coffee'
    //     },
    //     {
    //         id: 3,
    //         name: 'Garlic Bread',
    //         details: 'Cheesy with herbs',
    //         qty: 1,
    //         price: 99,
    //         image: 'https://source.unsplash.com/80x80/?bread'
    //     },
    // ]);


    const cartData = useSelector((store) => store.cart.items)
    console.log(cartData)
    const dispatch = useDispatch()
    const [items, setItems] = useState([])

    const [card, setCard] = useState([]);
    useEffect(() => {
        const dataWithQty = cartData.map(item => ({
            ...item,
            qty: item.qty || 1  // Add qty: 1 if not already present
        }));
        setItems(dataWithQty);
    }, [cartData]);

    console.log(items);

    // const HandleRemove = (itemdata) => {
    //     if()
    // }

    // console.log(items[0].qty);

    // Handle quantity change
    const updateQty = (id, delta, itemdata) => {
        setItems(prev =>
            prev
                .map(item =>
                    item.card.info.id === id
                        ? { ...item, qty: item.qty + delta }
                        : item


                )
                .filter(item => item.qty > 0)
        );


    };

    // Remove item manually
    const removeItem = id => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    // console.log(items.card.info.price ? items.card.info.price / 100 : items.card.info.defaultPrice / 100);
    const subtotal = items.reduce((sum, item) => sum + item.qty * (item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100), 0);
    const tax = subtotal * 0.05;
    const discount = (subtotal && subtotal > 300) ? 50 : 0;
    const total = subtotal + tax - discount;

    return (
        <div className="max-w-xl  mx-auto bg-white rounded-2xl shadow-lg p-6 mt-6">
            <h2 className="text-xl font-bold mb-4">🧾 Order Summary</h2>

            {/* Item Cards */}
            <div className="space-y-4">
                {items.map((itemdata) => (
                    <div
                        key={itemdata.card.info.id}
                        className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl shadow-sm"
                    >
                        <img
                            src={IMG_URL + itemdata.card.info.imageId}
                            alt={itemdata.name}
                            className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                            <h3 className="font-semibold">{itemdata.card.info.name} </h3>
                            <p className="text-xs text-gray-500">{itemdata.card.info.description}</p>
                            <div className="flex items-center gap-2 mt-2">
                                <button
                                    onClick={() => updateQty(itemdata.card.info.id, -1, itemdata)}
                                    className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 text-sm"
                                >-</button>
                                <span className="text-sm w-6 text-center">{itemdata.qty}</span>
                                <button
                                    onClick={() => updateQty(itemdata.card.info.id, 1)}
                                    className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 text-sm"
                                >+</button>
                                {/* <button
                                    onClick={() => HandleRemove(itemdata)}
                                    className="text-red-500 text-xs ml-4"
                                >
                                    Remove
                                </button> */}
                            </div>
                        </div>
                        <div className="font-bold text-right text-gray-800">
                            ₹{itemdata.card.info.price ? itemdata.card.info.price / 100 : itemdata.card.info.defaultPrice / 100} (X{itemdata.qty})
                        </div>
                    </div>
                ))}

                {items.length === 0 && (
                    <p className="text-center text-gray-500 mt-4">Your cart is empty 🛒</p>
                )}
            </div>

            {/* Price Details */}
            {items.length > 0 && (
                <>
                    <div className="mt-6 space-y-1 text-sm">
                        {subtotal < 300 ? <div>
                            <span className=' text-emerald-600'>Order above ₹300 for ₹50 Discount</span>
                        </div> : null}

                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax (5%)</span>
                            <span>₹{tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-green-600">
                            <span>Discount</span>
                            <span>-₹{discount.toFixed(2)}</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>₹{total.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Payment Button */}
                    <button className="w-full mt-6 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
                        Proceed to Payment
                    </button>
                </>
            )}
        </div>
    );
};

export default BillingSummary;
