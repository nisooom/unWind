"use client";
import { useState, useEffect } from "react";
import fetchUsers from "@/db/fetch-users";
import sendData from "@/db/send-data";
import delData from "@/db/delete-data";
import updateUserData from "@/db/update-user-data";

const page = () => {
  const [data, setData] = useState(null);
  const handleFetch = async () => {
    const res = await fetchUsers();
    setData(res);
  };

  
  return (
    <div className="text-white">
      <h1>Users These are the Users</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleFetch}>Fetch Users</button>
        <button onClick={
            async () => {
                await sendData();
                console.log("OMGDATASENT");
        }}>Send Dummy</button>
        <button onClick={
            async () => {
                await updateUserData();
                console.log("OMGDATAUPDATE");
        }}>Update Data lmao</button>

        <button onClick={
            async () => {
                await delData();
                console.log("OMGDATASENT");
        }}>Delete Dummy</button>
    </div>
  );
};

export default page;