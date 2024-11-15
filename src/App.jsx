import { Calendar, CreditCard, User } from "lucide-react";
import Button from "./components/Button";
import Input from "./components/Input";
import InputWrapper from "./components/InputWrapper";
import Card from "./components/Card";
import { useState } from "react";

const App = () => {
  const [cardName, setCardName] = useState(""); // State for cardholder name
  const [expDate, setExpDate] = useState(""); // State for expiration date
  const [cvv, setCvv] = useState(""); // State for CVV
  const [cardNumber, setCardNumber] = useState(""); // State for card number

  return (
    <main className="w-full h-screen flex flex-row">
      {/* Left Section: Credit Card Display */}
      <section className="w-1/2 flex justify-center items-center">
        <Card holderName={cardName} expDate={expDate} cardNumber={cardNumber} />
      </section>

      {/* Right Section: Input Form */}
      <section className="w-1/2 flex flex-col justify-center items-center text-start">
        <h1 className="text-3xl font-medium my-5">Payment Details</h1>
        <form className="flex flex-col  justify-start  p-10 rounded-lg">
          {/* Cardholder Name */}
          <InputWrapper>
            <Input
              lableName="Cardholder Name"
              placeholder="John Doe"
              id="cardholder"
              icon={<User />}
              value={cardName}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Remove all non-numeric characters
                value = value.slice(0, 16); // Limit to 16 digits
                setCardNumber(value); // Update state with formatted value
              }}
              maxLength={19} // Account for 16 digits + 3 spaces
            />
          </InputWrapper>

          {/* Card Number */}
          <InputWrapper>
            <Input
              lableName="Card Number"
              placeholder="0000 0000 0000 0000"
              id="cardnumber"
              icon={<CreditCard />}
              value={cardNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                if (value.length <= 16) {
                  setCardNumber(value); // Update state only if length is within 16 characters
                }
              }}
              maxLength={16} // Prevents entering more than 16 characters
            />
          </InputWrapper>

          {/* Expiration Date and CVV */}
          <InputWrapper>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="MMYY"
                maxLength={4}
                value={expDate}
                onChange={(e) => setExpDate(e.target.value)}
                className="flex-1 h-10 p-2 outline-none w-[100px] border-2 rounded-md"
              />
              <input
                type="text"
                placeholder="CVV"
                maxLength={3}
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="flex-1 h-10 p-2 outline-none w-[100px] border-2 rounded-md"
              />
            </div>
          </InputWrapper>

          {/* Submit Button */}
          <Button>Confirm</Button>
        </form>
      </section>
    </main>
  );
};

export default App;
