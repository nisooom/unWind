"use client";
import { useState, useEffect } from "react";
import fetchUsers from "@/db/fetch-users";

const page = () => {
  const [data, setData] = useState(null);
  const handleFetch = async () => {
    const res = await fetchUsers();
    setData(res);
  };
  return (
    <div>
      <h1>Users</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleFetch}>Fetch Users</button>
    </div>
  );
};

export default page;