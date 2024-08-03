export const metadata = {
  title: 'Imani Hairston',
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
    </html>
  )
}
