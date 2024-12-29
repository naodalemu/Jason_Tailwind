import CustomSelect from "./CustomSelect";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

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
            <div className="bg-dark-brown flex w-fit items-center justify-center pl-16 px-12 py-2.5 rounded-full cursor-pointer">
                <p className="text-white mr-2">
                    Naar verder naar Overzicht en betalen
                </p>
                <RiArrowDropRightLine className="text-white w-10 h-10" />
            </div>
        </Link>

      </div>
      <div className="w-2/5">
        <div className="sticky top-6">
          
        </div>
      </div>
    </section>
  );
}

export default Rizigers;
