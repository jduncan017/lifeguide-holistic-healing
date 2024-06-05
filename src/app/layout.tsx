import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import { ModalProvider } from "~/contexts/ModalContext";

if (!process.env.NEXT_PUBLIC_BASE_URL) {
  throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
}

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: "LifeGuide Holistic Healing",
  keywords:
    "brainspotting, holistic healing, holistic wellness, energy medicine, intuitive healing, integrative medicine, life coaching, transitions, grief, transformation, transitions",
  authors: { name: "Joshua Duncan" },
  creator: "Joshua Duncan",
  publisher: "WebSavvy, LLC",
  description:
    "LifeGuide Holistic Healing provides energy medicine, intuitive healing, brainspotting and life coaching. We help you access your deepest abilities, clear long-held limiting beliefs, and create the life you want. ",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: {
      url: "/opengraph.png",
      width: 1903,
      height: 997,
    },
    title: "LifeGuide Holistic Healing",
    description:
      "LifeGuide Holistic Healing provides energy medicine, intuitive healing, brainspotting and life coaching. We help you access your deepest abilities, clear long-held limiting beliefs, and create the life you want. ",
    url: "/",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="Body h-fit overflow-x-hidden bg-gray-700">
        <TRPCReactProvider>
          <ModalProvider>
            <div className="Page -z-20 m-auto h-fit max-w-[1728px] overflow-hidden bg-gradient-to-b from-neutralLight to-neutralDark">
              <NavBar />
              {children}
              <Footer />
            </div>
          </ModalProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
