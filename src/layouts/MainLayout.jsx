import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-main">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 animate-fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
}
