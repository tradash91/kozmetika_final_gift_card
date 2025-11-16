export async function getRecaptchaToken() {
  return await window.grecaptcha.execute(
    import.meta.env.VITE_RECAPTCHA_SITE_KEY,
    { action: "submit" }
  );
}
