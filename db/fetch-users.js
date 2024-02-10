import { supabase } from "@/supabase";

export default async function fetchUsers() {
  const { data, error } = await supabase.from("users").select(
    `id,
    username,
    email,
    teams(team_name)
    `
  );
  if (error) throw error;
  console.log(data);
  return data;
}
