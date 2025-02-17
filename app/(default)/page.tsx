export const metadata = {
  title: "Ventas - Fibramax",
  description: "Page description",
};

import Form from "@/components/form";
import Planes from "@/components/planes";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Web from "@/components/web";

export default function Home() {
  return (
    <>
      <Form />
      <Planes />
      <Web />
    </>
  );
}
