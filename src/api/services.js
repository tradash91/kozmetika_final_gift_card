import { supabase } from "../utils/supabase";

export async function getServices() {
  const { data, error } = await supabase
    .from("categories")
    .select(
      `
      id,
      name,
      bg_url,
      num,
      isActive,  
      sub_categories (
        id,
        category_id,
        name,
        description,
        duration,
        price,
        details,
        category_name,
        isActive
      )
    `
    )
    .eq("isActive", true);

  if (error) {
    console.error(error);
    return [];
  }

  const filteredData = data.map((cat) => ({
    ...cat,
    sub_categories: cat.sub_categories.filter((sub) => sub.isActive),
  }));

  return filteredData;
}

export async function getServicesForGiftCard() {
  const { data, error } = await supabase
    .from("categories")
    .select(
      `
      id,
      name,
      bg_url,
      num,
      isActive,  
      sub_categories (
        id,
        category_id,
        name,
        description,
        duration,
        price,
        details,
        category_name,
        isActive
      )
    `
    )
    .neq("name", "Konzultáció");

  return data;
}
