import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 creator: 'Pablo Vásquez',
 keywords: ['About Page','Pablo Vásquez',"información",'...']

};

export default function AboutPage() {
  return (
      <span className="text-7xl">About Page</span>
  )
}