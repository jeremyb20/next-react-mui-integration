// import { _tours } from '@/_mock/_tour';

import { Metadata } from 'next';

import { TourDetailsView } from '@/sections/tour/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Tour Details',
};

type Props = {
  params: {
    id: string;
  };
};

export default function TourDetailsPage({ params }: Props) {
  const { id } = params;

  return <TourDetailsView id={id} />;
  // return <>TourDetailsView</>;
}

// export async function generateStaticParams() {
//   return _tours.map((tour) => ({
//     id: tour.id,
//   }));
// }
