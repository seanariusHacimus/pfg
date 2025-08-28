export interface GuaranteeFundData {
  totalAmount: string;
  lastUpdated: string;
}

export async function fetchGuaranteeFund(): Promise<GuaranteeFundData> {
  try {
    const response = await fetch('/api/guarantee-fund');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching guarantee fund data:', error);
    
    // Return fallback data if API fails
    return {
      totalAmount: '169 716,76 сумов',
      lastUpdated: new Date().toISOString().split('T')[0]
    };
  }
}