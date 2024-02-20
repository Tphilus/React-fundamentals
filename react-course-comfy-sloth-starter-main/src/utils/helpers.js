export const formatPrice = (number) => {
  //   const newNumber = Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   }).format(number / 100);
  //   return newNumber;

  ///====== =========///
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "color") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
