import React, { useState } from "react";
import arrowsvg from "../../assets/img/gallery/arrow.svg";

const videos = [
  "https://www.youtube.com/embed/QpwpLjiCTO4?si=GSNHcFroMEx0FLMq",
  "https://www.youtube.com/embed/mG7z3k43RKg?si=4ZeewmzQ3LPRQWBJ",
  "https://www.youtube.com/embed/Wcpj_RHRKiI?si=uciJ2d_93lpRYxOg",
  "https://www.youtube.com/embed/Wcpj_RHRKiI?si=uciJ2d_93lpRYxOg",
  "https://www.youtube.com/embed/QpwpLjiCTO4?si=GSNHcFroMEx0FLMq",
  "https://www.youtube.com/embed/mG7z3k43RKg?si=4ZeewmzQ3LPRQWBJ",
  "https://www.youtube.com/embed/QpwpLjiCTO4?si=GSNHcFroMEx0FLMq",
  "https://www.youtube.com/embed/mG7z3k43RKg?si=4ZeewmzQ3LPRQWBJ",
  "https://www.youtube.com/embed/Wcpj_RHRKiI?si=uciJ2d_93lpRYxOg",
  "https://www.youtube.com/embed/QpwpLjiCTO4?si=GSNHcFroMEx0FLMq",
  "https://www.youtube.com/embed/mG7z3k43RKg?si=4ZeewmzQ3LPRQWBJ",
  "https://www.youtube.com/embed/QpwpLjiCTO4?si=GSNHcFroMEx0FLMq",
  "https://www.youtube.com/embed/mG7z3k43RKg?si=4ZeewmzQ3LPRQWBJ",
  "https://www.youtube.com/embed/Wcpj_RHRKiI?si=uciJ2d_93lpRYxOg",
];

const INITIAL_COUNT_DESKTOP = 6;
const INITIAL_COUNT_MOBILE = 6;
const VIDEOS_PER_CLICK_MOBILE = 6;

const VideoCollection: React.FC = () => {
  const [visibleCountDesktop, setVisibleCountDesktop] = useState(
    INITIAL_COUNT_DESKTOP
  );
  const [extraRowsShownMobile, setExtraRowsShownMobile] = useState(0);
  const [popupVideo, setPopupVideo] = useState<string | null>(null);

  const visibleCountMobile =
    INITIAL_COUNT_MOBILE + extraRowsShownMobile * VIDEOS_PER_CLICK_MOBILE;

  const openPopup = (video: string) => setPopupVideo(video);
  const closePopup = () => setPopupVideo(null);

  const handleShowMoreDesktop = () =>
    setVisibleCountDesktop(Math.min(visibleCountDesktop + 6, videos.length));
  const handleShowLessDesktop = () =>
    setVisibleCountDesktop(INITIAL_COUNT_DESKTOP);

  return (
    <div className="w-full mx-auto text-ternary">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-xs font-belda text-ternary/70 mb-1 lg:mb-2 uppercase tracking-wider">
          Stories in motion
        </h1>
        <h1 className="lg:text-5xl md:text-3xl text-2xl leading-[41px] md:leading-[62px]  font-belda font-semibold">
          Video Collections
        </h1>
      </div>

      {/* Desktop Video Grid */}
      <div className="hidden md:grid grid-cols-3 gap-3 md:gap-7 relative">
        {videos.slice(0, visibleCountDesktop).map((video, i) => {
          // last row starts at "visibleCountDesktop - 3"
          const lastRowStart = visibleCountDesktop - 3;
          const showOverlay = i >= lastRowStart;

          return (
            <div
              key={i}
              className="relative aspect-video w-full overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openPopup(video)}
            >
              <iframe
                className="w-full h-full rounded-lg pointer-events-none"
                src={video}
                title={`YouTube video ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {showOverlay && (
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent rounded-b-lg pointer-events-none"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop Show More / Show Less Buttons */}
      <div className="hidden md:flex justify-center gap-16 mt-10 -translate-y-5">
        {visibleCountDesktop < videos.length && (
          <button
            className="flex flex-col items-center group"
            onClick={handleShowMoreDesktop}
          >
            <div className="w-12 h-12 flex items-center justify-center cursor-pointer">
              <img
                src={arrowsvg}
                alt="Show more"
                className="w-8 h-8 transition-transform duration-300 transform rotate-0"
              />
            </div>
            <span className=" text-sm underline">Show More Videos</span>
          </button>
        )}
        {visibleCountDesktop >= videos.length && (
          <button
            className="flex flex-col items-center group"
            onClick={handleShowLessDesktop}
          >
            <div className="w-12 h-12 flex items-center justify-center cursor-pointer">
              <img
                src={arrowsvg}
                alt="Show less"
                className="w-8 h-8 transition-transform duration-300 transform rotate-180"
              />
            </div>
            <span className=" text-sm underline">Show Less Videos</span>
          </button>
        )}
      </div>

   {/* Mobile Video Grid */}
<div className="grid grid-cols-2 gap-3 md:hidden">
  {videos.slice(0, visibleCountMobile).map((video, i, arr) => {
    const videosPerRow = 2;

    // Calculate index where last row starts dynamically
    const lastRowStart = arr.length - (arr.length % videosPerRow || videosPerRow);

    const isLastRow = i >= lastRowStart;

    return (
      <div
        key={i}
        className="relative aspect-video w-full overflow-hidden rounded-lg cursor-pointer"
        onClick={() => openPopup(video)}
      >
        <iframe
          className="w-full h-full rounded-lg cursor-pointer"
          src={video}
          title={`YouTube video ${i + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Gradient overlay at bottom for last row */}
        {isLastRow && (
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent rounded-b-lg z-20"></div>
        )}
      </div>
    );
  })}
</div>

      {/* Mobile Show More / Show Less Buttons */}
      <div className="md:hidden flex justify-center gap-7 mt-4">
        {visibleCountMobile < videos.length && (
          <button
            className="flex flex-col items-center group cursor-pointer"
            onClick={() => setExtraRowsShownMobile(extraRowsShownMobile + 1)}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={arrowsvg}
                alt="Show more"
                className="w-8 h-8 transition-transform duration-300 transform rotate-0"
              />
            </div>
            <span className="text-sm underline">Show More Videos</span>
          </button>
        )}
        {visibleCountMobile >= videos.length && (
          <button
            className="flex flex-col items-center group cursor-pointer"
            onClick={() => setExtraRowsShownMobile(0)}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={arrowsvg}
                alt="Show less"
                className="w-8 h-8 transition-transform duration-300 transform rotate-180"
              />
            </div>
            <span className="text-sm underline">Show Less Videos</span>
          </button>
        )}
      </div>

      {/* Popup Modal */}
      {popupVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closePopup}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50 cursor-pointer"
            onClick={closePopup}
          >
            &times;
          </button>

          <div
            className="relative w-11/12 md:w-3/4 lg:w-1/2 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full rounded-lg"
              src={popupVideo + "?autoplay=1"}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCollection;
