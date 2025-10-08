import './globals.css'

export const metadata = {
  title: 'Fundação Alquimista',
  description: 'Sistema Quântico de Evolução Consciencial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
