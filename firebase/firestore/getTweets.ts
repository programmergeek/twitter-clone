import { app } from "../firebaseInit";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Initialize cloud firestore and get a reference to the service
const db = getFirestore(app);

// get latest tweets from the database
// ADD LATER: Pagination
