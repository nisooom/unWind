import {supabase} from "@/supabase";

export default async function delData() {
    console.log("OMGDATAdeletedFROMHERE");
    const { data, error } = await supabase
    .from("users")
    .delete()
    .eq("name", "John");
    if (error) throw error;
    console.log(data);
    return data;
    }