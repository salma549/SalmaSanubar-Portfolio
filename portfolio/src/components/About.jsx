// import React from "react";

// const About = () => {
//   return (
//     <div
//       name="about"
//       className="w-full h-auto bg-gradient-to-b from-gray-800 via-black to-black text-white py-16"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             About
//           </p>
//         </div>
//         <p className="text-xl mt-10 font-bold">
//           🚀 Passionate Software Engineer | MERN Stack Developer
//         </p>

//         <br />

//         <p className="text-xl">
//           I'm Salma Sanubar, a Computer Science graduate from Trinity College of Engineering and Technology. I have a deep passion for technology and a strong desire to contribute to the ever-evolving field of computer science 💻.
//         </p>
        
//         <br />
        
//         <p className="text-xl">
//           I excel in communication and continuously upskill myself in programming languages and leadership. I aspire to become a technical expert and build my career in Technology Development 🌐.
//         </p>
        
//         <br />
        
//         <p className="text-xl">
//           My goal is to secure a challenging role where I can leverage my education, skills, strong work ethic, and eagerness to embrace new challenges, driving both organizational success and personal growth. I am dedicated to continuously learning and improving my skills in order to stay up-to-date with the latest industry trends and development 🚀.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

// import React from "react";

// const About = () => {
//   return (
//     <div
//       name="about"
//       className="w-full h-auto bg-[#00092C] text-white py-16"
//     >
//       <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
//       <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             About
//           </p>
//         </div>
//         <p className="text-2xl mt-10 font-semibold italic">
//           🚀 Passionate Software Engineer | MERN Stack Developer
//         </p>

//         <br />

//         <p className="text-lg mt-6 leading-relaxed">
//         I am a Full Stack Developer with a strong track record of developing and maintaining robust, scalable applications. Proficient in modern technologies like React, Node.js, Express.js, and MongoDB, I specialize in crafting intuitive front-end interfaces and efficient back-end systems 💻.
//         </p>
        
//         <br />
        
//         <p className="text-lg mt-6 leading-relaxed">
//         🚀 <span className="font-bold">Scalability & Optimization:  </span>
//         With a deep focus on optimizing applications for both scalability and performance, I prioritize delivering seamless user experiences across platforms 🌐.
//         </p>
        
//         <br />
        
//         <p className="text-lg mt-6 leading-relaxed">
//         🌐 <span className="font-bold">API & Integration Expertise:  </span>
//         Extensive experience in designing and implementing RESTful APIs that ensure efficient communication between front-end and back-end, while fostering smooth integration 🚀.
//         </p>

//         <br/>

//         <p className="text-lg mt-6 leading-relaxed">

//         💡<span className="font-bold"> Database & Data Modeling:  </span>
//         Skilled in database design, data modeling, and optimization, I ensure efficient data storage and retrieval, empowering data-driven decision-making.
//         </p>

//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import "../index.css"; // Ensure you import the CSS file

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-[#00092C] text-white py-16"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        {/* Title with Pulsating Glow */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-[#229799] ">
            About
          </p>
        </div>

        <p className="text-2xl mt-4 font-semibold italic mb-5  ">
           🚀 Passionate Software Engineer | MERN Stack Developer
        </p>

        {/* About Container with Cards */}
        <div className="about-container hover:cursor-pointer  ">
          {/* Card for Description */}
          <div className="card ">
            <p className="text-lg leading-relaxed ">
              I am a Full Stack Developer with a strong track record of developing and maintaining robust, scalable applications. Proficient in modern technologies like React, Node.js, Express.js, and MongoDB, I specialize in crafting intuitive front-end interfaces and efficient back-end systems 💻.
            </p>
          </div>

          {/* Card for Scalability */}
          <div className="card ">
            <p className="text-lg leading-relaxed">
              🚀 <span className="font-bold text-[#229799]">Scalability & Optimization:</span> With a deep focus on optimizing applications for both scalability and performance, I prioritize delivering seamless user experiences across platforms 🌐.
            </p>
          </div>

          {/* Card for API Expertise */}
          <div className="card ">
            <p className="text-lg leading-relaxed">
              🌐 <span className="font-bold text-[#229799]">API & Integration Expertise:</span> Extensive experience in designing and implementing RESTful APIs that ensure efficient communication between front-end and back-end, while fostering smooth integration 🚀.
            </p>
          </div>

          {/* Card for Database Modeling */}
          <div className="card ">
            <p className="text-lg leading-relaxed">
              💡 <span className="font-bold text-[#229799]">Database & Data Modeling:</span> Skilled in database design, data modeling, and optimization, I ensure efficient data storage and retrieval, empowering data-driven decision-making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
