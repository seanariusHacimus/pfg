import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://uzse.uz/cps.xml', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xmlText = await response.text();
    
    // Parse XML to extract amounts
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
    
    return NextResponse.json({
      totalAmount: formattedAmount,
      lastUpdated
    });
  } catch (error) {
    console.error('Error fetching guarantee fund data:', error);
    
    // Return fallback data if API fails
    return NextResponse.json({
      totalAmount: '169 716,76 сумов',
      lastUpdated: new Date().toISOString().split('T')[0]
    });
  }
}
