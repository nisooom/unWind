import { supabase } from "@/supabase";

export default async function fetchUsers() {
  const { data, error } = await supabase.from("users").select(
        

 
    );
  if (error) throw error;
  console.log(data);
  return data;
}