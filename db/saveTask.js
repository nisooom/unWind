import { client, databases } from "./getClient";
import { ID } from "appwrite";



const saveTask = async (users, content, task_name, status, tags, due_date) => {
  try {
    await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DB_ID,
      process.env.NEXT_PUBLIC_APPWRITE_TASKS_ID,
      ID.unique(),
      {
        users,
        content,
        task_name,
        status,
        tags,
        due_date,
      }
    );
    console.log("Task saved successfully");
  } catch (error) {
    console.log(error);
  }
};

export { saveTask };
