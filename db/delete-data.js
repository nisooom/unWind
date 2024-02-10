
export default async function sendData() {
    console.log("OMGDATAdeletedFROMHERE");
    const { data, error } = await supabase
    .from("users")
    .delete()
    .eq();
    if (error) throw error;
    console.log(data);
    return data;
    }