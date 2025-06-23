interface TeamMemberProps {
  name: string;
  position: string;
  imageUrl: string;
}

export default function TeamMember({ name, position, imageUrl }: TeamMemberProps) {
  return (
    <div 
      className="w-1/3 h-[340px] p-[30px] text-white bg-cover bg-center" 
      style={{ backgroundImage: `url('${imageUrl}')` }}
    > 
      <h4 className="font-bold">{name}</h4>
      <p className="font-sans font-light">{position}</p>
    </div>
  );
} 