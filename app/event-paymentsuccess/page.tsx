// app/event-paymentsuccess/page.tsx
import { Suspense } from "react";
import SuccessPage from "./SuccessPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
      <SuccessPage />
    </Suspense>
  );
}
