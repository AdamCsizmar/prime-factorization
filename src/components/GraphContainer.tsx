import { useContext } from "react";
import { AppContext } from "../Context";
import Card from "./Card";
import Container from "./Container";
import { primeFactorization } from "../utils/math";
import PrimeFactorizationTree from "./PrimeFactorizationTree.jsx";

const GraphContainer = () => {
  const { numberOne, numberTwo } = useContext(AppContext);

  console.log(numberOne, numberTwo);
  return (
    <Container className='flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5 justify-center items-center '>
      <Card className='w-fit space-x-5'>
        <PrimeFactorizationTree number={numberOne} />
      </Card>
      <Card className='w-fit space-x-5'>
        <PrimeFactorizationTree number={numberTwo} />
      </Card>
    </Container>
  );
};

export default GraphContainer;
