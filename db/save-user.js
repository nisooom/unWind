import { supabase } from "@/supabase";

export default async function saveUser(email) {
    const { data, error } = await supabase.from("users").select(
        'email'
      ).eq("email", email);

    if (error) throw error;
    if (data.length == 0){
        console.log("empty");
    }else{
        return data
    }
    

}