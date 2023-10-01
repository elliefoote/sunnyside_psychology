import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const apiUrl = import.meta.env.API_URL;
  return new Response(
    JSON.stringify({
      message: "The API url is: " + apiUrl,
    }),
    { status: 200 }
  );
};

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const name = data["name"];
  const email = data["email"];
  const message = data["message"];
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 }
  );
};
