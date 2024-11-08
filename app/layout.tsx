import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Hairston',
  description: 'Portfolio Site',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
