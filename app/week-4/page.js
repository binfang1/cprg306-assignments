"use client";

import { useState } from "react";

export default function Page() {
    const [quantity, setQuantity] = useState(1)

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

    return (
        <main class="px-6">
            <p class="px-14">{quantity}</p>
            <button class="px-6 border-2" onClick={increment}>+</button>
            <button class="px-6 border-2" onClick={decrement}>-</button>
        </main>
    );
}