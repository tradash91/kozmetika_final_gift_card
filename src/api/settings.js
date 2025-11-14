import { supabase } from "../utils/supabase";

export async function settings() {
  let { data, error } = await supabase.from("opening_hours").select("*");

  return data;
}

export async function getOpeningHours() {
  let { data, error } = await supabase.from("opening_hours").select("*");
  return data;
}

export async function getSiteSettings() {
  let { data: Settings, error } = await supabase.from("Settings").select("*");
  return Settings;
}

export async function getSocial() {
  let { data: social_links, error } = await supabase
    .from("social_links")
    .select("*");

  return social_links;
}

export async function getContacts() {
  let { data: contacts, error } = await supabase.from("contacts").select("*");
  return contacts;
}
