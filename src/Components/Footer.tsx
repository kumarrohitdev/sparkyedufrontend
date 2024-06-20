import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="max-w-7xl pb-12 pt-10 bg-blue-200 mx-auto rounded-md p-4 mt-20  grid lg:gird-cols-3 md:grid-cols-3 gap-4 grid-cols-1 justify-center items-center">
      <div>
        <h1 className="p-4 w-full rounded-full bg-white text-2xl font-bold text-center h-20">
          Sparky Education
        </h1>
      </div>
      <div className="flex justify-center align-center flex-col  pl-8 ">
        <h1 className="text-2xl font-semibold pb-6">Quick links</h1> 
        <ul>
          <Link to="/terms">
            <li className="underline text-blue-800">Terms & Conditions</li>
          </Link>
          <Link to="/privacy-policy">
            <li className="underline text-blue-800">Privacy Policy</li>
          </Link>

          <Link to="/refund-policy">
            <li className="underline text-blue-800">
              Refund & Cancellation Policy
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="max-h-fit">
          <h1 className="text-xl font-bold ">Download App</h1>
          <img src="/App.svg" className="max-w-32" alt="playstore" />
        </div>
        <h1 className="text-2xl font-semibold text-black">Follow Us</h1>
        <div>
          <Instagram />
          <LinkedIn />
          <Twitter />
          <GitHub />
        </div>
      </div>
    </div>
  );
}
