import React from "react";

const Price = ({ price, sumClassname = "", usdClassname = "" }) => {
  const findTargetCurrency = (price, currency) => {
    const targetPrice = price.find((item) => item.currency === currency);
    return targetPrice;
  };

  return (
    <div className="flex justify-center items-center gap-3">
      <p className={`text-center text-main font-bold text-[22px]`}>
        <span className={sumClassname}>
          {findTargetCurrency(price, "uzs").amount} so'm
        </span>
      </p>
      <p className={`text-center text-secondary/[0.4] text-xl`}>
        <span className={usdClassname}>
          (${findTargetCurrency(price, "usd").amount})
        </span>
      </p>
    </div>
  );
};

export default Price;
