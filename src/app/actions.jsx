"use server";

export async function submitContactForm(formData) {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Extract form data
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const businessName = formData.get("businessName");
  const specialty = formData.get("specialty");
  const location = formData.get("location");
  const currentMarketing = formData.get("currentMarketing");
  const budget = formData.get("budget");
  const goals = formData.get("goals");
  const urgency = formData.get("urgency");
  // Note: Checkbox values would need a different approach if multiple are selected,
  // but for a single value, you can get it similarly.

  console.log("Form Data Received:", {
    firstName,
    lastName,
    email,
    phone,
    businessName,
    specialty,
    location,
    currentMarketing,
    budget,
    goals,
    urgency,
  });

  // In a real application, you would process this data:
  // - Save to a database
  // - Send an email notification
  // - Integrate with a CRM
  // - Perform validation

  // For now, we'll just return a success message
  return {
    success: true,
    message: `Thank you, ${firstName}! Your message has been sent. We'll be in touch shortly.`,
  };
}
