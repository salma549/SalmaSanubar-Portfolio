

import React, { useState } from "react";

import GitHubSearchEngine from "../assets/portfolio/search.png";
import Todo from "../assets/portfolio/Todo.png";
import Weather from "../assets/portfolio/weather-react1.png";
import Voting from "../assets/portfolio/Voting.png";
import InterviewPreparationApplication from "../assets/portfolio/interview.png";
import Ecommerce from "../assets/portfolio/ecommerce.png";
import EcommerceStyling from "../assets/portfolio/Styling.png";
import netflixMovies from "../assets/portfolio/netflixMovies.png";
import Game from "../assets/portfolio/Game.png";

const Projects = () => {
  const majorProjects = [
    {
      id: 1,
      src: InterviewPreparationApplication,
      demoLink: "https://github.com/salma549/Salma_githubSearchEngine",
      codeLink: "https://github.com/salma549/Salma-InterviewPrepApp",
      description: "Interview Preparation Application.",
    },
    {
      id: 2,
      src: Ecommerce,
      demoLink: "https://github.com/salma549/Salma_githubSearchEngine",
      codeLink: "https://github.com/salma549/Salma-Capstone-Project",
      description: "A responsive e-commerce interface featuring a sleek header, search bar, and intuitive navigation for a seamless shopping journey.",
    },
    {
      id: 3,
      src: EcommerceStyling,
      demoLink: "https://github.com/salma549/Salma_githubSearchEngine",
      codeLink: "https://github.com/salma549/Salma-StylingEcommerce-Capstone",
      description: "A platform that suggests curated outfit accessories like earrings, shoes, and ties based on user preferences, enhancing shopping experiences.",
    },
  ];

  const otherProjects = [
    {
      id: 4,
      src: GitHubSearchEngine,
      demoLink: "https://github.com/salma549/Salma_githubSearchEngine",
      codeLink: "https://github.com/salma549/Salma_githubSearchEngine",
      description: "A GitHub search engine to find repositories and users easily.",
    },
    {
      id: 5,
      src: Weather,
      demoLink: "https://weather-demo.com",
      codeLink: "https://github.com/salma549/weatherApp-react",
      description: "A weather app that provides current forecasts based on location.",
    },
    {
      id: 6,
      src: Voting,
      demoLink: "https://salma549.github.io/votingsPoll/",
      codeLink: "https://github.com/salma549/votingsPoll",
      description: "A voting poll app where users can cast votes on various topics.",
    },
    {
      id: 7,
      src: Todo,
      demoLink: "https://netflix-demo.com",
      codeLink: "https://github.com/salma549/todo-list",
      description: "A sleek and intuitive application to manage tasks efficiently.",
    },
    {
      id: 8,
      src: netflixMovies,
      demoLink: "https://netflixmovies-demo.com",
      codeLink: "https://github.com/salma549/netflixMovies",
      description: "Netflix Movies UI clone showcasing trending movies.",
    },
    {
      id: 9,
      src: Game,
      demoLink: "https://game-demo.com",
      codeLink: "https://github.com/salma549/numberGuessGame",
      description: "A fun number guessing game built with JavaScript and DOM.",
    },
  ];

  const [activeTab, setActiveTab] = useState("major");

  const renderProjects = (projects) =>
    projects.map(({ id, src, demoLink, codeLink, description }) => (
      <div
        key={id}
        className="relative bg-gradient-to-b from-[#001f3f] to-[#112B4E] rounded-tl-3xl rounded-br-3xl shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer hover:shadow-2xl duration-300 group"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-tl-3xl rounded-br-3xl h-56 flex items-center justify-center">
          <img
            src={src}
            alt="Project"
            className="h-full w-auto transition-transform duration-300 hover:scale-110 rounded-tl-3xl rounded-br-3xl"
          />
          {/* Hidden Description */}
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-3xl rounded-br-3xl">
            <p className="text-sm px-4 text-center">{description}</p>
          </div>
        </div>
        <div className="p-6 text-center">
          <div className="flex justify-center space-x-4">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#229799] text-white rounded-full shadow hover:shadow-lg transition-all duration-300 hover:bg-[#18a58f]"
            >
              Demo
            </a>
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#229799] text-white rounded-full shadow hover:shadow-lg transition-all duration-300 hover:bg-[#18a58f]"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    ));

  return (
    <div
      name="projects"
      className="bg-[#00092C] w-full text-white py-16 px-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-[#229799]">
            Projects
          </p>
          <p className="py-6 text-2xl mt-4 font-semibold italic mb-5">
            💻 Check out some of my work right here
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab("major")}
              
              className={`px-6 py-2 rounded-full ${
                activeTab === "major"
                  ? "bg-[#229799] text-white"
                  : "bg-gray-500 text-black"
              }`}
            >
              Major Projects
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 rounded-full ${
                activeTab === "all"
                  ? "bg-[#229799] text-white"
                  : "bg-gray-500 text-black"
              }`}
            >
              Other Projects
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 sm:px-0">
          {activeTab === "major"
            ? renderProjects(majorProjects)
            : renderProjects(otherProjects)}
        </div>
      </div>
    </div>
  );
};

export default Projects;





// import React from "react";

// import GitHubSearchEngine from "../assets/portfolio/search.png";
// import netflixMovies from "../assets/portfolio/netflixMovies.png";
// import Todo from "../assets/portfolio/Todo.png";
// import Weather from "../assets/portfolio/weather-react1.png";
// import Game from "../assets/portfolio/Game.png";
// import Voting from "../assets/portfolio/Voting.png";
// import InterviewPreparationApplication from "../assets/portfolio/interview.png"
// import Ecommerce from "../assets/portfolio/ecommerce.png"
// import EcommerceStyling from "../assets/portfolio/Styling.png"

// const Projects = () => {
//   const projects = [


//     {
//       id: 1,
//       src: InterviewPreparationApplication,
//       demoLink: "https://github.com/salma549/Salma_githubSearchEngine",
//       codeLink: "https://github.com/salma549/Salma-InterviewPrepApp",
//       description: "Iterview Preparation Application.",
//     },
//     {
//       id: 2,
//       src: Ecommerce,
//       demoLink: "https://github.com/salma549/Salma_githubSearchEngine",
//       codeLink: "https://github.com/salma549/Salma-Capstone-Project",
//       description: "A responsive e-commerce interface featuring a sleek header, search bar, and intuitive navigation for a seamless shopping journey.",
//     },
//     {
//       id: 3,
//       src: EcommerceStyling,
//       demoLink: "https://github.com/salma549/Salma_githubSearchEngine",
//       codeLink: "https://github.com/salma549/Salma-StylingEcommerce-Capstone",
//       description: "A platform that suggests curated outfit accessories like earrings, shoes, and ties based on user preferences, enhancing shopping experiences.",
//     },
//     {
//       id: 4,
//       src: GitHubSearchEngine,
//       demoLink: "https://github.com/salma549/Salma_githubSearchEngine",
//       codeLink: "https://github.com/salma549/Salma_githubSearchEngine",
//       description: "A GitHub search engine to find repositories and users easily.",
//     },
//     {
//       id: 5,
//       src: Weather,
//       demoLink: "https://weather-demo.com",
//       codeLink: "https://github.com/salma549/weatherApp-react",
//       description: "A weather app that provides current forecasts based on location.",
//     },
//     {
//       id: 6,
//       src: Voting,
//       demoLink: "https://salma549.github.io/votingsPoll/",
//       codeLink: "https://github.com/salma549/votingsPoll",
//       description: "A voting poll app where users can cast votes on various topics.",
//     },
//     {
//       id: 7,
//       src: Todo,
//       demoLink: "https://netflix-demo.com",
//       codeLink: "https://github.com/salma549/todo-list",
//       description: "A sleek and intuitive application to manage tasks efficiently, featuring add, edit, delete, and mark-as-complete functionalities.",
//     },
//     {
//       id: 8,
//       src: netflixMovies,
//       demoLink: "https://netflixmovies-demo.com",
//       codeLink: "https://github.com/salma549/netflixMovies",
//       description: "Netflix Movies UI clone showcasing trending movies.",
//     },
    
//     {
//       id: 9,
//       src: Game,
//       demoLink: "https://game-demo.com",
//       codeLink: "https://github.com/salma549/numberGuessGame",
//       description: "A fun number guessing game built with JavaScript and DOM.",
//     },
    
//   ];

//   return (
//     <div
//       name="projects"
//       className="bg-[#00092C] w-full text-white py-16 px-4"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-[#229799]">
//             Projects
//           </p>
//           <p className="py-6 text-2xl mt-4 font-semibold italic mb-5">
//             💻 Check out some of my work right here
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 sm:px-0">
//           {projects.map(({ id, src, demoLink, codeLink, description }) => (
//             <div
//               key={id}
//               className="relative bg-gradient-to-b from-[#001f3f] to-[#112B4E] rounded-tl-3xl rounded-br-3xl shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer hover:shadow-2xl duration-300 group"
//             >
//               {/* Image Container */}
//               <div className="relative overflow-hidden rounded-tl-3xl rounded-br-3xl h-56 flex items-center justify-center">
//                 <img
//                   src={src}
//                   alt="Project"
//                   className="h-full w-auto transition-transform duration-300 hover:scale-110 rounded-tl-3xl rounded-br-3xl"
//                 />
//                 {/* Hidden Description */}
//                 <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-3xl rounded-br-3xl">
//                   <p className="text-sm px-4 text-center">{description}</p>
//                 </div>
//               </div>
//               <div className="p-6 text-center">
//                 <div className="flex justify-center space-x-4">
//                   <a
//                     href={demoLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 bg-[#229799] text-white rounded-full shadow hover:shadow-lg transition-all duration-300 hover:bg-[#18a58f]"
//                   >
//                     Demo
//                   </a>
//                   <a
//                     href={codeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 bg-[#229799] text-white rounded-full shadow hover:shadow-lg transition-all duration-300 hover:bg-[#18a58f]"
//                   >
//                     Code
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Projects;
