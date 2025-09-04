import FeaturedNewsItemSkeleton from './FeaturedNewsItemSkeleton';

export default function NewsPageSkeleton() {
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

        {/* Featured News Section Skeleton */}
        <section className="bg-white text-black px-5">
          <div className="container max-w-[1340px] m-auto pt-0 md:pt-[50px] pb-[58px] md:pb-[58px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[45px] md:gap-x-[56px] md:gap-y-[45px]">
              {Array.from({ length: 4 }).map((_, index) => (
                <FeaturedNewsItemSkeleton key={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
