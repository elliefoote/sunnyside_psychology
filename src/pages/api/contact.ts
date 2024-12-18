import type { APIRoute } from "astro";

export const prerender = false;
const apiUrl = import.meta.env.API_URL;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  console.log(data);
  const name = data["name"];
  const email = data["email"];
  const subject = data["subject"];
  const message = data["message"];
  if (!name || !subject || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  const body = JSON.stringify({
    senderName: name,
    senderEmail: email,
    subject: subject,
    message: message,
  });
  const requestOptions = {
    method: "POST",
    body,
  };
  const response = await fetch(apiUrl, requestOptions);
  if (response.ok) {
    return new Response(
      JSON.stringify({
        message: "Success!",
      }),
      { status: 200 }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: "Error when submitting form",
      }),
      { status: 500 }
    );
  }
};
