const useCreateSlug: (text: string) => string = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ /g, "-") // Mengganti spasi dengan tanda "-"
    .replace(/[^\w-]+/g, "") // Menghapus karakter non-alphanumeric kecuali "-"
    .replace(/--+/g, "-"); // Mengganti dua atau lebih tanda "-" berturut-turut dengan satu tanda "-"
};

export default useCreateSlug;
