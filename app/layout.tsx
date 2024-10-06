import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Navigation from "./ui/components/navigation/navigation";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | CyberSauce',
    default: 'CyberSauce'
  },
  description: "Explore the portfolio of CyberSauce, a cybersecurity specialist specializing in digital forensics, ethical hacking, and penetration testing. Blog, case studies, and insights.", // description
  openGraph: {
    title: {
      template: 'Cybersecurity Portfolio: Forensics & Pentesting by CyberSauce',
      default: 'Cybersecurity Portfolio: Forensics & Pentesting by CyberSauce'
    },
    url: 'https://cybersauce-website.vercel.app/', // production url
    description: "Explore the portfolio of CyberSauce, a cybersecurity specialist specializing in digital forensics, ethical hacking, and penetration testing. Blog, case studies, and insights.", // description
    siteName: 'Cybersecurity Portfolio: Forensics & Pentesting by CyberSauce',
    images: [
      {
        url: '/link.jpg',
        width: 1200,
        height: 630
      }
    ],
    type: 'website',
  },
  keywords: ["cybersecurity", "digital forensics", "penetration testing", "pentesting", "ethical hacking", "incident response", "cyber defense", "vulnerability assessment", "security audits", "threat analysis", "malware analysis", "network security", "security research", "infosec", "cyber forensics"], // keywords for SEO
  twitter: {
    card: 'summary_large_image',
    title: 'CyberSauce',
    description: "Explore the portfolio of CyberSauce, a cybersecurity specialist specializing in digital forensics, ethical hacking, and penetration testing. Blog, case studies, and insights.", // description
    creator: '@CodedByCoffeCup',
    images: ['link.jpg'], // Must be an absolute URL
  },
  metadataBase: new URL('https://cybersauce-website.vercel.app/'), // production url
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        <Navigation />
        {children}
        </body>
    </html>
  );
}
