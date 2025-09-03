import Image from 'next/image';
import Link from 'next/link';

interface FeaturedNewsItemProps {
  title: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

export default function FeaturedNewsItem({ title, category, date, image, slug }: FeaturedNewsItemProps) {
  return (
    <Link href={`/news/${slug}`} className='flex flex-col gap-[10px] w-full cursor-pointer hover:opacity-80 transition-opacity duration-200'>
      <Image className="w-full h-auto object-cover" src={image} alt="featured news image" width={400} height={200} />
      <div className='mt-[5px]'>
        <p className="text-[14px] flex items-center gap-[0px]">
          <span className="text-[#2450C4]">{category}</span>
          <span className="w-[2px] h-[2px] bg-[#A0A0A0] rounded-full mx-2 inline-block"></span>
          <span className="text-[#A0A0A0]">{date}</span>
        </p>
        <h2 className="text-2xl leading-[26px] font-sans font-light pt-0">{title}</h2>
      </div>
    </Link>
  );
}
