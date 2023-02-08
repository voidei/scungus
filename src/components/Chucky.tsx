// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function Chucky() {
  return (
    <div className='chucky-container'>
      <img src='./Chucky-the-Cat-2015051419.svg' alt='chucky'></img>
    </div>
  );
}

// eslint-disable-next-line sonarjs/no-identical-functions
export const ChuckyConst = () => {
  return (
    <div className='chucky-container'>
      <img src='./Chucky-the-Cat-2015051419.svg' alt='chucky'></img>
    </div>
  );
};
