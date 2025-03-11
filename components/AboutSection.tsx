import React from "react";
import Image from "next/image";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Jupyter Notebooks",
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-10 items-center md:space-x-10 md:space-y-0 md:p-4 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to Know Me!
            </h2>
            <p>
              Hi, I’m <span className="font-bold">Gargi Yadav</span>, a
              <span className="font-bold"> creative</span>,
              <span className="font-bold"> technically skilled</span>, and
              <span className="font-bold"> empathetic</span> Computer Science
              student based in Miami, FL.
            </p>
            <br />
            <p>
              I'm graduating in May 2025 from the University of Miami with a BS
              in Computer Science and minors in Interactive Media, Mathematics,
              and Art History.
            </p>
            <br />
            <p>
              Whether I’m designing and developing applications or painting en
              plein air, I thrive at the intersection of technology and
              creativity. My experiences across different cultures have shaped
              me into an adaptable, open-minded individual who seeks to build
              solutions that enhance everyday life.
            </p>
            <br />
            <p>
              I believe in{" "}
              <span className="font-bold text-teal-500">constant growth</span>.
              My passion for technology drives me to explore new possibilities
              and push creative boundaries. I'm excited to see where my career
              takes me and am always open to new opportunities. 😊
            </p>
          </div>

          <div className="text-center md:w-1/2">
            <h2 className="text-2xl font-bold mb-6">My Skills</h2>
            <div className="flex flex-wrap justify-center md:justify-start">
              {skills.map((skill, idx) => (
                <p
                  key={idx}
                  className="bg-gray-200 px-4 py-2 m-2 text-gray-700 rounded font-semibold"
                >
                  {skill}
                </p>
              ))}
            </div>
            <Image
              src="/hero-image.png"
              alt="Abstract digital artwork"
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
