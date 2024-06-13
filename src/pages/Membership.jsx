import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import SectionTitle from "../components/Common/SectionTitle";
import Gap from "../components/Common/Gap";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Membership = () => {
  const { user } = useContext(AuthContext);
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    // get premiumMember status from db
    const getPremiumMember = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/user/${user?.email}`);
      setUserInfo(data);
    };

    getPremiumMember();
  }, [user?.email]);

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
