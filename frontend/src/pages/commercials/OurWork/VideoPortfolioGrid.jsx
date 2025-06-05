import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Dialog } from "@headlessui/react";

const videos = [
  {
    id: 1,
    title: "Coca-Cola – Summer Campaign",
    thumbnail: "../../assets/coke.jpg",
    videoUrl: "https://youtu.be/VGa1imApfdg?si=EBGR6JzjadI-9UwC",
    tags: ["Beverage", "30s", "TV", "Summer Drink"],
  },
  {
    id: 2,
    title: "Nike – Just Run",
    thumbnail: "../../assets/nike.jpg",
    videoUrl: "https://youtu.be/Cur3b5NX_nk?si=wzdMxv9ThhnjDPYx",
    tags: ["Sports", "Social", "1min", "Fitness"],
  },
  {
    id: 3,
    title: "Zara – Fall Collection",
    thumbnail: "../../assets/zara.jpg",
    videoUrl: "https://youtu.be/77aAsADzC0s?si=sy_W1RK7fL0Lbwba",
    tags: ["Fashion", "Digital", "Cinematic", "Lifestyle"],
  },
];

export default function VideoPortfolioGrid() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-8 px-6 bg-gradient-to-br from-gray-100 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedVideo(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {video.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {video.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        <Dialog
          open={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          className="fixed z-50 inset-0 bg-black/60 flex items-center justify-center"
        >
          <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-3xl relative">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-lg"
            >
              &times;
            </button>
            {selectedVideo && (
              <ReactPlayer
                url={selectedVideo.videoUrl}
                controls
                playing
                width="100%"
                height="360px"
              />
            )}
          </div>
        </Dialog>
      </div>
    </section>
  );
}
