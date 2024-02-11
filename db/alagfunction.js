import { supabase } from "@/supabase";

const alagfunction = async (id, user, image) => {
  const { data, error } = await supabase
    .from("users")
    .select("email")
    .eq("email", user.email);

  if (error) {
    console.error("Error fetching user:", error);
    return;
  }

  if (data.length === 0) {
    const { error: insertError } = await supabase.from("users").insert([
      {
        name: user.name,
        email: user.email,
        profile_img: image,
        coins: 10,
      },
    ]);

    if (insertError) {
      console.error("Error inserting user:", insertError);
    }
  }
};

export { alagfunction };
