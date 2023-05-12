import Image from "next/image";
import leesunsin from "public/imgs/part1/leesunsin.jpg";
import styled from 'styled-components'

const StyledWrapper = styled.div`
  height: 500px;
  position: relative;

  @media screen and (min-width: 901px ) {
    width: 500px;
  }

  @media screen and (max-width: 900px ) {
    width: 300px;
  }
`

const Page_Pictures = () => {
  return (
    <StyledWrapper >
      <Image src={leesunsin} alt="leesunsin" fill/>
    </StyledWrapper>
  );
};

export default Page_Pictures;
