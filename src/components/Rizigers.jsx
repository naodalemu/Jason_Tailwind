import CustomSelect from "./CustomSelect";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import blackrock from "../assets/blackrock.png"
import { FaLocationDot } from "react-icons/fa6";
import StarRating from "./StarRating";
import { PiCalendar } from "react-icons/pi";
import { PiAirplaneThin } from "react-icons/pi";
import { PiBus } from "react-icons/pi";
import { HiOutlineInformationCircle } from "react-icons/hi";

function Rizigers({ setActiveStage }) {
  const options = [
    { code: "NL", name: "Netherlands" },
    { code: "DE", name: "Germany" },
    { code: "FR", name: "France" },
    { code: "US", name: "United States" },
  ];

  return (
    <section className="mb-10 sm:mb-40 flex flex-col lg:flex-row gap-x-10 lg:gap-x-20 xl:gap-x-36">
      <div className="w-full lg:w-3/5 mb-10">
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
              className="my-2 blcok w-full sm:w-1/2 mr-4 px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Postcode"
            />
            <input
              type="text"
              className="my-2 blcok w-full sm:w-28 md:w-36 lg:w-32 xl:w-40 mr-4 px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
              placeholder="Huisnummer"
            />
            <input
              type="text"
              className="my-2 blcok w-full sm:w-28 md:w-36 lg:w-32 xl:w-40 px-5 py-4 bg-light-gray border-border-gray border rounded-xl focus:outline-none text-lg placeholder-gray-700"
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
      <div className="w-full lg:w-2/5">
        <div className="sticky top-6">
          <div className="mb-5 rounded-3xl overflow-hidden">
            <div className="w-full h-44 md:h-96 lg:h-44 bg-cover bg-center" style={{ backgroundImage: `url(${blackrock})` }} />
            <div className="py-5 px-6 bg-light-brown-10 text-dark-brown">
              <h3 className="text-2xl mb-1">Anjum Hotel Makkah</h3>
              <div className="flex items-center mb-3 text-lg"><FaLocationDot className="mr-1" /><span className="">Makkah</span> <span className="mx-2">|</span> <StarRating className="" count={5} /> <span className="ml-2">(348 reviews)</span></div>
              <div className="flex items-center text-lg"><PiCalendar className="mr-3" /> <span className="text-dark-text">wo 29 jan - di 09 feb 2025 <span className="text-light-brown">(11 dagen)</span></span></div>
              <div className="flex items-center text-lg mb-5"><PiAirplaneThin className="mr-3" /> <span className="text-dark-text">Vliegtickets</span> <span className="mx-2">+</span> <PiBus className="mr-3" /> <span className="text-dark-text">Transfer</span></div>
              <Link to="/" onClick={() => setActiveStage(2)}>
                  <div className="mb-5 border-2 border-dark-brown flex w-full items-center justify-center pl-16 px-12 py-4 rounded-full cursor-pointer">
                      <p className="text-dark-brown mr-2 font-bold">
                        Toon reisdetails
                      </p>
                  </div>
              </Link>
              <h3 className="text-2xl mb-2">Prijsoverzicht</h3>
              <div className="font-bold flex items-center justify-between mb-2"><span>2 × €629 per persoon</span><span>€1.258</span></div>
              <div className="flex items-center justify-between mb-2"><span className="flex items-center">SGR-garantiefonds (€10,00) <HiOutlineInformationCircle className="ml-1 cursor-pointer text-lg text-light-brown" /></span><span className="font-bold">INCLUSIEF</span></div>
              <div className="flex items-center justify-between mb-2"><span>Geen boekingskosten</span><span className="font-bold">€0</span></div>
              <div className="flex items-center justify-between mb-2"><span className="flex items-center">Handbagage <HiOutlineInformationCircle className="ml-1 cursor-pointer text-lg text-light-brown" /></span><span className="font-bold">INCLUSIEF</span></div>
              <div className="font-bold flex justify-between mb-2"><span>Korting</span><span className="py-2 px-3 rounded-xl border-border-gray border bg-euro-cyan text-euro-text-green">- €250</span></div>
              <div className="w-full border border-border-gray mb-6"/>
              <div className="font-bold flex justify-between mb-2"><span className="text-2xl mb-2">Totaal 2 personen</span><span className="text-2xl">1.008,00</span></div>
              <div className="mb-2"><span>* Bij deze lage prijs is geen aanbetaling mogelijk.</span></div>
            </div>
          </div>
          <Link to="/overzicht" onClick={() => setActiveStage(2)}>
              <div className="mb-5 border-2 bg-dark-brown border-dark-brown flex w-full items-center justify-center pl-16 px-12 py-5 rounded-full cursor-pointer">
                  <p className="text-white mr-2">
                    Ga verder naar overzicht en betalen
                  </p>
                  <IoIosArrowForward className="text-white w-6 h-6" />
              </div>
          </Link>
          <Link to="/" onClick={() => setActiveStage(2)}>
              <div className="mb-5 border-2 border-dark-brown flex w-full items-center justify-center pl-16 px-12 py-5 rounded-full cursor-pointer">
                  <p className="text-dark-brown mr-2">
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
