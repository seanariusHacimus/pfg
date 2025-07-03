interface DealParty {
  name: string;
}

interface DealCardProps {
  title: string;
  parties: DealParty[];
  amount: string;
}

export default function DealCard({ title, parties, amount }: DealCardProps) {
  return (
    <div className="max-w-[250px] w-full md:max-w-auto relative flex flex-col bg-white border border-[#E8E8E8] box-border flex-1 min-w-[250px] min-h-[260px]">
      {/* Title */}
      <h4 className="text-[16px] leading-[18px] font-medium text-[#2450C4] mb-auto px-5 pt-5">
        {title}
      </h4>
      
      {/* Deal parties label */}
      <div className="mt-8 px-5">
        <span className="block text-[14px] leading-[17px] font-normal text-[#ACACAC] tracking-[0.01em] mb-2">
          Стороны сделки
        </span>
        
        {/* Deal parties */}
        {parties.map((party, index) => (
          <div key={index} className="flex gap-2 mb-1">
            <span className="text-[14px] leading-[17px] font-normal text-[#ACACAC] tracking-[0.01em]">
              {index + 1}
            </span>
            <span className="text-[14px] leading-[17px] font-normal text-black tracking-[0.01em]">
              {party.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Separator line */}
      <div className="w-full border-t-[0.5px] border-[#E8E8E8] my-[18px]"></div>
      
      {/* Deal amount */}
      <div className="flex justify-between px-5 pb-[18px]">
        <span className="text-[14px] leading-[17px] font-normal text-[#ACACAC] tracking-[0.01em]">
          Сумма сделки
        </span>
        <span className="text-[14px] leading-[17px] font-normal text-black tracking-[0.01em]">
          {amount}
        </span>
      </div>
    </div>
  );
} 