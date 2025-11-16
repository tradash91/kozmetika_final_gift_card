export async function sendGiftCardComfim(buyerData){
     const token = await grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: "submit" });
              
              
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




            await fetch("https://ddvnuqohudlphhbsdtzg.supabase.co/functions/v1/rapid-handler",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify({
            name: buyerData.name,
            email: buyerData.email,
            phone: buyerData.phone,
            city: buyerData.city,
            zip: buyerData.zip,
            street: buyerData.street,
            delivery: buyerData.delivery,
          
          })
        })
}