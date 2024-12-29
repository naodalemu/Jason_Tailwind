import { FaStar } from "react-icons/fa";

function StarRating({ count }) {
    return (
        <div className="flex">
            {Array(count).fill().map((_, index) => (
                <FaStar key={index} className="text-golden-star" />
            ))}
        </div>
    );
}

export default StarRating;
