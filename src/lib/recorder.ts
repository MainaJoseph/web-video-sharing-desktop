import { hidePluginWindow } from "./utils";
import { v4 as uuid } from "uuid";

// Option 1: Ignore ESLint warning if the variable will be used later
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let videoTransferFileName: string | undefined;
let mediaRecorder: MediaRecorder;

export const StartRecording = (onSources: {
  screen: string;
  audio: string;
  id: string;
}) => {
  // Function implementation goes here
  hidePluginWindow(true);
  videoTransferFileName = `${uuid()}-${onSources?.id.slice(0, 8)}.webm`;
  mediaRecorder.start(1000);
};
