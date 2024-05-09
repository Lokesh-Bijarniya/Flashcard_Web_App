// Desktop.jsx
import React from "react";
import {
  Button,
  TextField,
} from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const Desktop = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-center justify-start pt-[1.5rem] px-[1.111rem] pb-[17.056rem] gap-[3.556rem] leading-normal tracking-normal mq450:gap-[0.889rem_3.556rem] mq675:gap-[1.778rem_3.556rem]">
      <header className="w-[68.667rem] flex flex-row items-start justify-end py-[0rem] pr-[0.056rem] pl-[0.111rem] box-border max-w-full text-left text-[1rem] text-darkslategray-100 font-med">
        <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[1.111rem]">
          <div className="w-[10.611rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.222rem] box-border">
            <img
              className="self-stretch h-[2.167rem] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/component-40@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[2.222rem] max-w-full mq675:gap-[2.222rem_1.111rem] mq750:hidden">
            <nav className="m-0 w-[15.667rem] flex flex-col items-start justify-start pt-[0.722rem] px-[0rem] pb-[0rem] box-border">
              <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[1.111rem] text-left text-[1rem] text-darkslategray-100 font-med">
                <div className="relative inline-block min-w-[2.833rem]">
                  Home
                </div>
                <div className="relative inline-block min-w-[4.611rem]">
                  Flashcard
                </div>
                <div className="relative inline-block min-w-[3.778rem]">
                  Contact
                </div>
              </nav>
            </nav>
            <div className="flex flex-col items-start justify-start pt-[0.722rem] px-[0rem] pb-[0rem]">
              <div className="relative inline-block min-w-[1.944rem]">FAQ</div>
            </div>
            <Button
              className="h-[2.667rem] w-[7.111rem]"
              disableElevation={true
