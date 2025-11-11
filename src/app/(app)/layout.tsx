import Header from "@/components/ui-modules/headers/Header";
import MainPageHeader from "@/components/ui-modules/headers/mobile-headers/main-page-header";
import MobileHeader from "@/components/ui-modules/headers/mobile-headers/main-page-header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
