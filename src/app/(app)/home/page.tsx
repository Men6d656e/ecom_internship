import {
  DealsAndOffersData,
  HomeProductData,
  TechProductData,
} from "@/app/const/staticData";
import Header from "@/components/ui-modules/headers/Header";
import MobileHeader from "@/components/ui-modules/headers/mobile-headers/main-page-header";
import CopyRight from "@/components/ui-modules/main-page/copy-right";
import ExtraServicesSection from "@/components/ui-modules/main-page/extra-services";
import Footer from "@/components/ui-modules/main-page/footer";
import RecomemdedItems from "@/components/ui-modules/main-page/recomemded-items";
import ShowCaseSection from "@/components/ui-modules/main-page/show-case-setion";
import Subscribe from "@/components/ui-modules/main-page/subscribe";
import SuplaierForm from "@/components/ui-modules/main-page/suplaierForm";
import SuplaierByRegions from "@/components/ui-modules/main-page/suplier-by-refion";

const HomePage = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <div className="w-full overflow-x-hidden">
        {/* <ShowCaseSection
        type="deals"
        button={false}
        heading="Deals and offers"
        paragraph="Hygiene equipments"
        items={DealsAndOffersData}
        />
      <br />
      <br />
      <ShowCaseSection
      type="home"
      titleImage="/Image/2.png"
        button={true}
        heading="Home and Outdoor"
        items={HomeProductData}
      />
      <br />
      <br />
      <ShowCaseSection
        type="electronics"
        titleImage="/Image/1.png"
        button={true}
        heading="Consumer Electronics and gadgets"
        items={TechProductData}
      /> */}
        <br />
        <br />

        <SuplaierForm />
        <br />
        <br />
        <RecomemdedItems />
        <br />
        <br />
        <ExtraServicesSection />
        <br />
        <br />
        <SuplaierByRegions />
        <br />
        <br />
        <Subscribe />
        <br />
        <br />
        <Footer />
        <br />
        <br />

        <CopyRight />
      </div>
    </>
  );
};

export default HomePage;
