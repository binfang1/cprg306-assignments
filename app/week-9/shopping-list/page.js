"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (item) => {
        console.log("Adding");
        setItems([...items, item]);
    };

    const handleItemSelect = (name) => {
        let comma_split = name.split(',');
        var fixed_name;
        if(comma_split.length > 1) {
            fixed_name = comma_split[0];
        } else {
            let split_name = name.split(' ');
            split_name.pop();
            fixed_name = split_name.join(' ');
        }
        setSelectedItemName(fixed_name);
    };

    return (
        <main className="px-6">
            <h1 className="text-xl font-bold">Shopping List</h1>
            <div className="flex">
                <div>
                    <NewItem onAddItem={handleAddItem}></NewItem>
                    <ItemList items={items} onItemSelect={handleItemSelect}></ItemList>
                </div>
                <div>
                    <MealIdeas ingredient={selectedItemName}></MealIdeas>
                </div>
            </div>
        </main>
    );
}