interface DealCardSkeletonProps {
  width?: number;
  fullWidth?: boolean;
  noBorderOnMobile?: boolean;
}

export default function DealCardSkeleton({ 
  width = 240,
  fullWidth = false,
  noBorderOnMobile = false
}: DealCardSkeletonProps) {
  const borderClass = noBorderOnMobile ? 'border md:border-[#E8E8E8] border-transparent' : 'border border-[#E8E8E8]';
  
  return (
    <div 
      className={`relative flex flex-col bg-white ${borderClass} box-border min-h-[260px] ${fullWidth ? 'w-full' : ''} animate-pulse`} 
      style={!fullWidth && width ? { width: `${width}px` } : {}}
    >
      {/* Company Name Skeleton */}
      <div className="px-5 pt-[16px]">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
      
      {/* Date Skeleton */}
      <div className="mb-[60px] px-5 mt-2">
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
      
      {/* Share Information Skeleton */}
      <div className="mb-[10px] px-5">
        <div className="h-3.5 bg-gray-200 rounded w-2/3 mb-1"></div>
        <div className="h-3.5 bg-gray-200 rounded w-4/5"></div>
      </div>
      
      {/* Percentage Skeleton */}
      <div className="px-5 mb-[10px]">
        <div className="h-3.5 bg-gray-200 rounded w-1/2 mb-1"></div>
        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
      </div>
      
      {/* Deal Amount Skeleton */}
      <div className="mt-auto border-t border-[#E8E8E8] px-5 py-[16px]">
        <div className="h-3.5 bg-gray-200 rounded w-2/3 mb-1"></div>
        <div className="h-3.5 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
}
