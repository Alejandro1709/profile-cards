import Image from 'next/image';

export default function ProfilePage() {
  return (
    <main className='flex flex-col justify-center md:items-center h-screen mx-6 md:mx-0'>
      <article className='flex flex-col gap-4 items-center bg-[#1F1F1F] p-6 rounded-xl md:p-10'>
        <Image
          className='rounded-full'
          src='/avatar-jessica.jpeg'
          alt='Jessica'
          width={100}
          height={100}
          priority
        />
        <div className='flex flex-col items-center gap-1'>
          <h2 className='font-medium text-2xl'>Jessica Randall</h2>
          <h3 className='text-[#C5F829] text-md font-semibold'>
            London, United Kingdom
          </h3>
        </div>

        <p>&ldquo;Front-end developer and avid reader.&rdquo;</p>

        <ul className='flex flex-col gap-4 w-full mt-2'>
          <li className='bg-[#333333] p-4 text-center font-bold rounded hover:bg-[#C5F829] hover:text-[#333333] cursor-pointer transition-all'>
            GitHub
          </li>
          <li className='bg-[#333333] p-4 text-center font-bold rounded hover:bg-[#C5F829] hover:text-[#333333] cursor-pointer transition-all'>
            Frontend Mentor
          </li>
          <li className='bg-[#333333] p-4 text-center font-bold rounded hover:bg-[#C5F829] hover:text-[#333333] cursor-pointer transition-all'>
            Linkedin
          </li>
          <li className='bg-[#333333] p-4 text-center font-bold rounded hover:bg-[#C5F829] hover:text-[#333333] cursor-pointer transition-all'>
            Twitter
          </li>
          <li className='bg-[#333333] p-4 text-center font-bold rounded hover:bg-[#C5F829] hover:text-[#333333] cursor-pointer transition-all'>
            Instagram
          </li>
        </ul>
      </article>
    </main>
  );
}
