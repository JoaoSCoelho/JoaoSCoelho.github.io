import Image from "next/image";
import {InitialBio} from "../InitialBio";

export type BeginSectionProps = {};

export const BeginSection = ({}: BeginSectionProps) => {
  return (
    <>
      <div className="header-separator h-20 w-full"></div>
      <div className="h-[calc(100dvh-80px)] relative flex px-16 items-center justify-between ">
        <div className="w-full flex items-center">
          <InitialBio />
        </div>
        <div className="absolute left-full -translate-x-[calc(100%+64px)] w-200 h-200 bg-linear-to-br from-[#d2e7ff] -z-10 to-transparent rounded-full"></div>
        <div className="w-370 h-[90%] self-end relative">
          <Image
            src="/my-photo.png"
            fill
            className="object-bottom object-contain drop-shadow-[0_0_30px_#36415340]"
            alt="Foto pessoal com pose de braços cruzados"
          />
        </div>
        {/* <div className="font-sans h-full flex justify-center w-full flex-col drop-shadow-[0_25px_16px_#36415310]">
        <div className="w-1/2 self-start">
          <div className="w-fit">
            <div className="relative w-63  h-43  rounded-md mb-6">
              <Image src="/website-mock.png" fill className="object-contain" alt="Website mockup" />
            </div>
            <div className="relative">
              <span className="bg-gray-900 rounded-full w-5 h-5 absolute -top-2.5 left-1/2 -translate-x-1/2"></span>
              <div className="text-lg relative z-10 rounded-full text-center bg-white py-4 px-6 w-[80%] mx-auto">
                Websites
              </div>
            </div>
          </div>
        </div>
        <div className="w-full self-start flex justify-end -mt-15">
          <div className="self-end">
            <div className="relative w-30 h-50 rounded-md mb-6">
              <Image src="/chatbot-mock.png" fill className="object-contain" alt="Chatbot mockup" />
            </div>
            <div className="relative">
              <span className="bg-gray-900 rounded-full w-5 h-5 absolute -top-2.5 left-1/2 -translate-x-1/2"></span>
              <div className="text-lg  rounded-full text-center relative z-10 bg-white py-4 px-6 w-full">
                Chatbots
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 self-start flex justify-end -mt-10">
          <div className="self-end">
            <div className="relative w-60 h-38 rounded-md mb-10">
              <Image src="/api-mock.png" fill className="object-contain" alt="API mockup" />
            </div>
            <div className="relative">
              <span className="bg-gray-900 rounded-full w-5 h-5 absolute -top-2.5 left-1/2 -translate-x-1/2"></span>
              <div className="text-lg  rounded-full z-10 relative text-center bg-white w-[90%] py-4 px-6 mx-auto">
                API's
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};
