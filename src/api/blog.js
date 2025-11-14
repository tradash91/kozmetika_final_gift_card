import { supabase } from "../utils/supabase";
export async function posts() {
  let { data: blogData, error } = await supabase.from("blog").select("*");
  return blogData;
}
