import { useContext } from "react";
import { AppContext } from "../Context";
import Container from "./Container";
import PrimeFactorizationTree from "./PrimeFactorizationTree.jsx";

const GraphContainer = () => {
  const { numberOne, numberTwo } = useContext(AppContext);

  return (
    <Container className='flex flex-col flex-wrap space-y-5 justify-center items-center lg:items-start lg:flex-row lg:space-y-0 lg:space-x-5 overflow-x-auto'>
      {!isNaN(numberOne) && numberOne !== 0 && <PrimeFactorizationTree number={numberOne} />}
      {!isNaN(numberTwo) && numberTwo !== 0 && <PrimeFactorizationTree number={numberTwo} />}
    </Container>
  );
};

export default GraphContainer;
