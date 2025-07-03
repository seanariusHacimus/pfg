import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  icon: string;
}

export default function ServiceCard({ title, icon }: ServiceCardProps) {
  return (
    <div className="md:flex-1 flex flex-col justify-between p-[15px] md:p-[30px] min-w-[120px] md:aspect-square bg-[#F2F4F7]">
      <h3 className="text-[16px] leading-[18px] md:text-2xl md:leading-[26px] font-light pb-[33px] sm:pb-[44px] md:pb-[70px] lg:pb-[140px]" dangerouslySetInnerHTML={{ __html: title }} />
      <Image src={`/media/${icon}`} alt="" width={64} height={64} className="w-[50px] h-[50px] md:w-[88px] md:h-[88px]" />
    </div>
  );
} 