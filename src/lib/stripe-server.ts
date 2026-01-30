import Stripe from 'stripe';

function getStripeServer() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-10-29.clover',
    typescript: true,
  });
}

export const stripe = {
  get instance() {
    return getStripeServer();
  }
};
