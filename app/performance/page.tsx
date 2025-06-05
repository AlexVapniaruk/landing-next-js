import Hero from '@/components/hero';
import performanceImage from 'public/performance.jpg'

export default function Performance() {
  return (
    <Hero 
        imgData={performanceImage} 
        imgAlt="welding" 
        title='We senve high performance applications'
      />
  );
}