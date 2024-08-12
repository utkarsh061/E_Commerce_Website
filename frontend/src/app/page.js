import Image from "next/image";
import FeatureSection from "@/components/HomePage/FeatureSection";
import HighlightedSection from "@/components/HomePage/HighlightedSection";
import ShoppingRow from "@/components/ShoppingRow/ShoppingRow";
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import ExclusiveProduct from "@/components/HomePage/ExclusiveProduct";
import Testimonials from "@/components/HomePage/Testimonials/Testimonials";


export default function Home() {
  return (
    <main>
      <FeatureSection/>
      <HighlightedSection/>
    <div className="mx-52 my-12">
        <ShoppingRow
          heading="Special Edition"
          isSpecialEdition={true}
        />
        <ShoppingRow
          heading="New Arrivals"
          isSpecialEdition={false}
        />
      </div>  
      <ExclusiveProduct/>
      <Testimonials/>
    </main>
  );
}
