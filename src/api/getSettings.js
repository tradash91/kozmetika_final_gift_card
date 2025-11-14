export const getSettings = async () => {
  /* const token = localStorage.getItem("token");
  if (!token) throw new Error("You are not authenticated"); */

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/settings/getSettings`, // vagy saját domain
    {
      method: "GET",

      /* headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }, */
    }
  );

  if (!res.ok) throw new Error("You are not authenticated");

  const data = await res.json();
  return data;
};
