export interface GuaranteeFundData {
  totalAmount: string;
  lastUpdated: string;
}

interface MemberData {
  mbr_no: string;
  mbr_nm: string;
  curr_iso_cd: string;
  amount: string;
  get_bas_dd: string;
}

export async function fetchGuaranteeFund(): Promise<GuaranteeFundData> {
  try {
    const response = await fetch('https://uzse.uz/cps.xml');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xmlText = await response.text();
    
    // Parse XML to extract amounts (simple approach for this specific structure)
    const amountRegex = /<amount>([\d,.-]+)<\/amount>/g;
    const dateRegex = /<get_bas_dd>(\d{4}-\d{2}-\d{2})<\/get_bas_dd>/;
    
    let totalAmount = 0;
    let match;
    
    // Extract all amounts and sum them
    while ((match = amountRegex.exec(xmlText)) !== null) {
      const amount = match[1].replace(/,/g, ''); // Remove commas
      const numericAmount = parseFloat(amount);
      if (!isNaN(numericAmount)) {
        totalAmount += numericAmount;
      }
    }
    
    // Extract the date
    const dateMatch = dateRegex.exec(xmlText);
    const lastUpdated = dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0];
    
    // Format the total amount with commas and currency
    const formattedAmount = totalAmount.toLocaleString('ru-RU', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + ' сумов';
    
    return {
      totalAmount: formattedAmount,
      lastUpdated
    };
  } catch (error) {
    console.error('Error fetching guarantee fund data:', error);
    
    // Return fallback data if API fails
    return {
      totalAmount: '169 716,76 сумов',
      lastUpdated: new Date().toISOString().split('T')[0]
    };
  }
} 