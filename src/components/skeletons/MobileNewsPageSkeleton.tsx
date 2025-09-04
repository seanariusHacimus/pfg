import MobileNewsItemSkeleton from './MobileNewsItemSkeleton';

export default function MobileNewsPageSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 pt-[75px] md:pt-[75px]">
        {/* News Heading Section */}
        <section className="bg-white text-black px-5">
          <div className="container max-w-[1340px] m-auto pt-[109px] md:pt-[145px] pb-[36px] md:pb-[20px]">
            <h1 className="text-[30px] leading-[31px] md:text-[82px] md:leading-[75px] font-normal text-[#2450C4] tracking-[-0.04em] font-display">
              Новости
            </h1>
          </div>
        </section>

        {/* Mobile-Optimized News Section Skeleton */}
        <section className="bg-white text-black px-5">
          <div className="container max-w-[1340px] m-auto pt-0 md:pt-[50px] pb-[58px] md:pb-[58px]">
            {/* Mobile: Single column layout, Desktop: 2-column grid */}
            <div className="block md:grid md:grid-cols-2 md:gap-x-[56px] md:gap-y-[45px]">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="md:mb-[45px]">
                  <MobileNewsItemSkeleton />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
