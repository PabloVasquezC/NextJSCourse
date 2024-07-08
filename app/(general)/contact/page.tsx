
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Contact Page Description',
  creator: 'Pablo Vásquez',
  keywords: ['Contact Page','Pablo Vásquez',"información",'...']

};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  )
}