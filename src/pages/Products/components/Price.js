import React from "react";

const Price = ({ price }) => {
  const findTargetCurrency = (price, currency) => {
    const targetPrice = price.find((item) => item.currency === currency);
    return targetPrice;
  };

  return (
    <div className="flex justify-center items-center gap-3">
      <h1 className="text-center text-orange-600 font-bold text-[22px]">
        {findTargetCurrency(price, "uzs").amount} so'm
      </h1>
      <h2 className="text-center text-secondary/[0.4] text-xl">
        (${findTargetCurrency(price, "usd").amount})
      </h2>
    </div>
  );
};

export default Price;