import Image from "next/image";
import leesunsin from "public/imgs/part1/leesunsin.jpg";

const Page_Pictures = () => {
  return (
    <div>
      <Image src={leesunsin} alt="leesunsin" />
    </div>
  );
};

export default Page_Pictures;
