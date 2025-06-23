import Image from 'next/image';

interface NewsItemProps {
  title: string;
  category: string;
  date: string;
  image: string;
  isLarge?: boolean;
}

export default function NewsItem({ title, category, date, image, isLarge = false }: NewsItemProps) {
  if (isLarge) {
    return (
      <div>
        <Image className="w-full mr-6" src={image} alt="" width={635} height={400} />
        <p className="text-[14px] mt-4">
          <span className="mr-2.5 text-[#2450C4]">{category}</span>
          <span>{date}</span>
        </p>
        <h2 className="text-2xl leading-[26px] font-sans font-light">{title}</h2>
      </div>
    );
  }

  return (
    <div className="flex items-center pb-13">
      <Image className="mr-6" src={image} alt="" width={227} height={150} />
      <div>
        <p className="text-[14px]">
          <span className="mr-2.5 text-[#2450C4]">{category}</span>
          <span>{date}</span>
        </p>
        <h3 className="text-2xl leading-[26px] max-w-[360px] font-sans font-light">{title}</h3>
      </div>
    </div>
  );
} 