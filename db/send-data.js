import {supabase} from "@/supabase";

export default async function sendData() {
    console.log("OMGDATASENTFROMHERE");
    const { data, error } = await supabase.from("users").insert(
        [
            { name: "John", email: "kdahfjh@fdad", coins: 100, exp: 100 }
        ]
    );
    if (error) throw error;
    console.log(data);
    return data;
    }