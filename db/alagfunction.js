"use server";
import { supabase } from "@/supabase";

const alagfunction = async () => {
    const data = await supabase.from("users").select(
        "email"
      ).eq("email", user.email);
    
      if (data.length == 0){
        await supabase.from("users").insert(
            [
                {
                    "name": user.name,
                    "email": user.email,
                    "profile_img":image,
                    "coins":10
                }
            ]
        )
      }
}
export { alagfunction }



