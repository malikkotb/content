"use client";

import InstaBold from "./InstaBold";
import SpotifyBold from "./SpotifyBold";
import AppleMusicBold from "./AppleMusicBold";
import YoutubeBold from "./YoutubeBold";

// TODO: add metafield in spotify and get the album titles and images from there
const albums = [
  {
    title: "Project Title",
    name: "Album",
    image: "/img11.png",
    href: "https://open.spotify.com/album/00000000000000000000000000000000",
  },

  {
    title: "Project Title",
    name: "Album",
    image: "/img11.png",
    href: "https://open.spotify.com/album/00000000000000000000000000000000",
  },

  {
    title: "Project Title",
    name: "Album",
    image: "/img11.png",
    href: "https://open.spotify.com/album/00000000000000000000000000000000",
  },
];

export default function Page() {
  return (
    <div className='w-full text-white bg-[#2547B1] h-[100vh] relative flex items-center'>
      <div className='absolute right-0 top-0 bottom-0'>
        <img
          src='/LPTOUR-28-full.png' 
          // seems like the full version is better
          alt='background'
          className='w-full h-full'
        />
      </div>
      <div
        style={{ zIndex: 10 }}
        className='borderr h-fit flex flex-col gap-[2rem] ml-16'
      >
        <div className='flex gap-16'>
          {/* TODO: get correct hrefs */}
          <a
            href='https://www.instagram.com/louphelps/'
            target='_blank'
            className='hover:scale-110 transition-all duration-300'
          >
            <InstaBold strokeColor='white' />
          </a>
          <a
            href='https://open.spotify.com/artist/00WmzVff1tFDGhgBHbz2nQ'
            target='_blank'
            className='hover:scale-110 transition-all duration-300'
          >
            <SpotifyBold strokeColor='white' />
          </a>
          <a
            href='https://music.apple.com/us/artist/loup-helps/1740600000'
            target='_blank'
            className='hover:scale-110 transition-all duration-300'
          >
            <AppleMusicBold strokeColor='white' />
          </a>
          <a
            href='https://www.youtube.com/@louphelps'
            target='_blank'
            className='hover:scale-110 transition-all duration-300'
          >
            <YoutubeBold strokeColor='white' />
          </a>
        </div>
        <div className='flex flex-col gap-2 pb-8'>
          <div className='text-7xl font-extrabold'>LOU PHELPS</div>
          <div className=''>
            Haitian-Canadian rapper and producer from Saint-Hubert,
            Quebec.
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='font-bold text-xl pb-2'>RELEASES</div>
          <div className='flex gap-4'>
            {albums.map((album, index) => (
              <div
                key={index}
                className='flex flex-col gap-4 items-center'
              >
                <img
                  src={album.image}
                  alt={album.title}
                  className='w-[185px] h-[185px] rounded-xl'
                />
                <div className='flex text-[#D9D9D9] flex-col text-center uppercase'>
                  <span className=''>{album.title}</span>
                  <span className='text-xs font-bold'>
                    {album.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
