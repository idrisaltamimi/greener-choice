import { Header } from './components'
import './globals.css'

export const metadata = {
  title: 'Greener Choice - Eco-friendly & Sustainable',
  description: 'Shop for an eco-friendly and sustainable products that are better for the environment and your health.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`mx-auto lg:px-28 w-full max-w-[1440px] h-full text-black`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
