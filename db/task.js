import { Client, Databases } from "appwrite";
import { ID } from "appwrite";

const client = new Client();
const databases = new Databases(client);
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

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
