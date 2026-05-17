import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Geist, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
})

export const metadata: Metadata = {
  title: {
    default: "About Me",
    template: "%s",
  },
  description: "A personal blog about technology, life, and ideas.",
  icons: {
    icon: "/FavIcon.PNG",
    apple: "/FavIcon.PNG",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable, instrumentSerif.variable)}>
      <body className={`${jetbrainsMono.variable} ${geist.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}