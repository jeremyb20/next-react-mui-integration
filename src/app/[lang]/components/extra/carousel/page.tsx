import CarouselView from '@/sections/_examples/extra/carousel-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Carousel',
};

export default function CarouselPage() {
  return <CarouselView />;
}
