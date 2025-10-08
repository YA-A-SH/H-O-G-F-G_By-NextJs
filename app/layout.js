import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "H-O-G-F-G",
  icons: {
    icon: "/apple-touch-icon copy.png",
  },
  description:
    "Hand Of Giving For Gaza Official Web Page - Donate and Support Gaza",
  keywords:
    "Gaza, Palestine, Donation, Be Donor, Charity, Aid, Humanitarian, Relief, Volunteer, Support Gaza, Donate online, Fundraising, Gaza families, Children in Gaza, Emergency aid, Gaza food assistance, Gaza health support, Education for Gaza, Gaza campaigns, Hand of Giving, Gaza initiatives, Gaza crisis, Medical aid Gaza, Gaza shelter, Gaza community support, Gaza NGO, Gaza donations, Gaza help, Gaza projects, Gaza volunteers, Gaza refugees, Gaza reconstruction, Gaza fundraising, Gaza humanitarian aid, Gaza emergency relief, Gaza children charity, Gaza support programs, Gaza relief fund, Gaza social work, Gaza outreach, Donate for Gaza, Gaza relief organization, Gaza care, Gaza aid network, Gaza fundraiser, Gaza assistance programs, Gaza donation campaigns, Support Palestine, Gaza wellbeing, Gaza NGO initiatives",
  author: "YA.A.SH",
  robots: "index, follow",
};

import I18nProvider from "./Components/i18nProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
