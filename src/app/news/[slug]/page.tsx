import HeaderWhite from '../../../components/layout/HeaderWhite';
import Footer from '../../../components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';
import RegularNewsItem from '../../../components/home/RegularNewsItem';
import { newsData } from '../../../components/data';

// This would normally come from a database or API
const getArticleBySlug = (slug: string) => {
  const articles: { [key: string]: { title: string; category: string; date: string; image: string; content: string; slug?: string } } = {
    'uzbekistan-chinese-enterprises': {
      title: 'В Узбекистане зарегистрировано свыше 16,6 тыс. предприятий с китайским капиталом',
      category: 'Рынки',
      date: '15 июля 2025',
      image: '/media/4.jpg',
      slug: 'uzbekistan-chinese-enterprises',
      content: `
        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Рост китайских инвестиций в Узбекистане</h3>
        <p>По данным Агентства по привлечению иностранных инвестиций при Президенте Республики Узбекистан, в стране зарегистрировано свыше 16,6 тысяч предприятий с китайским капиталом. Это свидетельствует о значительном росте экономического сотрудничества между двумя странами.</p>

        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Основные сферы инвестирования</h3>
        <p>Китайские инвестиции охватывают широкий спектр отраслей экономики Узбекистана, включая промышленность, сельское хозяйство, энергетику, транспорт и логистику. Особое внимание уделяется проектам в рамках инициативы "Один пояс, один путь".</p>

        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Перспективы развития</h3>
        <p>Эксперты отмечают, что данная тенденция способствует модернизации экономики Узбекистана, созданию новых рабочих мест и трансферу технологий. Правительство продолжает создавать благоприятные условия для привлечения иностранных инвестиций.</p>

        <p style="margin-top: 30px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #2450C4; font-style: italic;">
          Источник: <a href="#" style="color: #2450C4; text-decoration: none;">Агентство по привлечению иностранных инвестиций при Президенте РУз</a>
        </p>
      `
    },
    'uzbekistan-capital-market-conference': {
      title: 'Рынок капитала Узбекистана: новые инструменты и рост интереса инвесторов',
      category: 'Рынки',
      date: '14 июля 2025',
      image: '/media/1.jpg',
      slug: 'uzbekistan-capital-market-conference',
      content: `
        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Стратегическое окно возможностей</h3>
        <p>Мансуржон Расулев, директор Агентства по привлечению иностранных инвестиций, отметил уникальное положение Узбекистана на фоне других развивающихся рынков. По его словам, эффект реформ 2017–2019 гг. и готовность к переменам создают благоприятную среду для новых игроков.</p>

        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Интерес частного капитала растет</h3>
        <p>Анвар Расулев (Ansher Capital) подчеркнул рост интереса к Узбекистану: если ранее инвесторы действовали осторожно, то сейчас речь идет о создании целых финансово-технологических экосистем.</p>

        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Биржевые облигации и ИИС – драйверы роста</h3>
        <p>По словам Георгия Паресишвили, главы РФБ «Тошкент», индивидуальные инвестиционные счета и биржевые облигации получили налоговые стимулы и могут обеспечить инвесторам доходность до 32% годовых.</p>

        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Розничные инвесторы становятся активнее</h3>
        <p>Толибжон Мирзакулов (Jett) привел статистику: за год количество сделок от физлиц и их средняя сумма заметно выросли. Доля облигаций в структуре торгов достигла 40%. Он также подчеркнул необходимость популяризации IPO среди населения для устойчивого роста стартапов.</p>

        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Регулятор о развитии инструментов</h3>
        <p>Вячеслав Пак, первый замдиректора НАПП, заявил, что рынок облигаций растет быстрыми темпами — с 300 млрд до 1,9 трлн сумов, однако существует нехватка регулирующих инструментов. Регулятор работает над запуском торговли иностранными бумагами и выпуском ипотечных облигаций.</p>

        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Ипотечные облигации — как ответ на жилищный спрос</h3>
        <p>С учетом ежегодного прироста населения в ~1 млн человек ипотечные облигации рассматриваются как ключевой инструмент поддержки жилищного строительства и разгрузки банковских балансов.</p>

        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Среди ключевых сессий конференции:</h3>
        <ul style="margin: 12px 0; padding-left: 20px;">
          <li>«Как выйти на фондовый рынок и привлечь инвесторов»</li>
          <li>«Куда смещается фокус инвестора в Узбекистане»</li>
          <li>«Рынок облигаций Узбекистана: новые инструменты инвестирования»</li>
          <li>«Где работают деньги»</li>
        </ul>
        
        <p style="margin-top: 30px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #2450C4; font-style: italic;">
          Источник: <a href="#" style="color: #2450C4; text-decoration: none;">Kursiv Uzbekistan</a>
        </p>
      `
    },
    'pfg-corporate-governance-training': {
      title: 'Сотрудники PFG прошли обучение по корпоративному управлению',
      category: 'Новости',
      date: '14 июля 2025',
      image: '/media/2.jpg',
      slug: 'pfg-corporate-governance-training',
      content: `
        <p>Сотрудники ООО "Premium Finance" успешно завершили обучение в Высшей школе бизнеса и предпринимательства при Кабинете Министров Республики Узбекистан по программе «Корпоратив бошқарувнинг замонавий амалиёти ва тамойиллари» / «Modern practice and principles of Corporate Governance».</p>

        <p>По итогам обучения все участники получили сертификаты, подтверждающие успешное освоение курса. Программа охватывала современные подходы к корпоративному управлению, включая международные стандарты, практические кейсы и роль независимых членов Наблюдательного совета в компаниях с государственным участием.</p>

        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">В число сертифицированных сотрудников вошли:</h3>
        <ul style="margin: 12px 0; padding-left: 20px;">
          <li>Ойбек Кадиров</li>
          <li>Улугбек Юлдашев</li>
          <li>Умиджон Косимов</li>
        </ul>

        <p>На следующем этапе сотрудники Компании уже подали документы для прохождения собеседования на получение сертификата корпоративного управляющего. Данный шаг открывает дополнительные профессиональные возможности — в частности, участие в Наблюдательных советах акционерных обществ с долей государства в качестве независимого члена.</p>

        <p>Полученные знания и навыки будут способствовать дальнейшему профессиональному росту команды и эффективной реализации задач в области корпоративного управления.</p>
        
        <p style="margin-top: 30px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #2450C4; font-style: italic;">
          Источник: <a href="#" style="color: #2450C4; text-decoration: none;">Premium Finance Group</a>
        </p>
      `
    },
    'pfg-corporate-governance-assessment': {
      title: 'Сотрудник PFG принял участие в оценке корпоративного управления (совместно с АБР)',
      category: 'Новости',
      date: '12 июня 2025',
      image: '/media/3.jpg',
      slug: 'pfg-corporate-governance-assessment',
      content: `
        <p>В рамках оценки Умиджон Косимов проанализировал 9 акционерных обществ с участием государства, применяя обновлённую методологию оценки, разработанную с учётом международных стандартов и практик ОЭСР.</p>

        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Оценка охватывала ключевые направления:</h3>
        <ul style="margin: 12px 0; padding-left: 20px;">
          <li>деятельность Наблюдательного совета;</li>
          <li>раскрытие информации и транспарентность;</li>
          <li>внутренний контроль и управление рисками;</li>
          <li>стратегическое планирование и взаимодействие с государственным акционером.</li>
        </ul>

        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Основные выводы по результатам оценки:</h3>
        <ul style="margin: 12px 0; padding-left: 20px;">
          <li>Корпоративное управление в большинстве государственных предприятий остаётся формальным — Наблюдательные советы не реализуют стратегическую функцию в полной мере;</li>
          <li>В ряде организаций отсутствует независимость в принятии решений, а стратегическая роль совета зачастую подменяется операционными задачами;</li>
          <li>Раскрытие информации часто происходит с нарушением сроков и без нужной полноты, внутренний аудит формален или отсутствует;</li>
          <li>Наивысшие баллы получали те предприятия, где наблюдаются признаки институционального развития, внедрены комитеты и имеются службы внутреннего аудита.</li>
        </ul>

        <p>Полученные результаты были оформлены в аналитический отчёт и направлены АБР и соответствующим государственным органам. Участие нашего сотрудника в проекте стало важным вкладом в развитие культуры корпоративного управления и повышение прозрачности управления государственными активами в Узбекистане.</p>
        
        <p style="margin-top: 30px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #2450C4; font-style: italic;">
          Источник: <a href="#" style="color: #2450C4; text-decoration: none;">Premium Finance Group</a>
        </p>
      `
    },
    'uzbekistan-chinese-investment': {
      title: 'В Узбекистане зарегистрировано свыше 16,6 тыс. предприятий с китайским капиталом',
      category: 'Капитал',
      date: '14 июля 2025',
      image: '/media/new-1.png',
      slug: 'uzbekistan-chinese-investment',
      content: `
        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Структурные изменения</h3>
        <p>Наряду с ростом общего числа предприятий наблюдается перераспределение в их структуре:</p>
        <ul style="margin: 12px 0; padding-left: 20px;">
          <li>Доля совместных предприятий снизилась почти вдвое — с 47% в 2021 году до 24,7% в 2025 году.</li>
          <li>Доля полностью иностранных предприятий, напротив, выросла с 53% до 75,3%.</li>
        </ul>

        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Основные отрасли роста</h3>
        <p>Рост числа предприятий с иностранным капиталом в течение года был обеспечен за счёт:</p>
        <ul style="margin: 12px 0; padding-left: 20px;">
          <li>торговли (+1 205 компаний),</li>
          <li>информационно-коммуникационного сектора (+256),</li>
          <li>строительства (+271).</li>
        </ul>

        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Региональное распределение</h3>
        <p>Более 64% предприятий с иностранным участием зарегистрировано в Ташкенте (10 713), из них 8 433 – полностью иностранные компании. Среди регионов наибольшая концентрация отмечена:</p>
        <ul style="margin: 12px 0; padding-left: 20px;">
          <li>в Ташкентской области — 12,3%,</li>
          <li>Самаркандской — 3,7%,</li>
          <li>Сурхандарьинской — 3,3%.</li>
        </ul>

        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">ТОП-5 стран-инвесторов по количеству предприятий:</h3>
        <ol style="margin: 12px 0; padding-left: 20px;">
          <li>Китай – 4 192 предприятия (из них 3 545 — полностью иностранные),</li>
          <li>Россия – 3 098 (2 193 — иностранные),</li>
          <li>Турция – 2 007,</li>
          <li>Казахстан – 1 157,</li>
          <li>Южная Корея – 687.</li>
        </ol>

        <h3 style="color: #0A0A0A; font-size: 18px; font-weight: 500; margin: 20px 0 12px 0;">Динамика прироста за первое полугодие 2025 года:</h3>
        <ul style="margin: 12px 0; padding-left: 20px;">
          <li>Китай — +835 предприятий (+24,9%),</li>
          <li>Турция — +181,</li>
          <li>Россия — +161,</li>
          <li>Казахстан — +116.</li>
        </ul>

        <p>Китай не только удерживает лидерство по количеству действующих компаний (25,1% от общего числа), но и показывает наиболее активную динамику роста. В 2024 году он обогнал Россию и продолжает усиливать своё присутствие.</p>
        
        <p style="margin-top: 20px;"><strong>Источник:</strong> <a href="https://gazeta.uz/ru/2025/07/14/investors" target="_blank" rel="noopener noreferrer" style="color: #2450C4; text-decoration: none;">gazeta.uz</a></p>
      `
    },
    'moscow-exchange-morning-session': {
      title: 'Московская биржа возобновляет утреннюю сессию с 27 января 2025 года',
      category: 'Финансовые рынки',
      date: '27 января 2025',
      image: '/media/new-4.png',
      content: `
        <p>Банковский сектор закрыл критические моменты в вопросах импортозамещения, но вопрос еще многолетний. Эксперты отмечают, что банковские организации в первую очередь разработали операционные системы и логистические цепи продуктов. Особый вызов для индустрии представляет проведение интеграции с российскими IT-компаниями на стоит задач внедрения инновационной сети.</p>

        <p>Перед IT-компаниями на стоит задач внедрения глобальных вендоров.</p>

        <p>Индустрия нацелена на перспективу содержания ABC, исходя из результатов последней базы. Такой подход приведет к созданию новой классов систем – и в перспективе вида как эти решения уже не украинцы, — этими период заместитель генерального директора по стратегии и развитию бизнеса группы «Открытие Дмитрий Харитонов».</p>

        <p>По мнению экспертов, российские банки должны перейти на использование Банк-формации. Сейчас до опыт каждый и новой информации на других, менее информационных индустрии. По мнению спикера, отмерили кросс-индустриальных инноваций и партнерств в инвесторах может стать основой для разработки эффективных решений для отдельных отраслей экономики.</p>

        <p>Генеральный директор и основатель бизнес-платформы ROWI Виктор Воронин, директор департамента финансовой политики Минфина России Иван Чебесков, вице-президент Ассоциации банков России Алексей Войлуков, генеральный директор группы «Финансовые технологии» Александр Бражников, исполнительный директор НСПК Владимир Комлев, а также вице-президент по стратегии МТС Банка Сергей Улуев.</p>

        <p>Подробнее о мероприятии можно узнать на официальном сайте Банковского.</p>
      `
    },
    'nomad-capital-uzbekistan': {
      title: 'Фонд Nomad Capital вложил $20 млн в логистику Узбекистана',
      category: 'Инвестиции',
      date: '25 июня 2025',
      image: '/media/new-1.png',
      content: `
        <p>Международный инвестиционный фонд Nomad Capital объявил о крупной инвестиции в размере $20 миллионов в развитие логистической инфраструктуры Узбекистана. Средства будут направлены на модернизацию транспортных узлов и создание современных складских комплексов.</p>

        <p>Инвестиции позволят значительно улучшить логистические возможности страны и укрепить позиции Узбекистана как важного транзитного узла в регионе Центральной Азии.</p>

        <p>По словам представителей фонда, проект направлен на поддержку экономического роста страны и развитие торговых связей с соседними государствами. Ожидается, что новая логистическая инфраструктура позволит сократить время доставки грузов и снизить транспортные расходы.</p>
      `
    }
  };
  
  return articles[slug as keyof typeof articles] || null;
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsArticle({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWhite />
      
      {/* Main Content */}
      <main className="flex-1 pt-[75px] md:pt-[75px]">
        {/* Article Content */}
        <section className="bg-white text-black px-5">
          <div className="container max-w-[1340px] m-auto pt-[60px] md:pt-[50px] pb-[50px] md:pb-[100px]">
            
            {/* Mobile Layout */}
            <div className="flex flex-col lg:hidden">
              {/* Title */}
              <h1 className="text-[24px] leading-[26px] font-normal text-black font-display mb-[20px]">
                {article.title}
              </h1>
              
              {/* Metadata */}
              <div className="flex items-center gap-[0px] mb-[30px]">
                <Link href="/news" className="text-[14px] text-[#2450C4] hover:opacity-80">
                  {article.category}
                </Link>
                <span className="text-[14px] text-[#A0A0A0] mx-2">•</span>
                <span className="text-[14px] text-[#A0A0A0]">{article.date}</span>
              </div>

              {/* Thumbnail */}
              <div className="w-full h-[200px] overflow-hidden mb-[20px]">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  width={665}
                  height={353}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-row gap-[50px] pb-[40px]">
              {/* Left Column - Title and Metadata */}
              <div className="w-[50%] flex flex-col justify-between">
                <h1 className="text-[34px] leading-[36px] font-normal text-black font-display">
                  {article.title}
                </h1>
                
                {/* Metadata */}
                <div className="flex items-center gap-[0px] mt-auto">
                  <Link href="/news" className="text-[14px] text-[#2450C4] hover:opacity-80">
                    {article.category}
                  </Link>
                  <span className="text-[14px] text-[#A0A0A0] mx-2">•</span>
                  <span className="text-[14px] text-[#A0A0A0]">{article.date}</span>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="w-[50%]">
                <div className="w-full h-[353px] overflow-hidden">
                  <Image 
                    src={article.image} 
                    alt={article.title}
                    width={665}
                    height={353}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="hidden lg:block w-full h-[1px] bg-[#E5E5E5]"></div>

            {/* Mobile Content Layout */}
            <div className="flex flex-col lg:hidden pt-[20px] pb-[40px]">
              {/* Description Text */}
              <div className="mb-[30px]">
                <p className="text-[16px] leading-[24px] font-light text-[#2450C4] text-left">
                  {article.slug === 'uzbekistan-capital-market-conference' ? 'В Ташкенте состоялась конференция «Рынок капитала: новые возможности для инвестирования», организованная Kursiv Uzbekistan при поддержке ТВС Bank, Payme, Universal Bank и Национальной ассоциации инвестиционных институтов. Эксперты обсудили стратегическое развитие финансового рынка страны, новые инструменты инвестирования и актуальные вызовы для регуляторов.' : 
                   article.slug === 'pfg-corporate-governance-training' ? 'Сотрудники ООО "Premium Finance" успешно завершили обучение в Высшей школе бизнеса и предпринимательства при Кабинете Министров Республики Узбекистан по программе «Корпоратив бошқарувнинг замонавий амалиёти ва тамойиллари» / «Modern practice and principles of Corporate Governance».' :
                   article.slug === 'pfg-corporate-governance-assessment' ? 'Сотрудник ООО "Premium Finance" Умиджон Косимов принял участие в масштабной работе по оценке систем корпоративного управления акционерных обществ с государственным участием в рамках гранта Азиатского банка развития (АБР). Проект реализовывался в сотрудничестве с международными экспертами и консультантами АБР в первой половине 2025 года.' :
                   'По данным Национального комитета по статистике, на 1 июля 2025 года в Узбекистане зарегистрировано 16 685 действующих предприятий с участием иностранного капитала, что на 2 805 компаний больше, чем годом ранее (+20%). В течение последних пяти лет этот показатель вырос в 1,3 раза.'}
                </p>
              </div>

              {/* Article Content */}
              <div>
                <div 
                  className="text-[16px] leading-[24px] font-light text-black text-left [&>p]:text-left [&>p]:mb-4"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </div>

            {/* Desktop Content Layout */}
            <div className="hidden lg:flex flex-row gap-[50px] py-[40px]">
              {/* Left Column - Description Text */}
              <div className="w-[50%]">
                <p className="text-[18px] leading-[28px] font-light text-[#2450C4] text-left">
                  {article.slug === 'uzbekistan-capital-market-conference' ? 'В Ташкенте состоялась конференция «Рынок капитала: новые возможности для инвестирования», организованная Kursiv Uzbekistan при поддержке ТВС Bank, Payme, Universal Bank и Национальной ассоциации инвестиционных институтов. Эксперты обсудили стратегическое развитие финансового рынка страны, новые инструменты инвестирования и актуальные вызовы для регуляторов.' : 
                   article.slug === 'pfg-corporate-governance-training' ? 'Сотрудники ООО "Premium Finance" успешно завершили обучение в Высшей школе бизнеса и предпринимательства при Кабинете Министров Республики Узбекистан по программе «Корпоратив бошқарувнинг замонавий амалиёти ва тамойиллари» / «Modern practice and principles of Corporate Governance».' :
                   article.slug === 'pfg-corporate-governance-assessment' ? 'Сотрудник ООО "Premium Finance" Умиджон Косимов принял участие в масштабной работе по оценке систем корпоративного управления акционерных обществ с государственным участием в рамках гранта Азиатского банка развития (АБР). Проект реализовывался в сотрудничестве с международными экспертами и консультантами АБР в первой половине 2025 года.' :
                   'По данным Национального комитета по статистике, на 1 июля 2025 года в Узбекистане зарегистрировано 16 685 действующих предприятий с участием иностранного капитала, что на 2 805 компаний больше, чем годом ранее (+20%). В течение последних пяти лет этот показатель вырос в 1,3 раза.'}
                </p>
              </div>

              {/* Right Column - Article Content */}
              <div className="w-[50%]">
                <div 
                  className="text-[18px] leading-[28px] font-light text-black text-left [&>p]:text-left [&>p]:mb-4 [&>ul]:list-disc [&>ul]:ml-5 [&>li]:mb-1"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </div>

            {/* Bottom Separator */}
            <div className="w-full h-[1px] bg-[#E5E5E5]"></div>

            {/* More News Section */}
            <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[50px]">
              {/* Empty Left Column on Desktop */}
              <div className="hidden lg:block lg:w-[50%]"></div>
              
              {/* Right Column - More News */}
              <div className="w-full lg:w-[50%]">
                <h3 className="text-2xl sm:text-3xl md:text-[34px] leading-tight pt-[30px] pb-[30px] md:pb-[40px] text-[#2450C4] font-display font-normal">
                  Может быть интересно
                </h3>
                
                <div className="flex flex-col gap-[25px]">
                  {/* Show other articles excluding the current one */}
                  {[...newsData.smallNews, newsData.featuredNews]
                    .filter(news => news.slug !== slug)
                    .slice(0, 3)
                    .map((news, index) => (
                      <RegularNewsItem
                        key={index}
                        title={news.title}
                        category={news.category}
                        date={news.date}
                        image={news.image}
                        slug={news.slug}
                      />
                    ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
