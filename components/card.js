export default function Card(props) {
  const image = {
    backgroundImage: `url(${props.image})`,
  };

  const handleSound = (props) => {
    console.log(props.sound);
    var audio = new Audio(props.sound);
    audio.play();
  };
  return (
    <>
      <div className='w-full sm:w-auto lg:max-w-full lg:flex' onClick={() => handleSound(props)}>
        <div
          style={image}
          className='h-40 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center'></div>
        <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal'>
          <div className='mb-4'>
            <h1 className='text-gray-700 text-center text-6xl font-extrabold'>{props.alphabet}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
