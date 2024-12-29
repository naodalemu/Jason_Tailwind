import CustomSelect from "./CustomSelect";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import blackrock from "../assets/blackrock.png"
import { FaLocationDot } from "react-icons/fa6";
import StarRating from "./StarRating";
import { PiCalendar } from "react-icons/pi";
import { PiAirplaneThin } from "react-icons/pi";
import { PiBus } from "react-icons/pi";

function Rizigers({ setActiveStage }) {
  const options = [
    { code: "NL", name: "Netherlands" },
    { code: "DE", name: "Germany" },
    { code: "FR", name: "France" },
    { code: "US", name: "United States" },
  ];

  return (
    <section className="mb-40 flex gap-x-40">
      <div className="w-3/5">
        <h1 className="text-5xl text-dark-brown font-[700] pb-8">Reizigers</h1>
        <p className="text-xl text-dark-gray pb-10">
          Vul jouw persoonlijke gegevens in. Deze komen o.a. op je (vlieg)ticket
          te staan, kijk ze dus goed na. Een (typ)foutje in de naam of
          geboortedatum kan voor extra kosten zorgen.
        </p>
        <div className="pb-8">
          <h2 className="text-2xl font-[500] mb-8">
            Volwassene 1 <span className="text-light-brown">(Hoofdboeker)</span>
          </h2>

          <div className="mb-4 flex items-center space-x-4">
                <label className="flex items-center">
                    <input type="radio" name="gender1" value="De Heer" className="w-6 h-6" />
                    <span className="ml-2 text-lg">De Heer</span>
                </label>
                <label className="flex items-center">
                    <input type="radio" name="gender1" value="Mevrouw" className="w-6 h-6" />
                    <span className="ml-2 text-lg">Mevrouw</span>
                </label>
            </div>

          <div className="mb-4">
            <input
              type="text"
              className="mt-1 block w-full px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Voornaam"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="mt-1 block w-full px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Achternaam"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="mt-1 block w-full px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Geboortedatum"
            />
          </div>

          <CustomSelect options={options} />

        </div>
        <div className="pb-8">
          <h2 className="text-2xl font-[500] mb-8">Volwassene 2</h2>

          <div className="mb-4 flex items-center space-x-4">
              <label className="flex items-center">
                  <input type="radio" name="gender2" value="De Heer" className="w-6 h-6" />
                  <span className="ml-2 text-lg">De Heer</span>
              </label>
              <label className="flex items-center">
                  <input type="radio" name="gender2" value="Mevrouw" className="w-6 h-6" />
                  <span className="ml-2 text-lg">Mevrouw</span>
              </label>
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="mt-1 block w-full px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Voornaam"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="mt-1 block w-full px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Achternaam"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="mt-1 block w-full px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Geboortedatum"
            />
          </div>

          <CustomSelect options={options} />
        </div>
        
        <div className="pb-8">
          <h2 className="text-2xl font-[500] mb-8">Contactgegevens hoofdboeker</h2>

          <div className="mb-4">
            <input
              type="email"
              className="mt-1 block w-full px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="E-mailadres"
            />
          </div>

          <CustomSelect options={options} />

          <div className="mb-4">
            <input
              type="text"
              className="mt-1 blcok w-1/2 mr-5 px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Postcode"
            />
            <input
              type="text"
              className="mt-1 blcok w-36 mr-5 px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Huisnummer"
            />
            <input
              type="text"
              className="mt-1 blcok w-36 px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Toevoeging"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="mt-1 block w-full px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Straat"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="mt-1 block w-full px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Woonplaats"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="mt-1 block w-full px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Telefoonnummer"
            />
          </div>
        </div>

        <div className="pb-8">
          <h2 className="text-2xl font-[500] mb-8">Contactpersoon bij noodgevallen</h2>

          <div className="mb-4">
            <input
              type="text"
              className="mt-1 block w-full px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Naam"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="mt-1 block w-full px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Telefoonnummer"
            />
          </div>
        </div>

        <Link to="/overzicht" onClick={() => setActiveStage(2)}>
            <div className="bg-dark-brown flex w-fit items-center justify-center pl-16 px-12 py-5 rounded-full cursor-pointer">
                <p className="text-white mr-2 text-sm">
                    Naar verder naar Overzicht en betalen
                </p>
                <IoIosArrowForward className="text-white w-6 h-6" />
            </div>
        </Link>

      </div>
      <div className="w-2/5">
        <div className="sticky top-6">
          <div className="mb-5 rounded-3xl overflow-hidden">
            <div className="w-full h-44 bg-cover bg-center" style={{ backgroundImage: `url(${blackrock})` }} />
            <div className="p-5 bg-light-brown-10">
              <h3 className="text-2xl mb-1">Anjum Hotel Makkah</h3>
              <div className="flex items-center mb-3 text-lg"><FaLocationDot className="mr-1" /><span className="">Makkah</span> <span className="mx-2">|</span> <StarRating className="" count={5} /> <span className="ml-2">(348 reviews)</span></div>
              <div className="flex items-center text-lg"><PiCalendar className="mr-3" /> <span className="text-dark-text">wo 29 jan - di 09 feb 2025 <span className="text-light-brown">(11 dagen)</span></span></div>
              <div className="flex items-center text-lg"><PiAirplaneThin className="mr-3" /> <span className="text-dark-text">Vliegtickets</span> <span className="mx-2">+</span> <PiBus className="mr-3" /> <span className="text-dark-text">Transfer</span></div>
            </div>
          </div>
          <Link to="/overzicht" onClick={() => setActiveStage(2)}>
              <div className="mb-5 bg-dark-brown flex w-full items-center justify-center pl-16 px-12 py-5 rounded-full cursor-pointer">
                  <p className="text-white mr-2 text-sm">
                    Ga verder naar overzicht en betalen
                  </p>
                  <IoIosArrowForward className="text-white w-6 h-6" />
              </div>
          </Link>
          <Link to="/overzicht" onClick={() => setActiveStage(2)}>
              <div className="mb-5 border-2 border-dark-brown flex w-full items-center justify-center pl-16 px-12 py-5 rounded-full cursor-pointer">
                  <p className="text-dark-brown mr-2 text-sm">
                    Vraag een offerte aan
                  </p>
                  <IoIosArrowForward className="text-dark-brown w-6 h-6" />
              </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Rizigers;
