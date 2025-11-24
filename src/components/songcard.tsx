import React from "react";

interface SongReleaseProps {
  id: number;
  title: string;
  artist: string;
  type: string;
  released: string;
  color: string;
}

const SongReleaseCard: React.FC<SongReleaseProps> = ({
  id,
  title,
  artist,
  type,
  released,
  color,
}) => {
  return (
    <div className=" xl:relative">
      {/* Cover Image */}
      <img
        src={`/${id}.png`}
        alt={title}
        className="w-1/2 h-1/2 shadow-xl mx-auto xl:mx-0 xl:pl-12"
      />

      {/* Overlay */}
      <div className="flex flex-col justify-end p-6 mx-auto">
        <p className="text-sm w-1/2 text-gray-300 mb-1 xl:absolute xl:bottom-65 xl:-left-50 xl:-rotate-90 ">
          <span className={`text-[${color}]`}>{type}</span> - Released{" "}
          {released}
        </p>
        <div className="uppercase xl:w-max xl:absolute xl:top-[50%] xl:-translate-y-[60%] xl:left-[52%] xl:-translate-x-[25%]">
          <h2
            className="text-5xl font-extrabold tracking-tighter text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/80%)]
               
               bg-clip-text xl:max-w-[10ch] xl:wrap-break-words"
          >
            {title}
          </h2>
          <h3 className="text-5xl font-semibold mt-1">{artist}</h3>

          <div className="flex flex-col xl:flex-row gap-4 mt-4 ">
            <button
              className={`bg-[${color}] text-white px-4 py-2 rounded font-semibold hover:bg-white transition hover:text-black uppercase cursor-pointer`}
            >
              View Release
            </button>

            <button className="border border-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition uppercase cursor-pointer">
              Listen on Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongReleaseCard;
