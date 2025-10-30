export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Verde Vida',
    url: 'https://www.verdevida.mx',
    description: 'Buffet fresco con opciones para todos los gustos. Eventos y banquetes para bodas, empresas y celebraciones.',
    image: 'https://www.verdevida.mx/og-image.jpg',
    telephone: '+52-55-0000-0000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Principal 123',
      addressLocality: 'Ciudad de México',
      addressCountry: 'MX',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'
        ],
        opens: '12:00',
        closes: '22:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com',
      'https://www.instagram.com'
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
