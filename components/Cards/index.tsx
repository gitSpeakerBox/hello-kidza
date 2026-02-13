"use client";
import Image from "next/image";
import Link from "next/link";

const Cards = ({ cardsCollection }: Data) => {

  return (
    cardsCollection &&
    <section className=" w-full flex-col justify-center items-center max-w-[600px] flex gap-4 ">
      {cardsCollection && cardsCollection.map((item, idx) => (
        <Link
          href={item.link}
          key={idx}
          className="flex items-center rounded-full max-w-[280px] group bg-[#FF2444] w-full justify-around gap-4 md:gap-5 py-4 px-5 group-hover: duration-300"
        >
          <Image
            src={item.icon}
            alt=""
            width={28}
            height={17.8}
            className="aspect-square max-h-7 h-full object-contain duration-300 text-black "
          />

          <p className="text-xs sm:text-sm  font-medium w-max duration-300 leading-[110%] tracking-[-1%] capitalize">
            {item.title}
          </p>
          <p></p>
        </Link>
      ))}
    </section>
  );
};

export default Cards;
