import { useContext } from "react";
import { AppContext } from "../Context";
import Card from "./Card";
import Container from "./Container";
import { greatestCommonDivisor, leastCommonMultiple } from "../utils/math";


const ResultContainer = () => {
  const { numberOne, numberTwo } = useContext(AppContext);
  const GCD = (numberOne && numberTwo) ? greatestCommonDivisor(numberOne, numberTwo) : 0;
  const LCM = (numberOne && numberTwo) ? leastCommonMultiple(numberOne, numberTwo) : 0;

  return (
    <Container className='flex flex-wrap justify-center items-center md:space-x-10 space-y-5 md:space-y-0'>
      <Card className=' space-x-5 border-emerald-400'>
        <p>Legkisebb közös többszörös:</p>
        <span className='font-bold text-2xl text-emerald-400'>{LCM}</span>
      </Card>
      <Card className=' space-x-5'>
        <p>Legnagyobb közös osztó:</p>
        <span className='font-bold text-2xl text-emerald-400'>{GCD}</span>
      </Card>
    </Container>
  );
};

export default ResultContainer;
