import type { APIRoute } from "astro";
import SendEmail from "../../services/sendmail";

export const POST: APIRoute = async ({ request }) => {

  SendEmail(request)
  /* const data = await request.formData();
  const name = data.get("fullname");
  const email = data.get("email");
  const phone = data.get("phone");
  const message = data.get("message");
  // Validate the data - you'll probably want to do more than this
  if (!name || !email || !message || !phone) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  } */
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  ); 
};