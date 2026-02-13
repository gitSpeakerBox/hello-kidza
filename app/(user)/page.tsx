import Buttons from "@/components/Buttons";
import Cards from "@/components/Cards";
import HeroSection from "@/components/HeroSection";
import { getAuthorBySlug } from "@/sanity/data";
import Image from "next/image";
import bottomIcon from "@/assets/images/bottom icons.svg";

const page = async () => {
  const data = await getAuthorBySlug("home");

  return (
    <>
    <section className=" flex  min-h-screen h-full sm:gap-y-7 gap-y-6 overflow-hidden main_padding_x main_padding_y z-0 flex-col items-center justify-center text-c max-w-[600px] w-max mx-auto">
      <HeroSection {...data.result} />
      <Buttons {...data.result} />
      <Cards {...data.result} />
    </section>
    <Image className="object-contain mx-auto max-h-[34px] lg:max-h-[75.87px] mb-5" src={bottomIcon} alt=""/>
    </>
  );
};

export default page;
