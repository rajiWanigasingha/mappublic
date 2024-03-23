import GetinfoApi from "@/app/lib/actions/getinfoapi/action";
import Infodata from "@/app/lib/components/infodata/infodata";
import dynamic from "next/dynamic";

const Mapcomponent = dynamic(
  () => import("@/app/lib/components/leafletmap/map"),
  { ssr: false }
);

export default async function Map({ params }: { params: { slug: string } }) {
  const decordeURL = decodeURIComponent(params.slug);

  const param = new URLSearchParams(decordeURL);

  const lat = param.get("lat");

  const lon = param.get("lon");

  console.log(lat, lon);

  const res = await GetinfoApi(Number(lat), Number(lon));

  return (
    <>
      <Mapcomponent lat={lat} lon={lon} res={res} />
      <Infodata res={res} />
    </>
  );
}
