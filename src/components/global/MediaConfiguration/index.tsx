import React from "react";

import { SourceDeviceStateProps } from "@/hooks/useMediaSources";
import { useStudioSettings } from "@/hooks/useStudioSettings";

type Props = {
  state: SourceDeviceStateProps;
  user: {
    subscription: {
      plan: "PRO" | "FREE";
    } | null;
    studio: {
      id: string;
      screen: string | null;
      mic: string | null;
      camera: string | null;
      preset: "HD" | "SD";
      userId: string | null;
    } | null;
    id: string;
    email: string;
    firstname: string | null;
    lastname: string | null;
    createdAt: Date;
    clerkId: string;
  } | null;
};

const MediaConfiguration = ({ state, user }: Props) => {
  const activeScreen = state.displays?.find(
    (screen) => screen.id === user?.studio?.screen
  );

  const activeAudio = state.audioInputs?.find(
    (device) => device.deviceId === user?.studio?.mic
  );

  const { isPending, onPreset, register } = useStudioSettings(
    user!.id,
    user?.studio?.screen || state.displays?.[0]?.id,
    user?.studio?.mic || state.audioInputs?.[0]?.deviceId,
    user?.studio?.preset,
    user?.subscription?.plan
  );

  return (
    <form className="flex h-full relative w-full flex-col gap-y-5">
      {/* Form contents go here */}
    </form>
  );
};

export default MediaConfiguration;
