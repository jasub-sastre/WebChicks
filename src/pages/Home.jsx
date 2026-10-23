import Header from '../components/Header/Header';
import HomeHero from '../components/HomeHero/HomeHero';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import BrandMessage from '../components/BrandMessage/BrandMessage';
import Footer from '../components/Footer/Footer';

/**
 * Homepage layout draft (Phase 1 deliverable). Composed purely from
 * reusable components — no markup or business logic lives here that
 * couldn't move to another page.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <FeaturedProducts />
        <BrandMessage />
      </main>
      <Footer />
    </>
  );
}
