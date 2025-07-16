export interface StockQuote {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
}

export interface UZSEApiResponse {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume?: number;
  high?: number;
  low?: number;
  open?: number;
}

const STOCK_MAPPING = {
  UZAUTO: { name: 'UZAUTO' },
  UZTELECOM: { name: 'UZTELECOM' }
};

export async function fetchStockQuotes(): Promise<StockQuote[]> {
  try {
    // For now, return fallback data since UZSE API is not accessible
    // This can be updated when the API becomes available
    console.log('UZSE API not accessible, using fallback data');
    
    return [
      { symbol: 'UZAUTO', name: 'UZAUTO', price: '13 003.95', change: '+14.88', changePercent: '+0.12%' },
      { symbol: 'UZTELECOM', name: 'UZTELECOM', price: '13 003.95', change: '+14.88', changePercent: '+0.12%' }
    ];
    
    // Uncomment the following code when UZSE API becomes available:
    /*
    const response = await fetch('https://api.uzse.uz/v1/quotes?symbols=UZAUTO,UZTELECOM', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: UZSEApiResponse[] = await response.json();
    
    const quotes: StockQuote[] = [];
    
    data.forEach(stockData => {
      const { name } = STOCK_MAPPING[stockData.symbol as keyof typeof STOCK_MAPPING] || { name: stockData.symbol };
      
      // Format the price value
      const formattedPrice = Number(stockData.price).toLocaleString('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      
      // Format the change value
      const changeValue = Number(stockData.change);
      const formattedChange = changeValue >= 0 
        ? `+${changeValue.toFixed(2)}`
        : `${changeValue.toFixed(2)}`;
      
      // Format the change percent
      const changePercentValue = Number(stockData.changePercent);
      const formattedChangePercent = changePercentValue >= 0 
        ? `+${changePercentValue.toFixed(2)}%`
        : `${changePercentValue.toFixed(2)}%`;
      
      quotes.push({
        symbol: stockData.symbol,
        name,
        price: formattedPrice,
        change: formattedChange,
        changePercent: formattedChangePercent
      });
    });
    
    return quotes;
    */
  } catch (error) {
    console.error('Error fetching stock quotes:', error);
    
    // Return fallback data if API fails
    return [
      { symbol: 'UZAUTO', name: 'UZAUTO', price: '13 003.95', change: '+14.88', changePercent: '+0.12%' },
      { symbol: 'UZTELECOM', name: 'UZTELECOM', price: '13 003.95', change: '+14.88', changePercent: '+0.12%' }
    ];
  }
} 