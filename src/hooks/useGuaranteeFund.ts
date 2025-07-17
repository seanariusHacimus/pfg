import { useState, useEffect } from 'react';
import { fetchGuaranteeFund, GuaranteeFundData } from '../services/guaranteeFundService';

export function useGuaranteeFund() {
  const [guaranteeFund, setGuaranteeFund] = useState<GuaranteeFundData>({
    totalAmount: '169 716,76 сумов',
    lastUpdated: new Date().toISOString().split('T')[0]
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchGuaranteeFund();
      setGuaranteeFund(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch guarantee fund data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch data immediately
    fetchData();

    // Set up interval to fetch data every 30 minutes (guarantee fund updates less frequently)
    const interval = setInterval(fetchData, 30 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    guaranteeFund,
    loading,
    error,
    refetch: fetchData
  };
} 