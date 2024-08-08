import { CloseCircle } from "iconsax-react";
import PropTypes from "prop-types";


export default function DevProjectModal({ isOpen, onClose, projectTitle, projectSubtitle, liveProject, projectDescription,projectTags, thumbnailGifUrl}) {
    if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-50 z-50 px-4">
      <div className="relative bg-portfolioWhite max-w-5xl h-3/4 w-full rounded-3xl  overflow-hidden">
        <div className="absolute grid grid-cols-1 xl:grid-cols-2 h-full max-h-full">
          <div className="h-60 md:h-auto">
            <img 
            src={thumbnailGifUrl}
            className=" w-full h-full object-cover" />
          </div>
          <div className="pb-4 pt-8 lg:pt-20 px-3 xl:px-8 text-left text-portfolioTextLight overflow-y-scroll">
            <CloseCircle
              onClick={onClose}
              className="cursor-pointer absolute top-5 right-5 icon-hover"
              size="32"
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
             
              <div className="flex items-start">
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

DevProjectModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  projectTags: PropTypes.arrayOf(PropTypes.string),
  thumbnailGifUrl: PropTypes.string,
};
