import LinkCard from "./link-card";

function SocialLinks() {
  return (
    <ul className="flex flex-col gap-4 w-full">
      <LinkCard />
      <li className="bg-slate-100 dark:bg-slate-800 p-4 text-center font-bold rounded dark:hover:bg-[#C5F829] hover:bg-[#C5F829] hover:text-[#333333] cursor-pointer transition-all">
        Frontend Mentor
      </li>
      <li className="bg-slate-100 dark:bg-slate-800 p-4 text-center font-bold rounded dark:hover:bg-[#C5F829] hover:bg-[#C5F829] hover:text-[#333333] cursor-pointer transition-all">
        Linkedin
      </li>
      <li className="bg-slate-100 dark:bg-slate-800 p-4 text-center font-bold rounded dark:hover:bg-[#C5F829] hover:bg-[#C5F829] hover:text-[#333333] cursor-pointer transition-all">
        Twitter
      </li>
      <li className="bg-slate-100 dark:bg-slate-800 p-4 text-center font-bold rounded dark:hover:bg-[#C5F829] hover:bg-[#C5F829] hover:text-[#333333] cursor-pointer transition-all">
        Instagram
      </li>
    </ul>
  );
}

export default SocialLinks;
