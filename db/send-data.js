import {supabase} from "@/supabase";

export default async function sendData(name, email, picture) {
    console.log("OMGDATASENTFROMHERE");
    const { data, error } = await supabase.from("users").insert(
        [
            { 
                "name":name,
                "email": email,
                "profile_img": picture
             }
        ]
    );
    if (error) throw error;
    console.log(data);
    return data;
    }