import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BlockRendererClient from "../../lib/blockrenderclient";
// import { BlocksRenderer, BlocksContent } from "@strapi/blocks-react-renderer";



const Casestudy = () => {
  const { state } = useLocation();
  const caseStudyData = state?.caseStudyData;
  const richText = caseStudyData.caseStudyBody
  console.log(caseStudyData.caseStudyBody)
  // const [process, setProcess] = useState([]);

  // useEffect(() => {
  //   if (caseStudyData?.designProcess?.process) {
  //     console.log(caseStudyData?.designProcess?.process)
  //     setProcess(caseStudyData.designProcess.process);
  //   }
  // }, [caseStudyData]);

  if (!caseStudyData) {
    return <p>No case study data available</p>;
  }

  return (
    <>
      <section className="text-portfolioTextDark w-screen py-16  px-4">
        <img
          className="rounded-3xl w-full max-w-3xl mx-auto"
          src={caseStudyData.thumbnail}
        />
      </section>
      <section className="text-portfolioTextDark w-screen   px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 justify-between  max-w-3xl mx-auto p-4 rounded-xl shadow-md bg-[#fafafa] border-b border-[#CCCCCC]">
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Duration
            </p>
            <p className="text-sm">{caseStudyData.projectDuration}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Platform
            </p>
            <p className="text-sm">{caseStudyData.platform}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Role
            </p>
            <p className="text-sm">{caseStudyData.role}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Client
            </p>
            <p className="text-sm">{caseStudyData.clientName}</p>
          </div>
        </div>
      </section>
      <section className="text-portfolioTextDark w-screen py-16  px-4">
      <div className="flex gap-20 flex-col max-w-3xl mx-auto">
        
        <BlockRendererClient content={richText} />
        </div>
        </section>
      <section className="text-portfolioTextDark text-left w-screen py-16  px-4">
      <div className="flex gap-20 flex-col max-w-3xl mx-auto">
        <h1 className="font-bold text-6xl ">Final Mockups</h1>
            <video className="w-full max-h-64" controls autoPlay loop src={caseStudyData.finalMockups}>Your browser does not support this video</video>
            
      </div>
      </section>
      <section className="text-portfolioTextDark w-screen py-16  px-4">
        <img
          className="rounded-3xl w-full max-w-3xl mx-auto"
          src={caseStudyData.thanksImage}
        />
      </section>
    </>
  );
};

export default Casestudy;
