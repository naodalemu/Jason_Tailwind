import React from "react";
import { PiArrowCircleRight } from "react-icons/pi";
import { Link } from "react-router-dom";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-10 sm:p-0"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-lg p-8 w-full sm:w-3/4 max-w-4xl max-h-[500px] overflow-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/5">
            <h1 className="text-2xl font-bold text-dark-brown mb-6">
              Controleer jou gegevens
            </h1>
            <p className="text-gray-600 mb-6">
              Voor deze aanbieding geldt dat wij een teis achteraf niet kunnen
              wijzigen. Controleer daarom zorgvuldig de namen en geboortedata.
              Namen worden soms verkeerd ingevoerd.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-dark-brown">
                  Jasper Hardeveld{" "}
                  <span className="text-light-brown">20 Maart 2003</span>
                </h2>
                <div className="mt-4 space-y-2">
                  <div className="flex">
                    <input
                      type="checkbox"
                      className="mr-3 text-light-brown border-gray-300 rounded focus:ring-light-brown"
                    />
                    <label className="text-gray-700">
                      <span>
                        Ja, ik heb alleen mijn{" "}
                        <b>
                          eerste voornaam volgens paspoort gebruikt en ook mijn
                          achternaam is correct geschreven
                        </b>
                      </span>
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      type="checkbox"
                      className="mr-3 text-light-brown border-gray-300 rounded focus:ring-light-brown"
                    />
                    <label className="text-gray-700">
                      <span>Ja, dit is de correcte geboortedatum</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-dark-brown">
                  Bas Kemp{" "}
                  <span className="text-light-brown">03 mei 1988</span>
                </h2>
                <div className="mt-4 space-y-2">
                  <div className="flex">
                    <input
                      type="checkbox"
                      className="mr-3 text-light-brown border-gray-300 rounded focus:ring-light-brown"
                    />
                    <label className="text-gray-700">
                      <span>
                        Ja, ik heb alleen mijn{" "}
                        <b>
                          eerste voornaam volgens paspoort gebruikt en ook mijn
                          achternaam is correct geschreven
                        </b>
                      </span>
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      type="checkbox"
                      className="mr-3 text-light-brown border-gray-300 rounded focus:ring-light-brown"
                    />
                    <label className="text-gray-700">
                      <span>Ja, dit is de correcte geboortedatum</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-start w-full md:w-2/5">
            <div className="bg-light-brown-20 p-10 rounded-3xl text-sm space-y-2 w-full">
              <ul className="list-none">
                <li className="mb-5">
                  ✔ Gebruik alleen je eerste voornaam zoals in je paspoort
                </li>
                <li className="mb-5">
                  ✔ Schrijf tussenvoegsels als 'van der' voluit
                </li>
                <li className="mb-5">
                  ✔ Getrouwde vrouwen: gebruik alleen je meisjesnaam
                </li>
              </ul>
              <img
                src="/images/passport-example.png" // Replace with your actual image please
                alt="ID Example"
                className="rounded-lg mt-4"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
        <Link to="/overzicht">
          <button
            className="w-full bg-dark-brown text-white py-3 rounded-xl text-center font-semibold flex items-center justify-center"
            onClick={onClose}
          >
            Ja, de gegevens kloppen <PiArrowCircleRight className="ml-2 text-xl" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
