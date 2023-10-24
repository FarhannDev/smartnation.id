const useGenerateUniqueId = () => {
  const timestamp = new Date().getTime(); // Mengambil timestamp saat ini
  const random = Math.floor(Math.random() * 1000); // Menghasilkan angka acak antara 0 dan 999

  return `${timestamp}-${random}`;
};

export default useGenerateUniqueId;
