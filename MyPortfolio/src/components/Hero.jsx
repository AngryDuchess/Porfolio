/*Hero Section*/
import React from "react";
import "../index.css";
import stickerOne from "../assets/stickers/sticker-1.webp";
import stickerTwo from "../assets/stickers/sticker-2.webp";
import glasses from "../assets/AR-glasses.png";
import dog from "../assets/dog.png";
import radio from "../assets/radio.png";

export default function HeroSection() {
  return (
    <section id="hero" className="text-portfolioTextDark w-screen py-16 xl:py-20 px-4">
      <div className="flex gap-4 flex-col max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          {/* <div className="flex flex-row gap-4 xl:justify-between items-center flex-wrap xl:flex-nowrap"> */}
          <div className="flex flex-row gap-2 xl:gap-0 xl:justify-between items-center flex-wrap xl:flex-nowrap">
            <p className="text-3xl xl:text-[40px] font-bold">
              I Create Seamless
            </p>
            <span className="bg-gray-300 border border-gray-400 rounded-2xl w-16 h-16 sticker-shadow -rotate-6">
              <img src={stickerOne} />
            </span>
            <p className="text-3xl xl:text-[40px] font-bold">
              User Experiences{" "}
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center flex-wrap">
            <p className="text-3xl xl:text-[40px] font-bold">Through</p>
            <p
              className="text-3xl xl:text-[40px] font-bold leading-loose"
              style={{
                background: "var(--text-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline",
              }}
            >
              Design & Code
            </p>
            <span className="bg-gray-300 border border-gray-400 rounded-2xl w-16 h-16 sticker-shadow rotate-6">
              <img src={stickerTwo} />
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-portfolioTextLight text-left">
            That&apos;s right! I don&apos;t only design..I code as well! I have
            been doing this for 2 years and i make sure to create fresh and
            polished solutions. I am constantly learning and immersing myself
            into spaces that would help me grow as an individual. You
            will mostly find me:
          </p>{" "}
          <br />
          <div className="text-portfolioTextLight text-left">
            <ul className="list-disc flex flex-col gap-4 xl:gap-2">
              <li className="flex gap-2 items-center">
                - watching
                <span className="flex items-center border px-3 border-gray-300 rounded-full gap-2">
                  <img
                    className="w-8 h-auto "
                    src="https://media.giphy.com/media/cPBjiZmxXkESLINLCI/giphy.gif"
                  />
                  sci-fi
                </span>
              </li>
              <li className="flex gap-2 items-center flex-wrap">
                - reading tech related articles, mostly about
                <span className="flex items-center border gap-2 px-3 border-gray-300 rounded-full">
                  <img className="w-8 h-auto " src={glasses} />
                  immersive technologies
                </span>
              </li>
              <li className="flex gap-2 items-center flex-wrap">
                - walking my{" "}
                <span className="flex items-center border gap-2 px-3 border-gray-300 rounded-full">
                  <img className="w-8 h-auto " src={dog} />
                  dog
                </span>
              </li>
              <li className="flex gap-2 items-center flex-wrap">
                - or dancing in my room to Arya Starr's{" "}
                <span className="flex items-center border gap-2 px-3 border-gray-300 rounded-full">
                  <img className="w-8 h-auto " src={radio} />
                  songs
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
