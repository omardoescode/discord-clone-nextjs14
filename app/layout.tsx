import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"

const font = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Team Chat Application",
  description: "Helloooo!!!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
