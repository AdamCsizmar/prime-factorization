import { SetStateAction, useContext, useState } from "react";
import { AppContext } from "../Context";
import Card from "./Card";

const InputWarpper = () => {
  const { setNumberOne, setNumberTwo } = useContext(AppContext);

  const handleInput = (number: number, value: SetStateAction<number>) => {
    if (number === 1) setNumberOne(value);
    if (number === 2) setNumberTwo(value);
  };

  return (
    <>
      <h1 className='max-w-2xl px-2 mb-10 text-center font-bold leading-snug tracking-tight text-xl lg:text-2xl lg:leading-tight xl:text-3xl xl:leading-tight text-white'>
        Keresd meg két szám Legkisebb közös többszörösét és Legnagyobb közös
        osztóját
      </h1>
      <Card className='flex-wrap space-x-4 space-y-5 sm:space-y-0'>
        <p className='font-bold '>Írj be két számot...</p>
        <input
          type='number'
          className='p-2 bg-transparent border-2 rounded-lg text-center'
          onBlur={(event) => handleInput(1, parseInt(event.target.value))}
        />
        <input
          type='number'
          className='p-2 bg-transparent border-2 rounded-lg text-center'
          onBlur={(event) => handleInput(2, parseInt(event.target.value))}
        />
      </Card>
    </>
  );
};

export default InputWarpper;
