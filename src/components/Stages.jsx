import { Link } from "react-router-dom";

function Stages({ activeStage, setActiveStage }) {
    return (
        <div className="flex flex-col items-center my-10">
            <h1 className="text-2xl mb-10">Boek je Umrah reis</h1>
            <div className="flex">
                <Link to="/" onClick={() => setActiveStage(1)}>
                    <div className={"flex flex-col items-center text-wrap w-24"}>
                        <p
                            className={`w-10 h-10 rounded-full flex justify-center items-center mb-5 font-bold ${
                                activeStage === 1
                                    ? "bg-dark-brown text-white"
                                    : "bg-light-brown-10 text-dark-brown"
                            }`}
                        >
                            1
                        </p>
                        <p
                            className={`text-center ${
                                activeStage === 1
                                    ? "text-dark-brown font-semibold"
                                    : "text-dark-brown"
                            }`}
                        >
                            Reizigers
                        </p>
                    </div>
                </Link>
                <div className="px-16 mx-10 h-0 bg-light-brown border rounded-sm mt-5"></div>
                <Link to="/overzicht" onClick={() => setActiveStage(2)}>
                    <div className={"flex flex-col items-center text-wrap w-24"}>
                        <p
                            className={`w-10 h-10 rounded-full flex justify-center items-center mb-5 font-bold ${
                                activeStage === 2
                                    ? "bg-dark-brown text-white"
                                    : "bg-light-brown-10 text-dark-brown"
                            }`}
                        >
                            2
                        </p>
                        <p
                            className={`text-center ${
                                activeStage === 2
                                    ? "text-dark-brown font-semibold"
                                    : "text-dark-brown"
                            }`}
                        >
                            Overzicht <br />en betalen
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Stages;
