import Link from "next/link";
import Btngps from "./lib/components/gpsbtn/btngps";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center mt-36">
        <div className="lg:w-1/2 md:w-2/3 w-full rounded-2xl shadow-xl flex flex-col gap-5 items-center p-8">
          <h1 className="text-lg md:text-xl lg:text-xl font-bold text-center">
            Welcome, we need access to your gps loaction
          </h1>
          <Btngps/>
        </div>
      </div>
    </>
  );
}
