import Hero from '@/components/hero';
import reabilityImage from 'public/reliability.jpg'

export default function Reliability() {
  return (
    <Hero 
      imgData={reabilityImage} 
      imgAlt="welding" 
      title='Super high reliability hosting'
    />
  );
}