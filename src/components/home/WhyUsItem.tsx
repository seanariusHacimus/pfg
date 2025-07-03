import Image from 'next/image';

interface WhyUsItemProps {
  title: string;
  icon: string;
}

export default function WhyUsItem({ title, icon }: WhyUsItemProps) {
  return (
    <div className="flex-1 bg-white p-[15px] md:p-5 min-w-[140px] min-h-[133px] flex flex-col justify-between">
      <Image src={`/media/${icon}`} className='w-[29px] h-[29px] md:w-[44px] md:h-[44px]' alt="" width={44} height={44} />
      <h3 className="text-[16px] leading-[18px] md:text-2xl md:leading-[26px] mt-[6px] font-sans font-light" dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
} 