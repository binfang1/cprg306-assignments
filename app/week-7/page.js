"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        console.log("Adding");
        setItems([...items, item]);
    };

    return (
        <main className="px-6">
            <h1 className="text-xl font-bold">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}></NewItem>
            <ItemList items={items}></ItemList>
        </main>
    );
}