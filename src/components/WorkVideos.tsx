import React, { useState } from "react";
import { createPortal } from "react-dom";
import { MdClose, MdPlayArrow } from "react-icons/md";
import "./styles/WorkVideos.css";

const videos = [
  { id: 1, title: "Video Editing 01", url: "/Video/17.mp4" },
  { id: 2, title: "Video Editing 02", url: "/Video/39.toby 4.mp4" },
  { id: 3, title: "Video Editing 03", url: "/Video/40. murray & mecca series.mp4" },
  { id: 4, title: "Video Editing 04", url: "/Video/43. snow bed.mp4" },
  { id: 5, title: "Video Editing 05", url: "/Video/45. bashra.mp4" },
  { id: 6, title: "Video Editing 06", url: "/Video/46. bashra.mp4" },
  { id: 7, title: "Video Editing 07", url: "/Video/49 MURRAY + CASTOR.mp4" },
  { id: 8, title: "Video Editing 08", url: "/Video/50. Sukishi.mp4" },
  { id: 9, title: "Video Editing 09", url: "/Video/51 mecca aida.mp4" },
  { id: 10, title: "Video Editing 10", url: "/Video/55 Parmelo.mp4" },
];

const WorkVideos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openModal = (url: string) => {
    setSelectedVideo(url);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="work-videos-section">
      <div className="work-videos-container section-container">
        <h2 className="video-section-title">
          Video <span>Editing</span>
        </h2>
        
        <div className="video-grid">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="video-item" 
              onClick={() => openModal(video.url)}
              data-cursor="disable"
            >
              <div className="video-thumbnail-container">
                <video src={video.url} muted className="video-thumbnail-preview" />
                <div className="video-overlay">
                  <div className="play-icon-wrapper">
                    <MdPlayArrow className="play-icon" />
                  </div>
                  <span className="video-title-overlay">{video.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && createPortal(
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>
              <MdClose />
            </button>
            <video 
              src={selectedVideo} 
              controls 
              autoPlay 
              className="full-video-player"
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default WorkVideos;
