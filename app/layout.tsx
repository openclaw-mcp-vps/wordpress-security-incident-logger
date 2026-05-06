import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WP Security Logger – Log & Analyze WordPress Security Incidents",
  description: "Automatically monitor WordPress sites for security events, log incidents with forensic context, and generate compliance-ready reports for insurance claims."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="677938cc-586f-4fd2-80c8-f3bc02d564ad"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
