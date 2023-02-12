import { useContext } from "react";
import { AppContext } from "../Context";
import Container from "./Container";
import PrimeFactorizationTree from "./PrimeFactorizationTree.jsx";

const GraphContainer = () => {
  const { numberOne, numberTwo } = useContext(AppContext);

  return (
    <Container className='flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5 justify-center items-center overflow-x-auto'>
      {(numberOne !== 0) && <PrimeFactorizationTree number={numberOne} />}
      {(numberTwo !== 0) && <PrimeFactorizationTree number={numberTwo} />}
    </Container>
  );
};

export default GraphContainer;
