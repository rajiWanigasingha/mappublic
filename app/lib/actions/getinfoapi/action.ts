"use server";

export default async function GetinfoApi(lat: number, lon: number) {
  const res = await fetch(
    `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  if (!res.ok) {
    console.log("Eooeoeoeoeoeoe");
  }

  return res.json()
}
