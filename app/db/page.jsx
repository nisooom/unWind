"use client";
import { useState, useEffect } from "react";
import fetchUsers from "@/db/fetch-users";
import sendData from "@/db/send-data";
import delData from "@/db/delete-data";
import updateUserData from "@/db/update-user-data";
import saveUser from "@/db/save-user";

const page = () => {
  const [data, setData] = useState(null);
  const handleFetch = async () => {
    const res = await fetchUsers();
    setData(res);
  };

  const [emaildata, setemailData] = useState(null);
  const handleemail = async () => {
    const res = await saveUser('egege@erwefg');
    setemailData(res);
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

        <div className="text-white">
          <button onClick={handleemail}>Save User</button>
          
        <pre>{JSON.stringify(emaildata)}</pre>
        </div>


    </div>


  );
};

export default page;