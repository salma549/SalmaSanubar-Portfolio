
import React from "react";

import html from "../assets/images/html-5.png";
import css from "../assets/images/css-3.png";
import javascript from "../assets/images/javascript.png";
import reactImage from "../assets/images/reactImage.png";
import nodejs from "../assets/images/nodejs.png";
import github from "../assets/images/github.png";
import linux from "../assets/images/linux.png";
import mongoDB from "../assets/images/mongoDB.jpg";
import tailwind from "../assets/images/tailwind.png";
import expressImg from "../assets/images/expressImg.png";
import excel from "../assets/images/excel.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: expressImg,
      title: "Express",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: linux,
      title: "Linux",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 11,
      src: excel,
      title: "Excel",
      style: "shadow-green-400",
    },
  ];

  return (
    <div
      name="Skills"
      className="bg-[#00092C] w-full md:h-auto"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div className=" mt-20">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 text-[#229799] inline">
          Skills
          </p>
          <p className="text-2xl mt-4 font-semibold italic mb-5 py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center py-8 px-12   mb-10 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} animate-bounce-in`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
