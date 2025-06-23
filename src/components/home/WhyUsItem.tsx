import Image from 'next/image';

interface WhyUsItemProps {
  title: string;
  icon: string;
}

export default function WhyUsItem({ title, icon }: WhyUsItemProps) {
  return (
    <div className="flex-1 bg-white p-5">
      <Image src={`/media/${icon}`} alt="" width={44} height={44} />
      <h3 className="text-2xl leading-[26px] mt-[6px] font-sans font-light" dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
} 