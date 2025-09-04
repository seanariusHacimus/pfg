export default function FeaturedNewsItemSkeleton() {
  return (
    <div className='flex flex-col gap-[10px] w-full animate-pulse'>
      {/* Image skeleton - matches Next.js Image aspect ratio */}
      <div className="w-full aspect-[2/1] bg-gray-200 rounded"></div>
      
      <div className='mt-[5px]'>
        {/* Category and date skeleton - exact spacing and sizing */}
        <p className="text-[14px] flex items-center gap-[0px] mb-2">
          <span className="h-[14px] w-[50px] bg-gray-200 rounded inline-block"></span>
          <span className="w-[2px] h-[2px] bg-gray-300 rounded-full mx-2 inline-block"></span>
          <span className="h-[14px] w-[85px] bg-gray-200 rounded inline-block"></span>
        </p>
        
        {/* Title skeleton - matches text-2xl leading-[26px] */}
        <div className="pt-0 space-y-2">
          <div className="h-[26px] w-full bg-gray-200 rounded"></div>
          <div className="h-[26px] w-4/5 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
