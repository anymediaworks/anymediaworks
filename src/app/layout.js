import { League_Spartan, Poppins, Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const leagueSpartan = League_Spartan({ subsets: ['latin'], variable: '--font-league-spartan', weight: ['700', '800', '900'] });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['500', '600'] });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', weight: ['400', '500'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', weight: ['500'] });

export const metadata = {
  title: {
    default: "anymediaworks | Digital Agency for Web, Branding & Content",
    template: "%s | anymediaworks",
  },
  description:
    "anymediaworks is a full-service digital agency offering web development, UI/UX design, branding, video editing, and content creation. We build high-performance websites and creative visuals that grow your business.",

  keywords: [
    "Anymediaworks",
    "Digital Agency",
    "Web Development Company",
    "UI UX Design",
    "Branding Agency",
    "Video Editing Services",
    "Content Creation",
    "Website Design India",
    "Creative Agency",
  ],

  authors: [{ name: "anymediaworks" }],
  creator: "anymediaworks",
  publisher: "anymediaworks",

  metadataBase: new URL("https://anymediaworks.com"),

  openGraph: {
    title: "anymediaworks | Digital Agency",
    description:
      "Web Development, Branding, Video Editing & Content Creation services to grow your business.",
    url: "https://anymediaworks.com",
    siteName: "anymediaworks",
    images: [
      {
        url: "/images/abouthero.jpeg", // add your banner image in public folder
        width: 1200,
        height: 630,
        alt: "anymediaworks Digital Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "anymediaworks | Digital Agency",
    description:
      "Creative digital agency for web development, branding & video production.",
    images: ["/images/anymediaworks-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} ${poppins.variable} ${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-['Plus_Jakarta_Sans']">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}