import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/NavBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
