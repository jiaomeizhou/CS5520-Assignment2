import { collection, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(activity) {
    try {
        const docRef = await addDoc(collection(database, "activities"), activity);
        console.log("Document successfully written!");
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function deleteFromDB(id) {
    try {
        await deleteDoc(doc(database, "activities", id));
        console.log("Document successfully deleted!");
    } catch (e) {
        console.error("Error removing document: ", e);
    }
}

export async function updateDB(id, updatedActivity) {
    try {
        await updateDoc(doc(database, "activities", id), updatedActivity);
        console.log("Document successfully updated!");
    } catch (e) {
        console.error("Error updating document: ", e);
    }
}
