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

export const getUniqueValues = () => {};
