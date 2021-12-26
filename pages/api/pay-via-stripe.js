import initStripe from 'stripe';

async function handler(req, res) {
  if (req.method === 'POST') {
    const stripe = initStripe(process.env.STRIPE_SECRET_KEY);
    // try or catch
    try {
      // stripe payment
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: `${process.env.STRIPE_PRODUCT_ID}`,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `https://bijlse-form.vercel.app/donate/?success=true`,
        cancel_url: `https://bijlse-form.vercel.app/donate/?canceled=true`,
      });

      res.redirect(303, session.url);
    } catch (err) {
      console.log(err);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).send('Method not allowed');
  }
}

export default handler;
