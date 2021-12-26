import { Fade } from 'react-reveal';

// loadstripe
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function StripeCheckoutPage() {
  return (
    <Fade>
      {/* A form for checking out a stripe payment */}
      <div className="w-5/6 md:w-3/6 mx-auto my-10 flex flex-col">
        <form action="/api/pay-via-stripe" method="post">
          <div className="flex flex-col text-center space-y-4">
            <p className="text-3xl font-semibold">
              Donate to{' '}
              <span className="text-transparent text-3xl bg-clip-text bg-gradient-to-br from-blue-400 to-red-600">
                #TeamSeas
              </span>
            </p>

            <p className="text-lg ">
              Every single dollar #TeamSeas raises toward the $30M will go to
              independently verified pounds of trash that have been removed from
              beaches, rivers or the ocean. When you donate, the funds go
              directly to the two not-for-profit organizations, Ocean
              Conservancy and The Ocean Cleanup.
            </p>

            <button
              className="bg-pink-500 p-4 text-base md:text-lg w-3/5 md:w-2/5 lg:w-1/5 mx-auto rounded-r-full rounded-l-full text-white font-semibold md:hover:scale-105 transition duration-75 ease-in-out"
              type="submit"
            >
              Donate $10
            </button>
          </div>
        </form>
      </div>
    </Fade>
  );
}

export default StripeCheckoutPage;
