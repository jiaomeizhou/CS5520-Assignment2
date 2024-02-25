import { collection, addDoc, deleteDoc, doc} from "firebase/firestore";
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
