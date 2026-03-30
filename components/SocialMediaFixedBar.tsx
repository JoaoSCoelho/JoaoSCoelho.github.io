import {SocialMediaBar} from "./SocialMediaBar";

export const SocialMediaFixedBar = () => {
  return (
    <div className="fixed bottom-8 left-[calc(96px+50%)] max-w-540 mx-auto w-full -translate-x-1/2 flex gap-4">
      <SocialMediaBar />
    </div>
  );
};
