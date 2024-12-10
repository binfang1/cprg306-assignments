import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    try {
        const q = query(
            collection(db, "users", userId, "items")
        )
        const querySnapshot = await getDocs(q)

        const items = [];

        querySnapshot.forEach((doc) => {
            items.push({id: doc.id, ...doc.data()})
        });

        return items;

    } catch (e) {
        console.error("Error in getItems: ", e);
    }
}

export async function addItems(userId, item) {
    try {
        const docRef = await addDoc(collection(db, "users", userId, "items"), item);

        return docRef.id;
    } catch (e) {
        console.error("Error in addItem:", e);
    }
}


