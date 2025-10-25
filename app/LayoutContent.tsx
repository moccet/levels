'use client';

import { usePathname } from 'next/navigation';
import { Header, Footer } from "./components/layout";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide header and footer on quiz, assessment, pricing, and checkout routes
  const hideLayout =
    pathname?.startsWith('/quiz') ||
    pathname?.startsWith('/weight-loss/assessment') ||
    pathname?.startsWith('/pricing') ||
    pathname?.startsWith('/checkout');

  return (
    <div id="main-layout">
      {!hideLayout && <Header />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
}
