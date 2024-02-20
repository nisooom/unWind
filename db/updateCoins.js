import { client, databases } from "./getClient";
import { ID } from "appwrite";
import { Query } from "appwrite";
import { getUserByEmail } from "./user";



// write a function that updates the coins in the database
const getUserCoins = async (email) => {
  try {
    const res = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DB_ID,
      process.env.NEXT_PUBLIC_APPWRITE_USERS_ID,
      [Query.equal("email", email)],
    );
    console.log(res.documents[0]?.coins);
    return res.documents[0]?.coins || -1;
} catch (error) {
    console.log(error);
  }
};

const updateCoins = async (email, coins, flag) => {
    const user = await getUserByEmail(email);
    const currcoins = await getUserCoins(email);
    let rcoins = coins;
    if (flag === 1){
        rcoins = currcoins + coins;
    }else{
        rcoins = currcoins - coins;
    }

    try {
        const res = await databases.updateDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DB_ID,
        process.env.NEXT_PUBLIC_APPWRITE_USERS_ID,
        user.$id,    
        {
            coins: rcoins,
        }
        );
        return res;
    } catch (error) {
        console.log(error);
    }
    }


export {getUserCoins, updateCoins};
