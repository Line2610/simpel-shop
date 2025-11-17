import Payment from "../components/Payment";
import Header from "../components/Header";

export default function PaymentPage() {
  return (
    <div>
      <Header />
      <h1 className="mt-15 mb-15 text-center text-4xl font-medium">Payment</h1>
      <Payment />
    </div>
  );
}
