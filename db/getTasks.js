import { client, databases } from "./getClient";
import { ID } from "appwrite";
import { Query } from "appwrite";
import { getUserByEmail } from "./user";

export function getUserTasks(email){
  const userData = getUserByEmail(email);

  return userData.tasks;
}

