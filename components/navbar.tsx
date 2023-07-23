import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center lg:text-xl">
      <p className="text-2xl">💻</p>
      <div className="flex gap-10 text-second font-bold">
        <a href="#about"><span className="text-brand">01.</span> Présentation</a>
        <a href="#project"><span className="text-brand">02.</span> Projets</a>
      </div>
    </div>
  )
}