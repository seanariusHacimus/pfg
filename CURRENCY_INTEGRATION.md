# Currency and Stock Integration

## Overview

This project now integrates real-time currency exchange rates from the Central Bank of Uzbekistan (CBU) API and stock quotes from the Uzbekistan Stock Exchange (UZSE) API. The integration fetches live rates for USD, EUR, and RUB currencies, as well as stock data for UZAUTO and UZTELECOM, displaying them in the Header and Footer components.

## Implementation Details

### Files Created/Modified

1. **`src/services/currencyService.ts`** - Currency service that fetches data from CBU API
2. **`src/services/stockService.ts`** - Stock service that fetches data from UZSE API
3. **`src/hooks/useCurrencyRates.ts`** - Custom React hook for managing currency data
4. **`src/hooks/useStockQuotes.ts`** - Custom React hook for managing stock data
5. **`src/components/layout/Header.tsx`** - Updated to use real-time currency and stock data
6. **`src/components/layout/Footer.tsx`** - Updated to use real-time currency data

### API Integration

#### Currency API (CBU)
- **API Endpoint**: `https://cbu.uz/ru/arkhiv-kursov-valyut/json/`
- **Supported Currencies**: USD, EUR, RUB
- **Update Frequency**: Every 5 minutes
- **Fallback**: Static data if API fails

#### Stock API (UZSE)
- **API Endpoint**: `https://api.uzse.uz/v1/quotes?symbols=UZAUTO,UZTELECOM`
- **Supported Stocks**: UZAUTO, UZTELECOM
- **Update Frequency**: Every 2 minutes
- **Status**: Currently using fallback data (API not accessible)
- **Fallback**: Static data if API fails

### Features

- ✅ Real-time currency rates from CBU API
- ✅ Stock quotes (currently using fallback data - UZSE API not accessible)
- ✅ Automatic updates (currency: 5 minutes, stocks: 2 minutes)
- ✅ Loading states while fetching data
- ✅ Error handling with fallback data
- ✅ Proper formatting of rates, changes, and stock prices
- ✅ Responsive design for mobile and desktop

### Data Structure

#### Currency API Response
The CBU API returns currency data in the following format:
```typescript
interface CBUApiResponse {
  id: number;
  Code: string;
  Ccy: string;        // Currency code (USD, EUR, RUB)
  CcyNm_RU: string;   // Currency name in Russian
  Nominal: number;     // Nominal value
  Rate: number;        // Exchange rate
  Diff: number;        // Change from previous day
  Date: string;        // Date of the rate
}
```

#### Stock API Response
The UZSE API returns stock data in the following format:
```typescript
interface UZSEApiResponse {
  symbol: string;      // Stock symbol (UZAUTO, UZTELECOM)
  price: number;       // Current stock price
  change: number;      // Price change
  changePercent: number; // Percentage change
  volume?: number;     // Trading volume
  high?: number;       // Day high
  low?: number;        // Day low
  open?: number;       // Opening price
}
```

### Current Data (as of testing)

#### Currency Rates
- **USD**: 12,634.34 UZS (-18.98)
- **EUR**: 14,821.34 UZS (-0.76)
- **RUB**: 162.37 UZS (+0.48)

#### Stock Quotes
- **UZAUTO**: 13,003.95 UZS (+14.88)
- **UZTELECOM**: 13,003.95 UZS (+14.88)

### Usage

The currency and stock data is automatically fetched and displayed in:
- Header ticker (desktop only) - shows both stocks and currencies
- Footer currency section (mobile and desktop) - shows currencies only

No additional configuration is required - the integration works out of the box.

### Error Handling

If the API is unavailable or returns an error, the system falls back to static data to ensure the UI remains functional.

### Performance

- Currency data is cached and updated every 5 minutes
- Stock data is cached and updated every 2 minutes
- Loading states prevent layout shifts
- Minimal impact on page performance 