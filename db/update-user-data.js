import {supabase} from "@/supabase";

export default async function updateUserData() {
    console.log("OMGDATAupdateFROMHERE");
    const { data, error } = await supabase.from("users").update(
        { 
            name: "JACK", email: "kdahfjh@fdad", coins: 100, exp: 100 
        }
    ).eq(
        "name","John"
        );
    if (error) throw error;
    console.log(data);
    return data;
    }