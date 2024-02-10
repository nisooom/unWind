
export default async function sendData() {
    console.log("OMGDATAdeletedFROMHERE");
    const { data, error } = await supabase.from("users").delete(
        [
            { name: "John", email: "kdahfjh@fdad", coins: 100, exp: 100 }
        ]
    );
    if (error) throw error;
    console.log(data);
    return data;
    }