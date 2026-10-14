import Footer from '../components/Footer';
import TermsHeader from '../components/TermsHeader';
import Terms from '../sections/Terms';

export default function TermsPage() {
  return (
    <>
      <TermsHeader />
      <main className="relative pt-12 sm:pt-16">
        <Terms />
      </main>
      <Footer />
    </>
  );
}
