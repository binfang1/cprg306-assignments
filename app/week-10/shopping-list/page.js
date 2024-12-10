"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItems } from "../_services/shopping-list-service.js";
import { useUserAuth } from "../_utils/auth-context.js";


export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleAddItem(item) {
        console.log("Adding");
        try {
            if (user?.uid) {
                const itemId = addItems(user.uid, item);
                setItems([...items, {...item, 'id': itemId}]);
            } else {
                console.log("Not signed in")
            }
        } catch (e) {
            console.error("Error in handleAddItem:", e);
        }
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

    async function loadItems() {
        try {
            if (user?.uid) {
                setItems(await getItems(user.uid));
            } else {
                console.log("Not signed in")
            }
        } catch (e) {
            console.error("Error in loadItems:", e);
        }
    };

    useEffect(() => {
        loadItems()
    }, []);

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