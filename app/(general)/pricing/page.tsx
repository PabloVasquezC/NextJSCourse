
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'SEO Description',
  creator: 'Pablo Vásquez',
  keywords: ['Pricing Page',"información",'...']
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  )
}