import { collection, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";
import { database } from "./firebaseSetup";

// This file contains the helper functions
// to read, write, update and delete data from the Firestore database

// Read data from the Firestore database
export async function writeToDB(activity) {
    try {
        const docRef = await addDoc(collection(database, "activities"), activity);
        console.log("Document successfully written!");
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// Write data to the Firestore database
export async function deleteFromDB(id) {
    try {
        await deleteDoc(doc(database, "activities", id));
        console.log("Document successfully deleted!");
    } catch (e) {
        console.error("Error removing document: ", e);
    }
}

// Update data in the Firestore database
export async function updateDB(id, updatedActivity) {
    try {
        await updateDoc(doc(database, "activities", id), updatedActivity);
        console.log("Document successfully updated!");
    } catch (e) {
        console.error("Error updating document: ", e);
    }
}
