import { useState, useEffect } from 'react';
import { fetchCurrencyRates, CurrencyRate } from '../services/currencyService';

export function useCurrencyRates() {
  const [currencyRates, setCurrencyRates] = useState<CurrencyRate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRates = async () => {
    try {
      setLoading(true);
      setError(null);
      const rates = await fetchCurrencyRates();
      setCurrencyRates(rates);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch currency rates');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch rates immediately
    fetchRates();

    // Set up interval to fetch rates every 5 minutes
    const interval = setInterval(fetchRates, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    currencyRates,
    loading,
    error,
    refetch: fetchRates
  };
} 