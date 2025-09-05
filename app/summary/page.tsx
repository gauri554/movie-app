// app/summary/page.tsx
export const dynamic = "force-dynamic"; // 👈 this stops Next.js from prerendering

import { Suspense } from "react";
import SummaryPage from "./SummaryPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white text-center py-10">Loading summary...</div>}>
      <SummaryPage />
    </Suspense>
  );
}
