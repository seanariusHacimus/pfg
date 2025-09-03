import Image from 'next/image';
import Link from 'next/link';

interface RegularNewsItemProps {
  title: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

export default function RegularNewsItem({ title, category, date, image, slug }: RegularNewsItemProps) {
  return (
    <Link href={`/news/${slug}`} className="flex w-full cursor-pointer hover:opacity-80 transition-opacity duration-200">
      <div className="mr-[10px] md:mr-[25px] w-[120px] min-[380px]:w-[170px] h-[90px] md:w-[240px] md:h-[160px] overflow-hidden flex-shrink-0">
        <Image className="w-full h-full object-cover" src={image} alt="" width={240} height={160} />
      </div>
      <div className='md:mt-[5px] flex-1'>
        <p className="text-[8px] md:text-[14px] flex items-center gap-[6px]">
          <span className="text-[#2450C4]">{category}</span>
          <span className="text-[#0A0A0A]">{date}</span>
        </p>
        <h3 className="text-[16px] pt-[8px] md:pt-0 md:text-2xl leading-[18px] md:leading-[26px] max-w-[360px] font-sans font-light">{title}</h3>
      </div>
    </Link>
  );
}
