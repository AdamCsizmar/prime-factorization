import { useContext } from "react";
import { AppContext } from "../Context";
import Card from "./Card";
import Container from "./Container";
import { greatestCommonDivisor, leastCommonMultiple } from "../utils/math";

const ResultContainer = () => {
  const { numberOne, numberTwo } = useContext(AppContext);
  const GCD = numberOne && numberTwo ? greatestCommonDivisor(numberOne, numberTwo) : 0;
  const LCM = numberOne && numberTwo ? leastCommonMultiple(numberOne, numberTwo) : 0;

  return (
    <Container className='flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5 justify-center items-center'>
      <Card className=' space-x-5'>
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
