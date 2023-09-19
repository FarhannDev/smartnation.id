const useTimestamps = (timestamp, locale = 'id-ID') => {
  return new Date(timestamp).toLocaleDateString(locale, { dateStyle: 'long' });
};

export { useTimestamps };
