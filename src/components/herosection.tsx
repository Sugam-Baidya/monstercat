import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useState, useEffect } from "react";
import SongCard from "./songcard";
import Navbar from "./navbar";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const autoplayDelay = 3000;

  const songs = [
    {
      id: 1,
      title: "What You Know You Know You",
      artist: "Infected Mushroom",
      type: "Uncaged",
      released: "November 21, 2025",
      color: "9A8FF6",
    },
    {
      id: 2,
      title: "Before I Go",
      artist: "Trivecta feat. Vanru",
      type: "Instinct",
      released: "November 20, 2025",
      color: "50A584",
    },
    {
      id: 3,
      title: "Mistakes",
      artist: "Oracle",
      type: "Silk",
      released: "November 18, 2025",
      color: "F68E2F",
    },
    {
      id: 4,
      title: "After Dark",
      artist: "Rameses B & Veela",
      type: "Uncaged",
      released: "November 24, 2025",
      color: "F1D384",
    },
  ];

  // Animate progress bar
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / autoplayDelay) * 100, 100));
    }, 20);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <Carousel
      className="h-screen relative"
      plugins={[Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]}
      setApi={(api) => {
        if (!api) return;
        api.on("select", () => setActiveIndex(api.selectedScrollSnap()));
      }}
    >
      <Navbar className="xl:mr-23" />
      <a href="#">
        <img
          src="/favicon.ico"
          className="absolute top-8 left-30 z-20 hidden xl:block h-10 w-10"
          alt=""
        />
      </a>
      {/* Progress Bars */}
      <div className="absolute top-30 md:top-20 left-1/2 -translate-x-1/2 z-10 flex gap-2 w-[75vw]">
        {/* For large screens: 4 bars */}
        <div className="hidden sm:flex gap-4 w-full">
          {songs.map((song, i) => (
            <div key={i} className="flex-1 h-2 bg-white/30 relative border">
              {/* Progress fill */}
              <div
                className="h-full bg-white transition-all duration-75"
                style={{ width: i === activeIndex ? `${progress}%` : "0%" }}
              />
              {/* Song info */}
              <div className="absolute top-full left-0 w-full mt-1 text-xl text-white whitespace-nowrap overflow-hidden text-ellipsis uppercase">
                <p className="truncate">{song.title}</p>
                <p className="truncate">{song.artist}</p>
              </div>
            </div>
          ))}
        </div>

        {/* For small screens: single bar */}
        <div className="sm:hidden flex-1 h-2 border bg-white/30  ">
          <div
            className="h-full bg-white transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <CarouselContent>
        {songs.map((song, index) => (
          <CarouselItem key={song.id} className="pl-0">
            <Card className={`relative rounded-none `}>
              <div className="absolute inset-0">
                {/* Background image that ALWAYS fills the entire div */}
                <img
                  src={`/${index + 1}.png`}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center blur-xs"
                />

                {/* Gradient overlay on top */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />
              </div>
              <CardContent className="h-[95vh] flex justify-center items-center">
                <motion.div
                  key={song.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative text-white w-full max-w-4xl mx-auto overflow-hidden pt-25"
                >
                  <SongCard
                    key={song.id}
                    id={song.id}
                    title={song.title}
                    artist={song.artist}
                    type={song.type}
                    released={song.released}
                    color={song.color}
                  />
                </motion.div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-8 max-md:hidden bg-black/30 text-white cursor-pointer" />
      <CarouselNext className="absolute right-8 max-md:hidden  bg-black/30 text-white cursor-pointer" />
    </Carousel>
  );
};

export default Hero;
