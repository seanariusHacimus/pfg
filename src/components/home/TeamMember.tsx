import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  position: string;
  imageUrl: string;
}

export default function TeamMember({ name, position, imageUrl }: TeamMemberProps) {
  return (
    <div className="flex flex-col min-w-[170px] w-[170px] md:w-[260px] bg-white">
      {/* Photo Section */}
      <div className="relative h-[155px] md:h-[275px] overflow-hidden">
        <Image 
          src={imageUrl}
          alt={name}
          fill
          className="object-cover object-center"
        />
      </div>
      
      {/* Text Section */}
      <div className="h-[45px] bg-white flex flex-col justify-center px-0 pt-[11px]">
        {/* Name */}
        <h4 className="text-[14px] leading-[17px] font-normal tracking-[0.01em] text-black">
          {name}
        </h4>
        
        {/* Position */}
        <p className="text-[14px] leading-[17px] font-normal tracking-[0.01em] text-[#A0A0A0]">
          {position}
        </p>
      </div>
    </div>
  );
} 