

export default function AuthLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="">
        <nav></nav>
   
        {children}
      </section>
    )
  }