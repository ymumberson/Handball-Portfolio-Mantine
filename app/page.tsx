import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { FooterSimple } from '@/components/FooterSimple/FooterSimple';
import { CardsCarousel } from '@/components/CardsCarousel/CardsCarousel';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <CardsCarousel />
      <FooterSimple />
    </>
  );
}
