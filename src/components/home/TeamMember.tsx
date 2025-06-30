interface TeamMemberProps {
  name: string;
  position: string;
  imageUrl: string;
}

export default function TeamMember({ name, position, imageUrl }: TeamMemberProps) {
  return (
    <div className="relative w-[260px] h-[320px] bg-white">
      {/* Photo Section */}
      <div 
        className="absolute inset-0 top-0 h-[275px] bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      
      {/* Text Section */}
      <div className="absolute bottom-0 left-0 right-0 h-[45px] bg-white pt-[10px]">
        {/* Name */}
        <div className="absolute left-0 top-[6px] w-full">
          <h4 className="text-[14px] leading-[17px] font-normal tracking-[0.01em] text-black">
            {name}
          </h4>
        </div>
        
        {/* Position */}
        <div className="absolute left-0 top-[23px] w-full">
          <p className="text-[14px] leading-[17px] font-normal tracking-[0.01em] text-[#A0A0A0]">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
} 