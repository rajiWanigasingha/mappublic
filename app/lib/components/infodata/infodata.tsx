export default function Infodata(res: any) {
  const data = res.res;
  return (
    <>
      <div className="w-full flex justify-center p-5">
        <div className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg p-3 flex flex-col gap-3 border border-blue-600">
          <div>
            <h1 className="md:text-lg lg:text-lg text-base font-semibold">Your gps coordinets:</h1>
            <h1 className="md:text-lg lg:text-lg text-base font-semibold text-center">
              latitude = {data.lat}<br/>
              longitude = {data.lon}
            </h1>
          </div>
          <div>
            <h1>Town: {data.address.town}</h1>
          </div>
          <div>
            <h1>District: {data.address.state_district}</h1>
          </div>
          <div>
            <h1>Province: {data.address.state}</h1>
          </div>
          <div>
            <h1>postcode: {data.address.postcode}</h1>
          </div>
          <div>
            <h1>country: {data.address.country}</h1>
          </div>
          <div>
            <h1>country_code: {data.address.country_code}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
