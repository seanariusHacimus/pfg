import HeaderWhite from '../../components/layout/HeaderWhite';
import Footer from '../../components/layout/Footer';
import FeaturedNewsItem from '../../components/home/FeaturedNewsItem';
import RegularNewsItem from '../../components/home/RegularNewsItem';
import { newsData } from '../../components/data';

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWhite />
      
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

        {/* Featured News Section */}
        <section className="bg-white text-black px-5">
          <div className="container max-w-[1340px] m-auto pt-0 md:pt-[50px] pb-[28px] md:pb-[28px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[45px] md:gap-x-[56px] md:gap-y-[45px]">
              {newsData.featuredNewsGrid.map((news, index) => (
                <FeaturedNewsItem 
                  key={index}
                  title={news.title}
                  category={news.category}
                  date={news.date}
                  image={news.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Regular News Section */}
        <section className="bg-white text-black px-5">
          <div className="container max-w-[1340px] m-auto pt-[28px] md:pt-[28px] pb-[30px] md:pb-[50px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[45px] gap-x-0 md:gap-x-[56px]">
              {newsData.regularNews.map((news, index) => (
                <RegularNewsItem 
                  key={index}
                  title={news.title}
                  category={news.category}
                  date={news.date}
                  image={news.image}
                />
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="flex justify-center mt-[70px] md:mt-[80px]">
              <button className="inline-flex items-center justify-center px-[25px] py-[19px] w-[250px] h-[45px] md:max-w-[240px] md:h-[58px] md:px-[26px] md:py-[18px] bg-[#F3F7FA] border border-[#0046FF] text-black text-[14px] leading-[17px] md:text-[18px] md:leading-[22px] tracking-[0.01em] font-sans font-light text-center hover:bg-[#E8F2F5] transition-colors duration-200">
                Загрузить ещё
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
