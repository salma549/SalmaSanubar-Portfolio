


import React from "react";
import BackgroundImage from "../assets/images/binary.jpg"; // Import the background image

const Contact = () => {
  return (
    <div
      name="contact"
      className="relative w-full h-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
    

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-black to-black opacity-80"></div>

      {/* Custom Decorative Shape */}
      <div className="absolute top-1/4 left-0 w-20 h-20 bg-gradient-to-r from-[#229799] to-[#27c4a7] rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-gradient-to-r from-[#229799] to-[#27c4a7] rounded-full opacity-30 animate-pulse"></div>

      <div className="relative z-10 flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-[#229799] text-[#229799]">
            Contact
          </p>
          <p className="text-xl mt-4 italic mb-5 text-gray-300">
            Submit the form below to get in touch with me.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/raeqdyla"
            method="POST"
            className="flex flex-col w-full md:w-3/4 lg:w-1/2 bg-black bg-opacity-30 rounded-xl p-6 shadow-2xl shadow-gray-900 backdrop-blur-md border border-gray-600"
          >
            {/* Name Field */}
            <div className="relative my-4">
              <input
                type="text"
                name="name"
                // placeholder="Enter your name"
                className="w-full p-3 bg-transparent border-2 border-[#229799] rounded-lg text-white focus:outline-none peer focus:border-[#27c4a7] transition-transform duration-300 hover:scale-105"
              />
              <label className="absolute left-3 -top-2 text-sm text-[#229799] bg-black px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400">
              Full Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative my-4">
              <input
                type="email"
                name="email"
                // placeholder="Enter your email"
                className="w-full p-3 bg-transparent border-2 border-[#229799] rounded-lg text-white focus:outline-none peer focus:border-[#27c4a7] transition-transform duration-300 hover:scale-105"
              />
              <label className="absolute left-3 -top-2 text-sm text-[#229799] bg-black px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400">
                Email
              </label>
            </div>

            {/* Message Field */}
            <div className="relative my-4">
              <textarea
                name="message"
                // placeholder="Enter your message"
                rows="6"
                className="w-full p-3 bg-transparent border-2 border-[#229799] rounded-lg text-white focus:outline-none peer focus:border-[#27c4a7] transition-transform duration-300 hover:scale-105"
              ></textarea>
              <label className="absolute left-3 -top-2 text-sm text-[#229799] bg-black px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400">
                Message
              </label>
            </div>

            {/* Submit Button */}
            <button className="relative text-white bg-[#229799] px-6 py-3 mx-auto rounded-full hover:scale-110 hover:shadow-lg transform duration-300 hover:bg-gradient-to-l ">
              <span className="absolute inset-0 transform transition duration-300 scale-95 bg-white opacity-20 blur rounded-full"></span>
              Let's Connect
            </button>
          </form>
        </div>
      </div>

      {/* Diagonal Section Split Bottom */}
     
    </div>
  );
};

export default Contact;


// above is also ok



// import React from "react";
// import BackgroundImage from "../assets/images/binary.jpg"; // Import the background image

// const Contact = () => {
//   return (
//     <div
//       name="contact"
//       className="relative w-full h-auto bg-cover bg-center bg-no-repeat p-8 text-white"
//       style={{ backgroundImage: `url(${BackgroundImage})` }}
//     >
//       {/* Curved Section Divider */}
//       <svg
//         className="absolute top-0 w-full"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 1440 320"
//       >
//         <path
//           fill="#000000"
//           fillOpacity="1"
//           d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,128C672,107,768,117,864,138.7C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
//         ></path>
//       </svg>

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-black to-black opacity-80"></div>

//       {/* Glassmorphism Card for Form */}
//       <div className="relative z-10 max-w-screen-lg mx-auto flex justify-center items-center h-full">
//         <div className="w-full md:w-3/4 lg:w-3/2 p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-md border border-gray-400 shadow-lg">
//           <div className="text-center pb-8">
//             <p className="text-4xl font-bold text-[#229799]">Get in Touch</p>
//             <p className="text-xl text-gray-300 mt-2">I would love to hear from you!</p>
//           </div>

//           {/* Contact Form */}
//           <form
//             action="https://getform.io/f/raeqdyla"
//             method="POST"
//             className="flex flex-col space-y-6"
//           >
//             {/* Name Input */}
//             <div className="relative">
//               <input
//                 type="text"
//                 name="name"
//                 className="w-full p-4 bg-transparent border-2 border-gray-300 rounded-lg text-white focus:outline-none focus:border-[#229799] focus:shadow-glow transition-all duration-300"
//                 placeholder=" "
//               />
//               <label className="absolute left-4 top-3 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-lg">
//                 Name
//               </label>
//             </div>

//             {/* Email Input */}
//             <div className="relative">
//               <input
//                 type="email"
//                 name="email"
//                 className="w-full p-4 bg-transparent border-2 border-gray-300 rounded-lg text-white focus:outline-none focus:border-[#229799] focus:shadow-glow transition-all duration-300"
//                 placeholder=" "
//               />
//               <label className="absolute left-4 top-3 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-lg">
//                 Email
//               </label>
//             </div>

//             {/* Message Textarea */}
//             <div className="relative">
//               <textarea
//                 name="message"
//                 rows="6"
//                 className="w-full p-4 bg-transparent border-2 border-gray-300 rounded-lg text-white focus:outline-none focus:border-[#229799] focus:shadow-glow transition-all duration-300"
//                 placeholder=" "
//               ></textarea>
//               <label className="absolute left-4 top-3 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-lg">
//                 Message
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button className="w-full py-3 mt-4 bg-[#229799] rounded-lg text-white font-semibold hover:bg-[#27c4a7] hover:shadow-lg transform hover:scale-105 transition-all duration-300">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Curved Bottom Divider */}
//       <svg
//         className="absolute bottom-0 w-full"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 1440 320"
//       >
//         <path
//           fill="#000000"
//           fillOpacity="1"
//           d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,186.7C672,192,768,160,864,144C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//         ></path>
//       </svg>
//     </div>
//   );
// };

// export default Contact;