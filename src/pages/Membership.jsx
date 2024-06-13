import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import SectionTitle from "../components/Common/SectionTitle";
import Gap from "../components/Common/Gap";

const Membership = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

  return (
    <div className="container px-4 mx-auto lg:my-[150px] mt-[100px]">
      <div className="max-w-md mx-auto lg:px-0 px-4 ">
        <Elements stripe={stripePromise}>
          <div className="p-5 border rounded-lg bg-slate-100">
            <SectionTitle title={"Become a member"} isCenter={true}></SectionTitle>
            <Gap></Gap>
            <CheckoutForm></CheckoutForm>
          </div>
        </Elements>
      </div>
    </div>
  );
};

export default Membership;
