"use client"

import { MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet";

export default function LeafletMap({lat ,lon ,res}:any){
    const icons = new Icon({
        iconUrl:'/mapmarcker.svg',
        iconSize: [40 ,40]
      })
    
      return (
        <>
            <MapContainer
              center={[lat, lon]}
              zoom={16}
              scrollWheelZoom={false}
              className="w-full h-96"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[lat, lon]} icon={icons}>
                <Popup>
                  {res.address.town}
                </Popup>
              </Marker>
            </MapContainer>
        </>
      );
}