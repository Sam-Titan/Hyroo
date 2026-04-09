import { motion } from "motion/react";

const clients = [
  { name: "Sales Intel", logo: "https://uniconhr.com/uploads/clients/f06fc306ff1719196e80cb1ee2559c8c.jpg" },
  { name: "Datahash", logo: "https://uniconhr.com/uploads/clients/03f576b1332e30006f6edfb5da4109f1.png" },
  { name: "Stryker", logo: "https://uniconhr.com/uploads/clients/b94e3f440a8174290d2bf2ff815b56e6.png" },
  { name: "Amazon", logo: "https://uniconhr.com/uploads/clients/39194eb905e00a8386ec5d3969eb6da3.svg" },
  { name: "Lets Transport", logo: "https://uniconhr.com/uploads/clients/75a173acacfdae7384dca0ff346ebb78.svg" },
  { name: "rStar Technologies", logo: "https://uniconhr.com/uploads/clients/0ecf3afca0cd6b63bc59d23f445ee364.png" },
  { name: "ixigo", logo: "https://uniconhr.com/uploads/clients/c8775d759759669b39f798648d969ea4.png" },
  { name: "OculusIT", logo: "https://uniconhr.com/uploads/clients/20d78de509214fd79deace23c81c8088.jpg" },
  { name: "Kloud9", logo: "https://uniconhr.com/uploads/clients/cb336f2511d036890f688032044aab9c.png" },
  { name: "Manhattan", logo: "https://uniconhr.com/uploads/clients/d6495df5e8ac8b141c69dfa26e590088.png" },
  { name: "Square Feet", logo: "https://uniconhr.com/uploads/clients/fc4b68b01893227e1fdac953ae2a36ef.jpeg" },
  { name: "TA Digital", logo: "https://uniconhr.com/uploads/clients/3493e808efedaeaabd56350322461d57.png" },
  { name: "trantor", logo: "https://uniconhr.com/uploads/clients/99bb0608306b87669ad928edc7ce177a.png" },
  { name: "Unicommerce", logo: "https://uniconhr.com/uploads/clients/82d2c0290dd114b8209022481b6c043a.png" },
  { name: "Azimuth", logo: "https://uniconhr.com/uploads/clients/db0e431cb110116d5b1fb582a3d77581.png" }
];

export default function LogoCarousel() {
  return (
    <div className="py-12 border-y border-slate-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
          Our Notable Clients
        </p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="mx-12 flex items-center justify-center w-32 h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
