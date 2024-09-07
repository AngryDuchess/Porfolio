import React, { useState } from "react";
import DesProjectModal from "./desProjectModal";
import PropTypes from "prop-types";
import { useEffect } from "react";

  export default function DesCard({ project }) {
    
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    
  useEffect(() => {
    if(isModalOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isModalOpen])

    const { title, description, id, tags,thumbnailUrl,thumbnailGifUrl, case_study, subTitle, liveProject } = project;
  return (
    <>
      <div
        key={id}
        className="bg-gray-600 max-w-sm w-full max-h-64 h-auto rounded-3xl overflow-hidden mb-4"
        onClick={openModal}
      >
        {thumbnailUrl ? (
          <img
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
            src={project.thumbnailUrl}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            No Thumbnail Available
          </div>
        )}
      </div>
      <DesProjectModal isOpen={isModalOpen} onClose={closeModal} projectTitle={project.title} projectDescription={project.description[0]?.children[0].text} projectTags={project.tags?.projectTags} liveProject={liveProject} thumbnailGifUrl={project.thumbnailGifUrl} case_study={case_study} />
    </>
  );
}

DesCard.propTypes = {
  project: PropTypes.object.isRequired,
};