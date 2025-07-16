export interface CurrencyRate {
  currency: string;
  icon: 'dollar' | 'euro' | 'rubl';
  value: string;
  change: string;
  code: string;
}

export interface CBUApiResponse {
  id: number;
  Code: string;
  Ccy: string;
  CcyNm_RU: string;
  Nominal: number;
  Rate: number;
  Diff: number;
  Date: string;
}

const CURRENCY_MAPPING = {
  USD: { icon: 'dollar' as const, currency: 'доллара' },
  EUR: { icon: 'euro' as const, currency: 'евро' },
  RUB: { icon: 'rubl' as const, currency: 'рубля' }
};

export async function fetchCurrencyRates(): Promise<CurrencyRate[]> {
  try {
    const response = await fetch('https://cbu.uz/ru/arkhiv-kursov-valyut/json/');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: CBUApiResponse[] = await response.json();
    
    const rates: CurrencyRate[] = [];
    
    // Filter for USD, EUR, and RUB
    const targetCurrencies = ['USD', 'EUR', 'RUB'];
    
    targetCurrencies.forEach(code => {
      const currencyData = data.find(item => item.Ccy === code);
      
      if (currencyData) {
        const { icon, currency } = CURRENCY_MAPPING[code as keyof typeof CURRENCY_MAPPING];
        
        // Format the rate value
        const formattedValue = currencyData.Rate.toLocaleString('ru-RU', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        
        // Format the change value
        const changeValue = Number(currencyData.Diff);
        const formattedChange = changeValue >= 0 
          ? `+${changeValue.toFixed(2)}`
          : `${changeValue.toFixed(2)}`;
        
        rates.push({
          currency,
          icon,
          value: formattedValue,
          change: formattedChange,
          code
        });
      }
    });
    
    return rates;
  } catch (error) {
    console.error('Error fetching currency rates:', error);
    
    // Return fallback data if API fails
    return [
      { currency: 'доллара', icon: 'dollar', value: '13 003.95', change: '+14.88', code: 'USD' },
      { currency: 'евро', icon: 'euro', value: '13 003.95', change: '+14.88', code: 'EUR' },
      { currency: 'рубля', icon: 'rubl', value: '13 003.95', change: '+14.88', code: 'RUB' }
    ];
  }
} 