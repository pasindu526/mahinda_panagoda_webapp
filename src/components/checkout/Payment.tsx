import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";

interface StepProps {
  onDataChange?: (data: Record<string, string>) => void;
  onPaid?: () => void; // called when payment (token) is created
}

const stripePromise = loadStripe(
  "pk_test_51SPgoHJXZqHm7SiMkeYyF6DjDOR5aVCmO5aQUEXs7qm2QGh5JHl4d0QO13OBx9pgYAyMOgvL6TQMURnhCaOuIgCX00DqP3eGHv"
);

// Payment Form Component
const PaymentForm: React.FC<StepProps> = ({ onDataChange, onPaid }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = React.useState(false);
  const [cardholderName, setCardholderName] = React.useState("");

  const handlePay = React.useCallback(
    async (e?: React.FormEvent) => {
      if (e && e.preventDefault) e.preventDefault();
      if (processing) return;
      setProcessing(true);

      if (!stripe || !elements) {
        alert("Stripe not loaded yet. Please wait a moment.");
        setProcessing(false);
        return;
      }

      const cardNumber = elements.getElement(CardNumberElement);
      if (!cardNumber) {
        alert("Card element not found.");
        setProcessing(false);
        return;
      }

      try {
        const result = await stripe.createToken(cardNumber, {
          name: cardholderName,
        });
        if (result.error) {
          console.error(result.error.message);
          alert("Error: " + result.error.message);
        } else if (result.token) {
          console.log("Token created:", result.token);
          if (onDataChange) onDataChange({ stripeToken: result.token.id });
          if (onPaid) onPaid();
          alert("Test token generated!");
        }
      } catch (err) {
        console.error(err);
      }

      setProcessing(false);
    },
    [stripe, elements, processing, cardholderName, onDataChange, onPaid]
  );

  return (
    <form
      onSubmit={handlePay}
      className="flex flex-col justify-start gap-4 md:gap-6"
    >
      <div className="flex flex-col text-left gap-4 md:gap-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-20 w-full">
          {/* Cardholder Name */}
          <div className="w-full">
            <label className="block mb-1 text-sm font-medium">
              Card Holder Name
            </label>
            <input
              type="text"
              name="cardholderName"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-0 focus:outline-none"
              placeholder="Nimal Perera"
            />
          </div>

          {/* Card Number */}
          <div className="w-full">
            <label className="block mb-1 text-sm font-medium">
              Card Number
            </label>
            <div className="border p-4 rounded-lg">
              <CardNumberElement options={{ showIcon: true }} />
            </div>
          </div>
        </div>

        {/* Expiry and CVC */}
        <div className="flex flex-row gap-4 md:gap-20 w-full">
          {/* Expiry */}
          <div className="w-full">
            <label className="block mb-1 text-sm font-medium">Expiry</label>
            <div className="border p-4 rounded-lg">
              <CardExpiryElement />
            </div>
          </div>

          {/* CVC */}
          <div className="w-full">
            <label className="block mb-1 text-sm font-medium">CVC</label>
            <div className="border p-4 rounded-lg">
              <CardCvcElement />
            </div>
          </div>
        </div>
      </div>

      {/* Pay button */}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="mb-6 w-fit bg-secondary hover:bg-secondary/95 cursor-pointer text-white text-xs md:text-sm lg:text-base py-2.5 px-10 rounded-lg"
      >
        {processing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

// Payment Step Component
const Payment: React.FC<StepProps> = (props) => {
  return (
    <div className="bg-white">
      <h1 className="text-center md:text-start text-xl md:text-2xl lg:text-3xl font-belda mb-4 md:mb-6">
        Payment Details
      </h1>
      <Elements stripe={stripePromise}>
        <PaymentForm {...props} />
      </Elements>
    </div>
  );
};

export default Payment;
