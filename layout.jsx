import './styles/globals.css'

export const metadata = {
  title: 'Aurelia Painting',
  description: 'Luxury painting and premium finishes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
