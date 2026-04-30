import { League_Spartan, Poppins, Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const leagueSpartan = League_Spartan({ subsets: ['latin'], variable: '--font-league-spartan', weight: ['700', '800', '900'] });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['500', '600'] });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', weight: ['400', '500'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', weight: ['500'] });

export const metadata = {
  title: 'anymediaworks',
  description: 'We build digital experiences that brands grow.',
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