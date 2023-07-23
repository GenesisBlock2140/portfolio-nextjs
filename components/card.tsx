import { FC } from "react";

interface ICard {
  title: string
  description: string
  stack: string
  demoLink?: string
  sourceLink?: string
}

export const Card: FC<ICard> = ({title, description, stack, demoLink, sourceLink}) => {
  return (
    <div className="min-h-[400px] flex flex-wrap justify-between items-center">
      <div className="max-w-[500px] flex flex-col space-y-4 my-4 order-2 md:-order-none">
        <h3 className="text-2xl text-second font-bold">
          {title}
        </h3>
        <p className="text-lg text-gray-700">
          {description}
        </p>
        <p className="font-bold">
          Stack: {stack}
        </p>
        <div className="flex flex-wrap gap-2">
          <a href={demoLink} target="_blank" className="w-[150px] bg-brand text-white text-center cursor-pointer py-2 px-4 rounded">
            Démo en ligne
          </a>
          <a href={sourceLink} target="_blank" className="w-[150px] bg-second text-white text-center cursor-pointer py-2 px-4 rounded">
            Code source
          </a>
        </div>
      </div>
      <div>
        <div className="w-[350px] h-[300px] bg-gray-100">
          <p>img</p>
        </div>
      </div>
    </div>
  )
}