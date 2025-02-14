import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-6 ">
      <div className="flex md:justify-between justify-center flex-wrap items-center mb-10 border-b border-gray-400">
        <div className="max-w-6xl m-4 text-center">
          <h1 className="text-2xl font-bold">accredian</h1>
          <p className="text-gray-400 text-xs">Credentials that matter</p>
        </div>
        <div className="text-center m-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Schedule 1-on-1 Call Now
          </button>
          <p className="text-gray-400 mt-2">Speak with our Learning Advisor</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-lg font-semibold mb-4">Programs</h2>
          <ul className="mb-8">
            {[
              "Data Science & AI",
              "Product Management",
              "Business Analytics",
              "Digital Transformation",
              "Business Management",
              "Project Management",
              "Strategy & Leadership",
              "Senior Management",
              "Fintech",
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between cursor-pointer hover:underline"
              >
                {item} <span>+</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p>Email us (For Data Science Queries): admissions@accredian.com</p>
          <p>Email us (For Product Management Queries): pmp@accredian.com</p>
          <p>Data Science Admission Helpline: +91 9079633929 (9 AM - 7 PM)</p>
          <p>Product Management Admission Helpline: +91 9625811095</p>
          <p>Enrolled Student Helpline: +91 7596932507</p>
          <p>
            Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
            Gurugram, Haryana 122015
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Accredian</h2>
          <ul className="space-y-2">
            {[
              "About",
              "Career",
              "Blog",
              "Admission Policy",
              "Privacy Policy",
              "Referral Policy",
              "Terms of Service",
              "Master FAQs",
            ].map((item, index) => (
              <li key={index} className="cursor-pointer hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <h2 className="text-lg font-semibold mt-6">Follow Us</h2>
        <div className="flex justify-center space-x-4 mt-2">
          <FaFacebookF className="cursor-pointer hover:text-gray-400" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
          <FaTwitter className="cursor-pointer hover:text-gray-400" />
          <FaInstagram className="cursor-pointer hover:text-gray-400" />
          <FaYoutube className="cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
