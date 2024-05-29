import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import { ModalProvider } from "~/contexts/ModalContext";

export const metadata = {
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
      <body className="Body h-fit overflow-x-hidden bg-gradient-to-b from-primary via-neutralLight to-neutralDark">
        <TRPCReactProvider>
          <ModalProvider>
            <NavBar />
            {children}
            <Footer />
          </ModalProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
