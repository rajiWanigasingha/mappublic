"use server";

import { redirect } from "next/navigation";

export default async function Getinfo(lat: number, lon: number) {
  redirect(`/map/lat=${lat}&lon=${lon}`)
}
