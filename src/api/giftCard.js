export async function sendGiftCardComfim(buyerData) {
  const token = await grecaptcha.execute(
    import.meta.env.VITE_RECAPTCHA_SITE_KEY,
    { action: "submit" }
  );

  const res = await fetch(
    "https://ddvnuqohudlphhbsdtzg.supabase.co/functions/v1/verify-recaptcha",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    }
  );

  const data = await res.json();

  if (!data.success || data.score < 0.5) {
    throw new Error("reCAPTCHA verification failed");
  }

  const res2 = await fetch(
    "https://ddvnuqohudlphhbsdtzg.supabase.co/functions/v1/rapid-handler",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: buyerData.name,
        email: buyerData.email,
        phone: buyerData.phone,
        city: buyerData.city,
        zip: buyerData.zip,
        street: buyerData.street,
        delivery: buyerData.delivery,
        service: buyerData.service,
        service_price: buyerData.servicePrice,
      }),
    }
  );

  const data2 = await res2.json();

  if (!res2.ok) {
    throw new Error(data2.error); // <-- EZ A LÉNYEG
  }

  return data2; // success
}

/* export async function sendGiftCardComfim(buyerData) {
  try {
    console.log("geci");
    const token = await grecaptcha.execute(
      import.meta.env.VITE_RECAPTCHA_SITE_KEY,
      { action: "submit" }
    );

    const res = await fetch(
      "https://ddvnuqohudlphhbsdtzg.supabase.co/functions/v1/verify-recaptcha",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      }
    );

    const data = await res.json();
    if (!data.success || data.score < 0.5) {
      alert("reCAPTCHA verification failed");
      return;
    }

    await fetch(
      "https://ddvnuqohudlphhbsdtzg.supabase.co/functions/v1/rapid-handler",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: buyerData.name,
          email: buyerData.email,
          phone: buyerData.phone,
          city: buyerData.city,
          zip: buyerData.zip,
          street: buyerData.street,
          delivery: buyerData.delivery,
          service: buyerData.service,
          service_price: buyerData.servicePrice,
        }),
      }
    );
  } catch (error) {
    console.log(error);
  }
}
 */
