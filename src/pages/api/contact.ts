import type { APIRoute } from "astro";

export const prerender = false;
const apiUrl = import.meta.env.API_URL;

export const GET: APIRoute = async ({ request }) => {
  return new Response(
    JSON.stringify({
      message: "The API url is: " + apiUrl,
    }),
    { status: 200 }
  );
};

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  console.log(data);
  const email = data["email"];
  const subject = data["subject"];
  const message = data["message"];
  if (!subject || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  const body = JSON.stringify({
    senderEmail: email,
    subject: subject,
    message: message,
  });
  const requestOptions = {
    method: "POST",
    body,
  };
  const response = await fetch(apiUrl, requestOptions);
  const result = await response.json();
  console.log(result);
  if (response.ok) {
    return new Response(
      JSON.stringify({
        message: "Success!",
      }),
      { status: 200 }
    );
  }
};
