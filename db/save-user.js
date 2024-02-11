import { supabase } from "@/supabase";
import sendData from "./send-data";

export default async function saveUser(name, email, picture) {
    const { data, error } = await supabase.from("users").select(
        'email'
      ).eq("email", email);

    if (error) throw error;
    if (data.length == 0){
        sendData(name, email, picture);
    }else{
        return data;
    }
    

}