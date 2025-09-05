import { Suspense } from "react";
import PaymentPage from "./PaymentPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white text-center py-10">Loading payment...</div>}>
      <PaymentPage />
    </Suspense>
  );
}
