import React, { useState } from "react";

const Card = ({ holderName = "Card Name", expDate = "0000", cardNumber }) => {
  // Split the card number into groups of 4
  const formatCardNumber = (number) => {
    return number.match(/.{1,4}/g) || ["0000", "0000", "0000", "0000"];
  };

  // Format expiration date
  const formatDate = (date) => {
    const month = date.slice(0, 2) || "00";
    const year = date.slice(2) || "00";
    return `${month}/${year}`;
  };

  const formattedCardNumber = formatCardNumber(cardNumber);
  const formattedExpDate = formatDate(expDate);

  return (
    <div className="shadow-black/60 shadow-2xl p-7 flex flex-col justify-end text-white w-[600px] h-[400px] bg-black rounded-2xl bg-gradient-to-b from-blue-400 to-blue-700">
      <img src="chip.png" alt="chip img" className="w-20 mb-10" />
      {/* Card number */}
      <div className="flex gap-5 w-full text-center">
        {formattedCardNumber.map((segment, index) => (
          <h1 key={index} className="text-4xl font-medium">
            {segment}
          </h1>
        ))}
      </div>
      {/* Name and expiration date details */}
      <div className="flex justify-between mt-10">
        <div>
          <p className="uppercase">Card Holder</p>
          <h2 className="text-2xl capitalize font-medium">
            {holderName || "Enter  Name"}
          </h2>
        </div>
        <div className="flex flex-col items-end">
          <p className="uppercase">Expires</p>
          <h2 className="text-2xl font-medium">
            {formattedExpDate || "00/00"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
