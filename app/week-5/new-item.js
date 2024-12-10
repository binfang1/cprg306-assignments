"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    let categories = ["produce", "dairy", "bakery", "meat", "frozen foods", "canned goods", "dry goods", "beverages", "snacks", "household", "other"];

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {'name': name, 'quantity': quantity, 'category': category};
        console.log(item);
        alert("Name: " + name + " Quantity: " + quantity + " Category: " + category);
        setName("");
        setQuantity(1);
        setCategory("produce");
        document.getElementById("select").selectedIndex = 0;
    };

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const increment = () => {
        if(quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleSelectChange = (event) => {
        setCategory(event.target.value);
    }

    return (
        <main class="px-6 py-2">
            <input type="text" placeholder="Name" class="border-2 my-2" required value={name} onChange={handleChange}></input>
            <p class="px-14">{quantity}</p>
            <button class="px-6 border-2" onClick={increment}>+</button>
            <button class="px-6 border-2" onClick={decrement}>-</button>
            <div>
                <select class="border-2 my-2" id="select" onChange={handleSelectChange}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Food</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <button type="submit" class="border-2 px-6 my-2" onClick={handleSubmit}>Submit</button>
            </div>
        </main>
    );
}