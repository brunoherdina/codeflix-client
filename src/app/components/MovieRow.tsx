import { MovieCard } from './MovieCard';

type MovieRowProps = {
  sectionTitle: string;
};

export function MovieRow({ sectionTitle }: MovieRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div>
        <h2 className='-ml-2 flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide'>
        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((index) =>
          MovieCard(index)
        )}
      </div>
    </div>
  );
}
