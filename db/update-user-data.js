import {supabase} from "@/supabase";

export default async function updateUserData() {
    console.log("OMGDATAupdateFROMHERE");
    const { data, error } = await supabase.from("users").update(
        [
            { name: "John", email: "kdahfjh@fdad", coins: 100, exp: 100 }
        ]
    );
    if (error) throw error;
    console.log(data);
    return data;
    }