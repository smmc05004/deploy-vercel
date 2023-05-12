import Image from "next/image";
import leesunsin from "public/imgs/part1/leesunsin.jpg";

const Page_Pictures = () => {
  return (
    <div style={{width: '200px', height:'500px'}}>
      <Image src={leesunsin} alt="leesunsin" fill/>
    </div>
  );
};

export default Page_Pictures;
