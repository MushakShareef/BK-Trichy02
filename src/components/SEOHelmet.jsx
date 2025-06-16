


// src/components/SEOHelmet.jsx
import { Helmet } from 'react-helmet';

const SEOHelmet = ({ 
  title = "Brahma Kumaris Trichy", 
  description = "Spiritual center for meditation and yoga", 
  keywords = "brahma kumaris, trichy, meditation, yoga",
  canonical = "https://bk-trichy02.vercel.app/"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEOHelmet;