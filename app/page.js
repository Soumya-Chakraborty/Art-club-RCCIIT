// app/page.js
import Image from 'next/image';
import banner from 'app/ANIME ART CONTEST POSTER.png';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row-reverse items-center justify-center">
      <div className="md:flex-1 text-center md:text-left md:mr-8">
        <h1 className="text-4xl font-bold mb-6 text-white-600">
          Animae Art Contest 2023
        </h1>
        <p className="text-white-700 leading-loose">
          <span className="text-lg font-semibold">
            Welcome to the Animae Art Contest 2023!
          </span>{' '}
          This prestigious event is not just a competition; it's a celebration of boundless creativity and the power of imagination. We are calling upon artists from every corner of the globe to join us in this extraordinary journey of self-expression and artistic exploration.

          <span className="text-base">
            The Animae Art Contest is a platform where artists can transcend boundaries and bring their unique visions to life through the captivating medium of anime art. Whether you're a seasoned professional or an emerging talent, this contest is your canvas to unleash your creativity and captivate the world with your artistry.
          </span>

          <span className="text-lg font-semibold mt-4">
            Why participate?
          </span>{' '}
          Beyond the thrill of competition, the Animae Art Contest offers a chance for artists to gain recognition, connect with like-minded creatives, and potentially have their work showcased to a global audience. Our esteemed panel of judges consists of industry professionals and renowned artists who will evaluate each entry with expertise and appreciation for the art form.

          <span className="text-base mt-4">
            So, pick up your tools, let your imagination run wild, and submit your masterpiece to the Animae Art Contest 2023. Join us in shaping the future of anime art, one stroke at a time!
          </span>
        </p>
        <a href="http://localhost:3000/profile" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">  Register </a>


      </div>
      <div className="md:flex-1 flex justify-center items-center">
        <Image src={banner} alt="Contest Image" width={400} height={600} className="rounded-md shadow-lg"/>
      </div>
    </main>
  );
}
