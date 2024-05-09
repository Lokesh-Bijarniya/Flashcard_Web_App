import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CropFreeIcon from "@mui/icons-material/CropFree";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function FrameComponent1() {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <h1 className="text-2xl ">Relations and Functions (Mathematics)</h1>
      <div className="flex flex-col items-center mt-12">
        <ul className="flex gap-12 text-gray-600">
          <li className="font-semibold text-black">Study</li>
          <li>Quiz</li>
          <li>Test</li>
          <li>Game</li>
          <li>Others</li>
        </ul>

        <div className="w-full lg:w-1/2 h-96 bg-gradient-to-r from-[#051A91] via-[#061C93] to-[#2284F1] py-5 px-14 rounded-3xl text-white mt-8 lg:mt-12">
          <div className="flex justify-between">
            <LightbulbIcon />
            <VolumeUpIcon />
          </div>

          <div className="flex justify-center mt-12 lg:mt-36 text-4xl">
            9 + 6 + 7x - 2x - 3
          </div>
        </div>

        <div className="flex justify-center mt-8 lg:mt-12 space-x-8 lg:space-x-12">
          <RefreshIcon />
          <span className="font-semibold flex items-center">
            <ArrowBackIosIcon className="bg-gradient-to-b from-blue-900 to-blue-500 rounded-full text-white p-2" />
            <span className="mx-2">01/10</span> 
            <ArrowForwardIosIcon className="bg-gradient-to-b from-blue-900 to-blue-500 rounded-full text-white p-2" />
          </span>
          <CropFreeIcon />
        </div>
      </div>
    </div>
  );
}

