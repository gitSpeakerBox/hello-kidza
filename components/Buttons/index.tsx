"use client";
import Image from "next/image";
import Link from "next/link";

const Buttons = ({ buttonsCollection }: Data) => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-3 md:gap-5 w-max">
      {buttonsCollection && buttonsCollection.map((item, idx) => (
        <Link
          href={item.link ? item.link : ""}
          key={idx}
          shallow
          target="_blank"
          className="flex flex-col outline-none cursor-pointer group items-center justify-center text-center gap-[10px]"
        >
          <div className="h-[60px] w-[60px] bg-[#FF2444] duration-300 flex items-center justify-center rounded-full">
            <Image
              src={item.icon}
              alt=""
              width={28}
              height={28}
              className="aspect-square sm:max-h-[30px] max-h-7 min-h-7 object-contain duration-300 "
            />
          </div>
          <p className=" text-xs font-medium  sm:text-sm max-w-[80px] leading-[110%] tracking-[-1%]">
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Buttons;
