import Hero from '@/components/hero';
import scaleImage from 'public/scale.jpg'

export default function Scale() {
  return (
    <Hero
      imgData={scaleImage} 
      imgAlt="steel factory" 
      title='Scale your app to infinity'
    />
  );
}