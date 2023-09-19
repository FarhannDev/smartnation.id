type Args = { timestamp: string; locale: string; dateStyle: string };

const useFormatter = (
  timestamp,
  locale = 'id-ID',
  dateStyle = 'long'
): Args => {
  return new Date(timestamp).toLocaleDateString(locale, {
    dateStyle: dateStyle,
  });
};

export { useFormatter };
