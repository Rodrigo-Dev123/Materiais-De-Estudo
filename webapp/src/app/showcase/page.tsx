function ShowCase() {
  return (
    <div className='flex h-max flex-col'>
      <div className='my-5 flex'>
        <button className='btn-primary'>Primary Button</button>

        <button className='btn-secondary'>Secondary Button</button>

        <button className='btn-tertiary'>Tertiary Button</button>
      </div>

      <p className='text-sm'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <p className='text-base'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <p className='text-lg'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <p className='text-xl'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <p className='text-2xl'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}

export default process.env.NODE_ENV === 'production' ? () => null : ShowCase;
