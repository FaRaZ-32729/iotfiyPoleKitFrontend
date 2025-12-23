import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker issue (same as MapPicker)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const DeviceMapView = ({ devices }) => {
    // Default center (Karachi)
    const defaultCenter = [24.8607, 67.0011];

    // If devices exist, center map on first device
    const center =
        devices.length > 0
            ? [devices[0].latitude, devices[0].longitude]
            : defaultCenter;

    return (
        <MapContainer
            center={center}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution="© OpenStreetMap © CartoDB"
            />

            {devices.map((device) => {
                if (
                    device.latitude == null ||
                    device.longitude == null
                ) {
                    return null;
                }

                return (
                    <Marker
                        key={device._id}
                        position={[device.latitude, device.longitude]}
                    >
                        <Popup>
                            <div className="text-sm">
                                <p className="font-semibold">
                                    {device.deviceId}
                                </p>
                                <p className="text-gray-500">
                                    Venue: {device.venue?.name || "N/A"}
                                </p>
                            </div>
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
};

export default DeviceMapView;
