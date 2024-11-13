import { StartRecording } from "@/lib/recorder";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { date } from "zod";

const StudioTray = () => {
  const [preview, setPreview] = useState(false);
  const [recording, setRecording] = useState(false);
  const [onSources, setOnSources] = useState<
    | {
        screen: string;
        id: string;
        audio: string;
        preset: "HD" | "SD";
        plan: "PRO" | "FREE";
      }
    | undefined
  >(undefined);

  window.ipcRenderer.on("profile-received", (event, payload) => {
    console.log(event);
    setOnSources(payload);
  });

  const videoElement = useRef<HTMLVideoElement | null>(null);
  let initialTime = new Date();

  return !onSources ? (
    <></>
  ) : (
    <div className="flex flex-col justify-end gap-y-5 h-screen">
      <video
        autoPlay
        ref={videoElement}
        className={cn("w-6/12 border-2 self-end", preview ? "hidden" : "")}
      />
      <div className="rounded-full flex justify-around items-center h-20 w-full border-2 bg-[#171717] draggable">
        <div
          {...(onSources && {
            onClick: () => {
              setRecording(true);
              StartRecording(onSources);
            },
          })}
          className={cn(
            "non-draggable rounded-full cursor-pointer relative hover:opacity-80",
            recording ? "bg-red-500 w-6 h-6" : "bg-red-400 w-8 h-8"
          )}
        ></div>
      </div>
    </div>
  );
};

export default StudioTray;
