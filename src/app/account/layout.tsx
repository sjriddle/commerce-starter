
interface AccountLayoutProps {
  children: React.ReactNode
}

export default function AccountLayout({
  children,
}: AccountLayoutProps) {
  return (
    <div className='min-h-screen'>
      <main>{children}</main>
    </div>
  )
}
