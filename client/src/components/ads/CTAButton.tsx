import { Link } from "react-router-dom";
import Countdown from "../ui/Countdown";
import { nextAuctionEnd } from "../../lib/mockData";

export default function CTAButton() {
    return (
        <Link
            to="/next-edition"
            className="w-full h-min flex flex-col items-center justify-center gap-1 mb-3 py-3 no-underline decoration-transparent bg-fuchsia-700">
            <h2 className="text-2xl lg:text-3xl font-bold italic text-lime-400">
                You have <Countdown targetDate={nextAuctionEnd} /> left
            </h2>
            <h3 className="text-md lg:text-lg font-medium text-white blink">
                {"<< "}CLICK HERE TO SAVE A SPOT {" >>"}
            </h3>
        </Link>
    )
}
