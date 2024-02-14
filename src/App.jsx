// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import heart from './assets/heart.svg';
import reasons from './Components/Reasons';
import Card from './Components/Card';

function App() {
  const messages = reasons.map((reason) => {
    return <Card reason={reason} />;
  });

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < messages.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  return (
    <>
      <section className='m-2 p-4 bg-pink-300 rounded-md shadow-md'>
        <img
          src={heart}
          alt='My heart beats for you'
          className='active:animate-ping duration-1000'
        />
        <h1 className='text-center text-2xl font-bold font-cursive italic text-red-600'>
          Happy Valentine&apos;s Day my Baby Girl
        </h1>
      </section>
      <section className='mt-12'>{messages[index]}</section>
      <section className='grid grid-cols-2 gap-10 mt-8'>
        <button
          onClick={handlePrev}
          className='bg-red-600 w-4/6 m-4 p-2 rounded-full text-white font-semibold shadow-md'
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className='bg-red-600 w-4/6 m-4 p-2 rounded-full text-white font-semibold shadow-md'
        >
          Next
        </button>
      </section>
    </>
  );
}

export default App;
