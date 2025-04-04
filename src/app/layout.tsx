export const metadata = {
  title: 'Gleaftex | Eco Textiles Thailand',
  description: 'Thailand\'s leading eco-friendly textile brand',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#3A5F0B',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return children;
}