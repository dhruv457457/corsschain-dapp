import React from "react";

const faqs = [
  {
    question: "What is PayPact and how does it work?",
    answer:
      "PayPact is a tool to manage group payments on the Solana blockchain. An organizer creates a 'Pact,' and participants pay a fixed amount using a simple Solana Pay QR code. The system automatically tracks who has paid.",
  },
  {
    question: "Do my friends need to be crypto experts to use this?",
    answer:
      "Not at all. We use Web3Auth, which allows new users to create a secure, self-custody wallet just by logging in with an email or social account. It's designed to be as simple as any standard web app.",
  },
  {
    question: "Why use Solana for payments?",
    answer:
      "Solana offers near-instant transaction speeds and extremely low fees (typically a fraction of a cent). This makes it perfect for frequent, small-to-medium-sized payments without high costs.",
  },
  {
    question: "Is PayPact secure?",
    answer:
      "Yes. All payments are processed directly on the Solana blockchain, inheriting its robust security. We never have custody of your funds; they move directly from the participant's wallet to the organizer's wallet.",
  },
  {
    question: "What are some real-world use cases for PayPact?",
    answer:
      "PayPact is ideal for collecting rent from roommates, splitting costs for a trip, managing club membership fees, or collecting payments for a course or workshop.",
  },
  {
    question: "What kind of tokens can I use to pay?",
    answer:
      "Currently, Pacts are typically created using stablecoins like USDC to ensure the payment value remains fixed. The organizer sets the specific token when creating the Pact.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      {" "}
      <div className="flex flex-col items-center">
        {" "}
        <span className="px-5 py-1.5 mb-3 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 font-medium">
          FAQs{" "}
        </span>{" "}
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Frequently Asked Questions
        </h2>{" "}
        <p className="text-base text-white/60 mb-8 text-center">
          Your questions about PayPact, answered.{" "}
        </p>{" "}
      </div>{" "}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {" "}
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3 className="font-semibold mb-2">{faq.question}</h3>
            <p className="text-white/60">{faq.answer}</p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </section>
  );
}
