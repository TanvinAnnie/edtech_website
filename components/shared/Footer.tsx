import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white py-20">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">
          Pro Edu
        </h2>

        <p className="text-gray-400 leading-7">
          Office 41, Zawaya Building, Ghala Muscat,
          <br />
          Sultanate of Oman
        </p>

        <div className="flex justify-center gap-3 mt-4 text-sm text-gray-400">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of use</a>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <FaFacebookF />
          </div>

          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <FaTwitter />
          </div>

          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <FaLinkedinIn />
          </div>

          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <FaTiktok />
          </div>
        </div>
      </div>
    </footer>
  );
}