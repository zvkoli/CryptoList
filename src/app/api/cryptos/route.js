import axios from "axios";

export async function GET() {
  try {
    const url = process.env.NEXT_PUBLIC_CMC_API_URL;

    const res = await axios.get(url);

    return new Response(JSON.stringify(res.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
