import Image from 'next/image';

export function MovieCard(index: number) {
  return (
    <div
      className='group relative h-28 min-w-[200px] transform bg-gradient-to-t from-transparent to-black transition duration-200 ease-in hover:z-50 hover:scale-110 md:h-40 md:min-w-[300px]'
      key={index}
    >
      <Image
        src={`/item_${index}.png`}
        fill={true}
        alt='Show'
        className='rounded'
      />
    </div>
  );
}
