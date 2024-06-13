import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "../CheckoutForm/CheckoutForm.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import ButtonSpinner from "../Common/ButtonSpinner";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const { user } = useContext(AuthContext);
  const price = 10;
  const navigate = useNavigate();

  useEffect(() => {
    getClientSecret({ price: price });
  }, []);

  // get client secret
  const getClientSecret = async (price) => {
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/create-payment-intent`, price);
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    // confirm payment
    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email,
          name: user?.displayName,
        },
      },
    });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent);
      // 1. create payment info object
      const paymentInfo = {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
        price: price,
        premiumMember: true,
        transactionId: paymentIntent.id,
        date: new Date(),
      };

      try {
        // 2. save payment info in booking collection in db
        // 3. change isMember to true in db
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/premium-users`, paymentInfo);
        console.log(data);
        toast.success("You are now a premium member");
        navigate("/");
      } catch (error) {
        toast.error(error.message);
      }
    }

    setProcessing(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770 ",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="bg-primary text-white w-full py-3 rounded-md" type="submit" disabled={!stripe || !clientSecret || processing}>
          {processing ? <ButtonSpinner /> : `Pay $${price}`}
        </button>
      </form>
      {/* Show error */}
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;
