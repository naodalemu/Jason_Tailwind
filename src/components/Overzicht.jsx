import blackrock from "../assets/blackrock.png"
import { FaLocationDot } from "react-icons/fa6";
import StarRating from "./StarRating";
import { PiCalendar } from "react-icons/pi";
import { PiAirplaneThin } from "react-icons/pi";
import { PiAirplaneLight } from "react-icons/pi";
import { PiBus } from "react-icons/pi";
import { PiPerson } from "react-icons/pi";
import { PiBed } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { PiHeartbeatLight } from "react-icons/pi";
import { PiPhoneCall } from "react-icons/pi";
import { LuMailOpen } from "react-icons/lu";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { PiShieldCheckLight } from "react-icons/pi";
import { PiArrowCircleRight } from "react-icons/pi";
import { Link } from "react-router-dom";

function Overzicht() {
  return (
    <section>
      <div className="max-w-[750px] m-auto">
        <div className="text-center flex flex-col items-center mb-4">
          <h1 className="text-5xl text-dark-brown font-[700] pb-8">
            Overzicht van je reis
          </h1>
          <p className="text-xl text-dark-gray pb-10 w-3/4">
            Hieronder vind je een samenvatting van je vakantie en aanvullende
            opties. Controleer je gegevens en kies een betaalmethode:
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-16 mb-20">
            <div className="h-44 w-72 bg-cover bg-center rounded-3xl" style={{ backgroundImage: `url(${blackrock})` }}></div>
            <div className="text-dark-brown">
              <h3 className="text-2xl mb-1">Anjum Hotel Makkah</h3>
              <div className="flex items-center mb-5 text-lg"><FaLocationDot className="mr-1" /><span className="">Makkah</span> <span className="mx-2">|</span> <StarRating className="" count={5} /> <span className="ml-2">(348 reviews)</span></div>
              <div className="flex items-center text-lg"><PiPerson className="mr-3" /> <span className="text-dark-text">3 personen</span></div>
              <div className="flex items-center text-lg"><PiCalendar className="mr-3" /> <span className="text-dark-text">wo 29 jan - di 09 feb 2025 <span className="text-light-brown">(11 dagen)</span></span></div>
              <div className="flex items-center text-lg"><PiAirplaneThin className="mr-3" /> <span className="text-dark-text">Vliegtickets</span> <span className="mx-2">+</span> <PiBus className="mr-3" /> <span className="text-dark-text">Transfer</span></div>
            </div>
        </div>
        <div className="text-dark-brown mb-20">
            <h3 className="text-2xl mb-5">Vluchten</h3>
            <p className="flex items-center font-bold text-xl mb-5"><PiAirplaneThin className="mr-3 text-3xl" />Heenvlucht</p>
            <div className="pl-10">
                <p className="text-xl mb-8">Woensdag 29 januari 2025</p>
                <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center mb-16 text-xl">
                    <div className="flex mb-10">
                        <div className="mr-10 flex flex-col justify-between"><p>13:15</p> <div className="relative flex justify-center"><PiAirplaneLight className="rotate-180 absolute top-10 -left-4 text-3xl" /><div className="border border-gray-300 h-24 w-0"></div></div> <p>23:05</p></div>
                        <div><p className="mb-3">Madinah</p> <p className="text-dark-text text-lg">Directe vlucht</p> <p className="text-dark-text text-lg">04:50 uur vliegen</p> <p className="text-dark-text text-lg">Egypt air</p> <p className="text-dark-text text-lg mb-3">Economy</p> <p>Makkah</p></div>
                    </div>
                    <div className="border hidden sm:block border-gray-300 h-0 w-1/4" />
                    <div className="flex">
                        <div className="mr-10 flex flex-col justify-between"><p>06:15</p> <div className="relative flex justify-center"><PiAirplaneLight className="absolute top-10 -left-4 text-3xl" /><div className="border border-gray-300 h-24 w-0"></div></div> <p>17:05</p></div>
                        <div><p className="mb-3">Makkah</p> <p className="text-dark-text text-lg">Directe vlucht</p> <p className="text-dark-text text-lg">04:50 uur vliegen</p> <p className="text-dark-text text-lg">Egypt air</p> <p className="text-dark-text text-lg mb-3">Economy</p> <p>Madinah</p></div>
                    </div>
                </div>
            </div>
            <p className="flex items-center font-bold text-xl mb-5"><PiBus className="mr-3 text-3xl" />Transfer</p>
            <div className="pl-10 flex flex-col sm:flex-row justify-between text-dark-text text-lg mb-16 sm:items-center">
                <div className="sm:w-1/3 w-full mb-4">Transfer-service van de luchthaven naar je verblijf en terug is inbegrepen</div>
                <div className="bg-light-brown-10 w-fit text-dark-brown px-6 py-3 rounded-full font-bold">Let op: je komt op dinsdag aan</div>
            </div>
            <div className="w-full border border-border-gray" />
        </div>

        <div className="text-dark-brown mb-12">
            <h3 className="text-2xl mb-5">Reizigers</h3>
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="mb-8">
                <p className="flex items-center font-bold text-xl mb-1"><PiBed className="mr-3 text-3xl" />Verblijf</p>
                <p className="text-sm mb-8 text-gray-500">2 persoonskamer Standaard Suite</p>
                <div className="pl-10 mb-8">
                  <p className="text-xl">Dhr. Bas Kemp</p>
                  <div className="font-bold flex justify-start sm:justify-between"><p className="mr-6">3 mei 1988</p><p>Nederlandse</p></div>
                  <p className="text-gray-500">✔ Kleine tas 40 x 25 x 20 cm</p>
                  <p className="text-gray-500">✖ Ruimbagage niet inbegrepen</p>
                </div>
                <div className="pl-10">
                  <p className="text-xl">Jasper Hardeveld</p>
                  <div className="font-bold flex justify-start sm:justify-between"><p className="mr-6">3 mei 1988</p><p>Nederlandse</p></div>
                  <p className="text-gray-500">✔ Kleine tas 40 x 25 x 20 cm</p>
                  <p className="text-gray-500">✖ Ruimbagage niet inbegrepen</p>
                </div>
              </div>
              <div className="">
                <div className="mb-8">
                  <p className="flex items-center font-bold text-xl mb-1"><GoPerson className="mr-3 text-3xl" />Contactgegevens</p>
                  <div className="pl-10">
                    <p className="text-gray-500">Dhr. Bas Kemp</p>
                    <p className="flex items-center"><PiPhoneCall className="mr-1" /><span className="text-gray-500">+316 - 123 45 678</span></p>
                    <p className="flex items-center"><LuMailOpen className="mr-1" /><span className="text-gray-500">voorbeeldmail@outlook.com</span></p>
                    <p className="text-gray-500">Plantsoenstraat 30</p>
                    <p className="text-gray-500">3911 JH Amsterdam</p>
                    <p className="text-gray-500">Nederland</p>
                  </div>
                </div>
                <div>
                  <p className="flex items-center font-bold text-xl mb-1"><PiHeartbeatLight className="mr-3 text-3xl" />Bij noodgevallen</p>
                  <div className="pl-10">
                    <p className="text-gray-500">Dhr. Bas Kemp</p>
                    <p className="text-gray-500">voorbeeldmail@outlook.com</p>
                    <p className="text-gray-500">+316 - 123 45 678</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mx-auto p-10 sm:py-24 sm:px-40 md:py-32 md:px-52 lg:py-36 lg:px-64 bg-light-brown-10 text-dark-brown rounded-3xl mb-12">
          <h3 className="text-2xl mb-2">Prijsoverzicht</h3>
          <div className="font-bold flex items-center justify-between mb-2"><span>2 × €629 per persoon</span><span>€1.258</span></div>
          <div className="flex items-center justify-between mb-2"><span className="flex items-center text-euro-text-green">SGR-garantiefonds (€10,00) <HiOutlineInformationCircle className="ml-1 cursor-pointer text-lg text-light-brown" /></span><span className="font-bold text-euro-text-green">INCLUSIEF</span></div>
          <div className="flex items-center justify-between mb-2"><span className="text-euro-text-green">Geen boekingskosten</span><span className="font-bold text-euro-text-green">€0</span></div>
          <div className="flex items-center justify-between mb-2"><span className="flex items-center text-euro-text-green">Handbagage <HiOutlineInformationCircle className="ml-1 cursor-pointer text-lg text-light-brown" /></span><span className="font-bold text-euro-text-green">INCLUSIEF</span></div>
          <div className="font-bold flex justify-between mb-2"><span>Korting</span><span className="py-2 px-3 rounded-xl border-border-gray border bg-euro-cyan text-euro-text-green">- €250</span></div>
          <div className="w-full border border-border-gray mb-6"/>
          <div className="font-bold flex justify-between mb-2"><span className="text-2xl mb-2">Totaal 2 personen</span><span className="text-2xl">1.008,00</span></div>
          <div className="mb-2"><span>* Bij deze lage prijs is geen aanbetaling mogelijk.</span></div>
        </div>

        <div className="w-3/4 mb-12 mx-auto">
          <h2 className="text-dark-brown text-3xl font-bold mb-5">Garantie en voorwaarden</h2>
          <p className="mb-5">✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="mb-5 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum, odio non porta molestie,</p>
          <div className="mb-5 flex items-center"><p>✔ Veilig boeken, wij zijn aangesloten bij:</p><img src="" alt="IATA" /><img src="" alt="Turkish Airlines" /></div>
          <p className="mb-5">✔ Ik heb de beschrijving van mijn reis gelezen en ik ben op de hoogte van het actuele reis advies</p>
        </div>

        <div className="mx-auto p-10 bg-dark-brown text-white rounded-3xl mb-16">
          <h2 className="text-2xl flex items-center mb-2"><PiShieldCheckLight className="mr-1 text-light-brown" />Veilig online betalen</h2>
          <p className="text-xl font-thin mb-5">Je verbinding beveiligd met 256-bits SSl encryptie</p>
          <h2 className="text-2xl flex items-center mb-2">Extra opties</h2>
          <div className="flex items-center">
            <input type="radio" name="extra" id="extra-all" className="mr-2" />
            <label htmlFor="extra-all">All-inclusive (+ 300,-)</label>
          </div>
          <div className="flex items-center mb-5">
            <input type="radio" name="extra" id="extra-kamer" className="mr-2" />
            <label htmlFor="extra-kamer">Extra Kamer (+ 700,-)</label>
          </div>
          <div className="px-10 py-6 bg-light-brown-10 rounded-2xl mb-8">Je betaalt: <span className="font-bold">1.008,00</span></div>
          <p className="text-gray-200 mb-5">Seleteer jouw betaalmethode</p>
          <div className="px-10 py-8 bg-light-brown-10 rounded-2xl mb-8">
            <div className="flex items-center mb-5">
              <input type="radio" name="Seleteer" id="ideal" className="mr-2" />
              <label htmlFor="ideal" className="flex items-center"><img className="" src="" alt="" />Ideal</label>
            </div>
            <div className="flex items-center mb-8">
              <input type="radio" name="Seleteer" id="aanbetaling" className="mr-2" />
              <label htmlFor="aanbetaling">25% aanbetaling <span className="text-xl">(252,-)</span></label>
            </div>
            <Link to="/overzicht">
                <button
                  className="w-full bg-white text-dark-brown py-3 rounded-full text-center font-semibold flex items-center justify-center"
                >
                  Boek en betaal <PiArrowCircleRight className="ml-2 text-xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overzicht;
