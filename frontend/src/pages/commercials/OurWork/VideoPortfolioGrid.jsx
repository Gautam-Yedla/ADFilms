import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Dialog } from "@headlessui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  {
    id: 4,
    title: "Pulpy Orange – Summer Drink",
    thumbnail:
      "https://imgs.search.brave.com/K2gR3JRCaASvMV5aQgpjJ8cCVGFqFNmc8UR6-IRgjgc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWct/Y2RuLnRoZXB1Ymxp/dmUuY29tL2ZpdC1p/bi8xMjgweDk2MC9m/aWx0ZXJzOmZvcm1h/dCh3ZWJwKS9ibWkv/bWVkaWEvcG9zdF9i/YW5uZXJzL2EzYmU1/OGVjNjA3YzRlNzMw/ZTRhNzY1MmYxYzNi/ZjRmN2VkM2NkNmIw/NTAxNzM1ZDljNmRk/OThiMWE0YjdiNjIu/anBn",
    videoUrl: "https://youtu.be/rPWBY1wusQ4?si=w7Aq8OgQ7F_0vHBH",
    tags: ["Beverage", "30s", "TV", "Summer Drink"],
  },
  {
    id: 5,
    title: "VI – Internet for All",
    thumbnail:
      "https://imgs.search.brave.com/-j7UDfVJX7u3SYsytLjgLwQw0crPM5ntPtzxqh01vj4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93ZWJu/ZWVsLmNvbS9kYWls/eS9zaXRlcy9kZWZh/dWx0L2ZpbGVzL2lt/YWdlcy9kYWlseS8w/NS0yMDEzL3pvb3pv/by12b2RhZm9uZS13/YWxscGFwZXItNC5q/cGc",
    videoUrl: "https://youtu.be/pWTtEn9pio4?si=LuXBbFGaDfC8g-yY",
    tags: ["Sports", "Social", "1min", "Fitness"],
  },
  {
    id: 6,
    title: "Fevikwik – Stick Anything",
    thumbnail:
      "https://imgs.search.brave.com/ad5ngsKHYDHn-kw0TcSqDo3z6PlgasYhA1LEvnaFj9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMucGlkaWxpdGUu/Y29tL2lzL2ltYWdl/L3BpZGlsaXRlLzEy/MjIxXzh4MTJfRmV2/aWt3aWstRnJhbWUt/UHJlc3MtYWQtMzAw/eDIwMC10aT90cz0x/NzEzOTQxMTgzMDg2/JmRwcj1vZmY",
    videoUrl: "https://youtu.be/CcfZqA_R7Tc?si=BOfSQ3y91MVe0Uj1",
    tags: ["Fashion", "Digital", "Cinematic", "Lifestyle"],
  },
];

const ITEM_WIDTH = 320;

export default function VideoPortfolioGrid() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const scrollRef = useRef(null);

  // Tripled videos for looping illusion
  const loopVideos = [...videos, ...videos, ...videos];

  const middleIndex = videos.length;

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.scrollLeft = ITEM_WIDTH * middleIndex;
    }

    const handleScroll = () => {
      if (!container) return;
      const maxScroll = ITEM_WIDTH * loopVideos.length;
      if (container.scrollLeft <= ITEM_WIDTH) {
        // Jump to middle end (seamless backward)
        container.scrollLeft = ITEM_WIDTH * (middleIndex + 1);
      } else if (container.scrollLeft >= maxScroll - ITEM_WIDTH * 2) {
        // Jump to middle start (seamless forward)
        container.scrollLeft = ITEM_WIDTH * middleIndex;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [loopVideos]);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -ITEM_WIDTH : ITEM_WIDTH;
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-8 bg-gradient-to-br from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Arrow Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-yellow-400 transition hidden md:block"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-yellow-400 transition hidden md:block"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>

        {/* Infinite Scroll Carousel */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-4"
        >
          {loopVideos.map((video, index) => (
            <div
              key={`${video.id}-${index}`}
              className="min-w-[300px] snap-center flex-shrink-0 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden"
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
