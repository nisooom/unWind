import { alagfunction } from "./alagfunction";

const saveUser = async (id, user, image) => {
  console.log("saveUser");
  console.log("id", id);
  console.log("user", user);
  console.log("image", image);

  await alagfunction(id, user, image);
  

  
  // here save the user data
};
export { saveUser };
