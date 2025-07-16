import { useState, useEffect } from 'react';
import { fetchStockQuotes, StockQuote } from '../services/stockService';

export function useStockQuotes() {
  const [stockQuotes, setStockQuotes] = useState<StockQuote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      setError(null);
      const quotes = await fetchStockQuotes();
      setStockQuotes(quotes);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch stock quotes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch quotes immediately
    fetchQuotes();

    // Set up interval to fetch quotes every 2 minutes (stocks update more frequently)
    const interval = setInterval(fetchQuotes, 2 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    stockQuotes,
    loading,
    error,
    refetch: fetchQuotes
  };
} 