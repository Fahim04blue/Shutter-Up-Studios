import { useEffect, useState } from 'react';

const useAsync = (asyncFunction) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('pending');
    setData(null);
    setError(null);
    asyncFunction().then((res) => {
      setData(res);
      setStatus('success');
      setError(null);
    }).catch((err) => {
      setError(err);
      setStatus('error');
      setData(null);
    });
  }, [asyncFunction]);
  return {
    data,
    isLoading: status === 'pending',
    isSuccess: status === 'success',
    isError: status === 'error',
    error,
  };
};

export default useAsync;
