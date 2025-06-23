import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  icon: string;
}

export default function ServiceCard({ title, icon }: ServiceCardProps) {
  return (
    <div className="flex-1 flex flex-col justify-between p-[30px] aspect-square bg-[#F2F4F7]">
      <h3 className="text-2xl leading-[26px] font-sans font-light" dangerouslySetInnerHTML={{ __html: title }} />
      <Image src={`/media/${icon}`} alt="" width={88} height={88} />
    </div>
  );
} 