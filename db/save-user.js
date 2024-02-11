import sendData from "./send-data";

const saveUser = async (id, user, image) => {
  console.log("saveUser");
  console.log("id", id);
  console.log("user", user);
  console.log("image", image);

  sendData(user.name, user.email, image);
};
export { saveUser };
