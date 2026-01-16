"use server";

export async function submitRSVP(formData: FormData) {
  const email = formData.get("email");

  if (!email) {
    throw new Error("Email is required");
  }

  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY!;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;
  const AIRTABLE_TABLE_NAME = "RSVPs"; // 👈 must match EXACTLY

  const res = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Email: email, // 👈 must match Airtable column name EXACTLY
        },
      }),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    console.error("Airtable error:", error);
    throw new Error("Failed to submit RSVP");
  }

  return { success: true };
}
