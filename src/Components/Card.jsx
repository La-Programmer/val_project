import React from 'react';

function Card(props) {
  const { reason } = props;
  return (
    <div className='m-4 h-1/2 p-2 bg-pink-600 rounded-xl shadow-md'>
      <p className='font-bold font-cursive italic text-white text-center'>
        {reason}
      </p>
    </div>
  );
}

export default Card;
