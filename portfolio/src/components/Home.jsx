// import React from "react";
// import HeroImage from "../assets/heroImage.jpg";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

// const Home = () => {
//   return (
//     <div
//       name="home"
//       className="h-screen w-full bg-gradient-to-b from-gray-800 via-black to-black"
//     >
//       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//         <div className="flex flex-col justify-center h-full md:w-1/2">
//           <h2 className=" mt-10 text-3xl sm:text-6xl font-bold text-white">
//             I'm a Full Stack Developer
//           </h2>
//           <p className="text-white text-lg py-6 max-w-md">
//             As a skilled MERN stack developer, I build dynamic web applications with MongoDB, Express.js, React, and Node.js, enhancing user experiences and driving business growth.
//           </p>
//           <div>
//             <Link
//               to="portfolio"
//               smooth
//               duration={500}
//               className="group text-white font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//             >
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300">
//                 <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
//               </span>
//             </Link>
//           </div>
//         </div>
//         <div className="flex justify-center items-center md:w-1/2">
//           <img
//             src={HeroImage}
//             alt="my profile"
//             className="rounded-full w-64 h-64 md:w-[300px] md:h-[350px] object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from "react";
// import HeroImage from "../assets/images/heroImage.jpg";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
// // import BackgroundImage from "../assets/images/bg.jpg"; // Import the background image

// const Home = () => {
//   return (
//     <div
//       name="home"
//       className="relative h-screen w-full"
//     >
//       <div
//         className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat blur-lg"
//       // Add the background image with blur
//       ></div>
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-800 via-black to-black opacity-75"></div> {/* Add an overlay */}
//       <div className="relative z-10 max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//         <div className="flex flex-col justify-center h-full md:w-1/2">
//           <h2 className="mt-10 text-3xl sm:text-6xl font-bold text-white">
//             I'm a Full Stack Developer
//           </h2>
//           <p className="text-white text-lg py-6 max-w-md">
//             As a skilled MERN stack developer, I build dynamic web applications with MongoDB, Express.js, React, and Node.js, enhancing user experiences and driving business growth.
//           </p>
//           <div>
//             <Link
//               to="portfolio"
//               smooth
//               duration={500}
//               className="group text-white font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//             >
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300">
//                 <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
//               </span>
//             </Link>
//           </div>
//         </div>
//         <div className="flex justify-center items-center md:w-1/2">
//           <img
//             src={HeroImage}
//             alt="my profile"
//             className="rounded-full w-64 h-64 md:w-[300px] md:h-[350px] object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import HeroImage from "../assets/images/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

import React, { useState, useEffect } from "react";
import "../index.css"

const phrases = ["I'm Salma Sanubar", " Full Stack Developer"];



const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Speed of typing in ms
  const deletingSpeed = 50; // Speed of deleting in ms
  const pauseDuration = 3000; // Duration to pause before starting to delete

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const timeoutId = setTimeout(() => {
      if (isDeleting) {
        // If deleting, remove characters
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText === "") {
          // Move to the next phrase after deleting
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        // If typing, add characters
        setDisplayText((prev) => currentPhrase.slice(0, prev.length + 1));
        if (displayText === currentPhrase) {
          // Start deleting after typing the full phrase
          setIsDeleting(true);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <div name="home" className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat blur-lg"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#00092C] opacity-75"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full md:w-1/2 text-center md:text-left">
          <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#229799]">
            {displayText}
            <span className="typing">|</span>
          </h2>
          <p className="text-white text-base py-4 max-w-md mx-auto md:mx-0 sm:text-sm lg:text-lg">
            As a skilled MERN stack developer, I build dynamic web applications with MongoDB, Express.js, React, and Node.js, enhancing user experiences and driving business growth.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#229799] cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="flex justify-center items-center md:w-1/2  md:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover animate-zoomInOut shadow-glow"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
