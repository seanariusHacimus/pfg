interface DealCardProps {
  companyName: string;
  date: string;
  shareCount: string;
  shareDescription: string;
  percentage: string;
  percentageDescription: string;
  dealAmount: string;
  width?: number;
  fullWidth?: boolean;
}

export default function DealCard({ 
  companyName, 
  date, 
  shareCount, 
  shareDescription, 
  percentage, 
  percentageDescription, 
  dealAmount,
  width = 240,
  fullWidth = false
}: DealCardProps) {
  return (
    <div 
      className={`relative flex flex-col bg-white border border-[#E8E8E8] box-border min-h-[260px] ${fullWidth ? 'w-full' : ''}`} 
      style={!fullWidth && width ? { width: `${width}px` } : {}}
    >
      {/* Company Name */}
      <h4 className="text-[16px] leading-[100%] font-medium text-[#2450C4] px-5 pt-[16px]">
        {companyName}
      </h4>
      
      {/* Date */}
      <div className="mb-[60px] px-5">
        <span className="text-[12px] leading-[100%] font-normal text-[#ACACAC]">
          {date}
        </span>
      </div>
      
      {/* Share Information */}
      <div className="mb-[10px] px-5">
        <div className="text-[14px] leading-[100%] font-medium text-black mb-1">
          {shareCount}
        </div>
        <div className="text-[14px] leading-[100%] font-normal text-[#ACACAC]">
          {shareDescription}
        </div>
      </div>
      
      {/* Percentage */}
      <div className="px-5 mb-[10px]">
        <div className="text-[14px] leading-[100%] font-medium text-black mb-1">
          {percentage}
        </div>
        <div className="text-[12px] leading-[100%] font-normal text-[#ACACAC]">
          {percentageDescription}
        </div>
      </div>
      
      {/* Deal Amount */}
      <div className="mt-auto border-t border-[#E8E8E8] px-5 py-[16px]">
        <div className="text-[14px] leading-[100%] font-normal text-[#ACACAC] mb-1">
          сумма сделки
        </div>
        <div className="text-[14px] leading-[100%] font-medium text-black">
          {dealAmount}
        </div>
      </div>
    </div>
  );
}