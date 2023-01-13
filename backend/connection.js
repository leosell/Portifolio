import connectionDB from "./config/db.js";
import contact_model from "./contact.model.js";

const connection = async () => {
    try {
        const result = await connectionDB.sync()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

connection()