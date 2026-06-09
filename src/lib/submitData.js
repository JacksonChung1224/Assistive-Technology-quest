// Replace this URL with your deployed Google Apps Script Web App URL
const GAS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwg0rvgdEkMQ9RG9Ryb11Z7jnFHpXYYPVFlpjuuA68_oSDKg0AwhT82Xb75oD1VQqKVtA/exec";

export const submitFormToGoogleSheets = async (formData) => {
  try {
    // Because of CORS issues with Google Apps Script from standard fetch sometimes,
    // sending a simple POST with mode: 'no-cors' is common, but you won't get a readable response.
    // However, sending as application/x-www-form-urlencoded often bypasses preflight.
    
    // We will pass the data as a JSON string in a form field to make it easier for GAS
    const formDataObj = new URLSearchParams();
    formDataObj.append("data", JSON.stringify(formData));

    const response = await fetch(GAS_WEBAPP_URL, {
      method: "POST",
      mode: 'no-cors', // Enabled to bypass strict CORS policies on GAS
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formDataObj.toString()
    });
    
    // If using no-cors, response.ok is false and status is 0, so we just assume success.
    return true; 
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};
