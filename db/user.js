import { Client, Databases } from "appwrite";
import { ID } from "appwrite";
import { Query } from "appwrite";

const client = new Client();
const databases = new Databases(client);
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const getUserByEmail = async (email) => {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DB_ID,
      process.env.NEXT_PUBLIC_APPWRITE_USERS_ID,
      [Query.equal("email", email)]
    );
    return response.documents[0];
  } catch (error) {
    console.log(error);
  }
};
//  get user tasks by email
const getUserTasks = async (email) => {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DB_ID,
      process.env.NEXT_PUBLIC_APPWRITE_USERS_ID,
      [Query.equal("email", email)]
    );
    console.log(response?.documents[0]?.tasks);
    return response?.documents[0]?.tasks || [];
  } catch (error) {
    console.log(error);
  }
};
const saveUser = async (name, picture, email) => {
  try {
    await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DB_ID,
      process.env.NEXT_PUBLIC_APPWRITE_USERS_ID,
      ID.unique(),
      {
        name: name,
        image: picture,
        email: email,
      }
    );
    console.log("User saved successfully");
  } catch (error) {
    console.log(error);
  }
};

const updateUserTask = async (task, id) => {
  const { title, description, due_date, status, tags } = task;
  try {
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DB_ID,
      process.env.NEXT_PUBLIC_APPWRITE_TASKS_ID,
      id,
      {
        task_name: title,
        content: description,
        due_date: due_date,
        status: status,
        tags: tags,
      }
    );
    console.log("Task updated successfully");
  } catch (error) {
    console.log(error);
  }
}

const deleteTask = async (id) => {
  try {
    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DB_ID,
      process.env.NEXT_PUBLIC_APPWRITE_TASKS_ID,
      id
    );
    console.log("Task deleted successfully");
  } catch (error) {
    console.log(error);
  }
}


export { deleteTask, updateUserTask, getUserByEmail, saveUser, getUserTasks };
