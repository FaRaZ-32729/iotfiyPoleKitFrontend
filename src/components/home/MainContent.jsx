// import React from "react";

// const MainContent = () => {
//     return (
//         <main className="flex-1 order-1 md:order-2 relative">
//             {/* Desktop map */}
//             <div className="hidden md:block w-full h-full">
//                 <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462597.7484483934!2d66.95248552026607!3d25.066466938861613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi!5e0!3m2!1sen!2s!4v1764771339798!5m2!1sen!2s"
//                     className="w-full h-full"
//                 ></iframe>
//             </div>

//             {/* Mobile map */}
//             <div className="md:hidden w-full h-[330px] relative mb-15">
//                 <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462597.7484483934!2d66.95248552026607!3d25.066466938861613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi!5e0!3m2!1sen!2s!4v1764771339798!5m2!1sen!2s"
//                     className="w-full h-full rounded-b-3xl"
//                 ></iframe>
//             </div>
//         </main>
//     );
// };

// export default MainContent;


import React from "react";
import { useDevices } from "../../contextApi/DeviceContext";
import DeviceMapView from "./DeviceMapView";

const MainContent = () => {
    const { devicesByV } = useDevices();

    return (
        <main className="flex-1 order-1 md:order-2 relative">
            {/* Desktop Map */}
            <div className="hidden md:block w-full h-full">
                <DeviceMapView devices={devicesByV} />
            </div>

            {/* Mobile Map */}
            <div className="md:hidden w-full h-[calc(100vh-64px)]">
                <DeviceMapView devices={devicesByV} />
            </div>
        </main>
    );
};

export default MainContent;
