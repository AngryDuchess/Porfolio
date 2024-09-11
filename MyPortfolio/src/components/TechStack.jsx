import { useEffect, useState } from "react";
import { fetchProjects } from "../lib/api";

export default function TechStack() {
  const [logos, setLogo] = useState([]);
  useEffect(() => {
    const getStack = async () => {
      const getStackData = await fetchProjects("/api/tech-stack?populate=*");
      const stack = getStackData.logos.data;
      setLogo(stack);
    };

    getStack();
  }, []);
  return (
    <section
      id="hero"
      className="text-portfolioTextDark w-screen py-16 xl:py-20 px-4"
    >
      <div className="flex gap-8 flex-col max-w-3xl mx-auto justify-center items-center">
        <p className="text-3xl xl:text-[40px] font-bold">Tech Stack</p>
        <p>
          The tools and technologies i build with, streamline my workflow, and
          bring my designs to life
        </p>
        <div className="flex gap-2 flex-wrap w-full items-center lg:items-start justify-center">
          {logos.map((logo) => (
            <div className="flex items-center rounded-3xl w-24 h-24 hover:bg-portfolioHover hover:bg-opacity-5 justify-center">
              <img
                key={logo.id}
                src={`https://hamida-mahama.onrender.com${logo.formats.thumbnail.url}`}
                className="w-16 h-16 rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
