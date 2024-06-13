import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import SectionTitle from "../components/Common/SectionTitle";
import Gap from "../components/Common/Gap";
import { Link } from "react-router-dom";
import useUserInfo from "../hooks/useUserInfo";
import LoadingSpinner from "../components/Common/LoadingSpinner";
import ErrorMessage from "../components/Common/ErrorMessage";

const Membership = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  const [userInfo, isPending, isError, error] = useUserInfo();

  if (isPending) return <LoadingSpinner />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <div className="container px-4 mx-auto lg:my-[150px] mt-[100px]">
      {userInfo?.premiumUser === true ? (
        <div>
          <SectionTitle title={"You are already a premium user"} isCenter={true} />
          <div className="flex justify-center mt-4">
            <Link
              to="/"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent transition-all bg-primary text-white hover:bg-secondary hover:text-white disabled:opacity-50 disabled:pointer-events-none"
            >
              Go to home
            </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto lg:px-0 px-4 ">
          <Elements stripe={stripePromise}>
            <div className="p-5 border rounded-lg bg-slate-100">
              <SectionTitle title={"Become a member"} isCenter={true}></SectionTitle>
              <Gap></Gap>
              <CheckoutForm></CheckoutForm>
            </div>
          </Elements>
        </div>
      )}
    </div>
  );
};

export default Membership;
