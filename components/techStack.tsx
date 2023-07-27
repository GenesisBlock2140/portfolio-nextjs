import { FC } from "react"
import Image from "next/image"

export const TechStack: FC = () => {

  const logos: string[] = ['nextjs', 'typescript', 'reduxtoolkit', 'react', 'nodejs', 'express', 'tailwind']

  return (
    <div className="flex flex-wrap items-center gap-2 mb-20 md:my-0">
      { logos.map((item, i) => {
        return (
          <Image 
            src={`${item}.svg`} 
            alt={`${item}`} 
            width={`${i < 2 ? 60 : 70}`} 
            height={`${i < 2 ? 60 : 70}`}
            className={`show-tech-icon rounded-xl w-[50px] md:w-[${i < 2 ? '60px' : '70px'}]`}
            title={item}
            key={i}
          />
        )
      })}
    </div>
  )
}