import HomeNavbar from "../HomeNavbar"

export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section><HomeNavbar/>{children}</section>
  }