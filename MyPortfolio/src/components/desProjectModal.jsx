import React ,{ useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { CloseCircle } from "iconsax-react";
import PropTypes from "prop-types";


export default function DesProjectModal({ isOpen, onClose, projectTitle, projectSubtitle, liveProject, projectDescription,projectTags, thumbnailGifUrl, case_study }) {
  if (!isOpen) return null;
  const navigate = useNavigate();
  const [isImage,setIsImage] = useState(true)

  const checkIsImage= (url) => {
    return /\.(jpeg|jpg|gif|png|svg)$/i.test(url)
  };

  useEffect(()=> {
    setIsImage(checkIsImage(thumbnailGifUrl));
  },[])
  
  const handleClick = () => {
    navigate(`/case-study/${case_study.id}`, { state: { caseStudyData: case_study } });
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-50 z-50 px-4">
      <div className="relative bg-portfolioWhite max-w-5xl h-3/4 lg:h-auto w-full rounded-3xl  overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-2 h-full max-h-full pt-14 pb-4 lg:px-4 ">
          <div className="h-full lg:rounded-2xl ">
            {isImage ? (
              <img 
              src={thumbnailGifUrl}
              className=" w-full h-full object-cover lg:rounded-2xl" />
            ):(
              <video className="object-cover w-full h-full lg:rounded-2xl" playsInline autoPlay muted loop >
                <source src={thumbnailGifUrl} type="video/mp4"></source>
              </video>
            )}
          </div>
          <div className="pb-4 pt-8 px-3 xl:px-8 text-left text-portfolioTextLight overflow-y-scroll">
            <CloseCircle
              onClick={onClose}
              className="cursor-pointer absolute top-5 right-5 icon-hover"
              size="24"
              color="#656560"
            />
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-3">
                <p className="font-bold text-left text-portfolioTextDark">
                  {projectTitle.toUpperCase()}
                </p>
                <p>
                  {projectDescription}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {case_study && Object.keys(case_study).length > 0 ? (
                  <button className="inline-first-btn bg-portfolioTextDark text-shadow border-b-2 border-black hover:border-none button-secondary-shadow text-[#EBEBEB] px-3 py-1 rounded-full text-sm italic min-h-10"  onClick={handleClick}>
                   Case Study 
                  </button>
                ) : (
                  <span className="p-2 bg-red-100 text-[#FF6335] rounded-lg text-[12px]">
                    <em className="inline-para text-[#FF6335] ">Welp! You got me..</em>
                    <em> ..A case study is coming soon. Stay tuned</em>
                    </span>
                )}
                <a href={`${liveProject}`} target="_blank" rel="noopener noreferrer" className="inline-second-btn leading-7 bg-portfolioTextDark text-shadow border-b-2 border-black hover:border-none button-secondary-shadow text-[#EBEBEB] px-3 py-1 rounded-full text-sm italic min-h-10"  >
                   Launch Project 
                  </a>
              </div>
              <div className="flex gap-3 flex-wrap">
                {projectTags.map((tag, index) => (

                <p key={index} className="py-1 px-2 border border-gray-300 text-portfolioTextDark rounded-md text-center text-[12px]">
                  {tag}
                </p>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DesProjectModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  projectTags: PropTypes.arrayOf(PropTypes.string),
  thumbnailGifUrl: PropTypes.string,
  case_study: PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.number,
      attributes: PropTypes.shape({
        title: PropTypes.string,
        about: PropTypes.string,
        problemStatement: PropTypes.string,
        description: PropTypes.arrayOf(
          PropTypes.shape({
            type: PropTypes.string,
            children: PropTypes.arrayOf(
              PropTypes.shape({
                text: PropTypes.string,
                type: PropTypes.string,
              })
            ),
          })
        ),
        createdAt: PropTypes.string,
        updatedAt: PropTypes.string,
        publishedAt: PropTypes.string,
      }),
    }),
  }),
};