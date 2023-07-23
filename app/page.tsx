import { Card } from "@/components/card";
import { Navbar } from "@/components/navbar";
import ObserverWrapper from "@/components/observerWrapper";
import { TechStack } from "@/components/techStack";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Portfolio Développeur Front-end - NC',
  description: ''
}

export default function Home() {
  return (
    <main>
      <section className="max-w-[1000px] min-h-[100vh] mx-auto px-2">
        <Navbar />
        <div>
          <div className="flex flex-wrap justify-around lg:justify-between items-center my-20 lg:my-40">
            <div className="flex flex-col order-2 md:-order-none space-y-4 show-from-bottom">
              <h1 className='text-6xl text-second font-bold'>
                Développeur <br/> 
                Front-end <span className='text-brand'>React</span>
              </h1>
              <p className='text-xl text-[#515253]'>Développeur web autodidacte et passionné <br/> recherchant un poste en France.</p>
              <button className="w-[180px] text-xl bg-brand text-white py-3 px-6 rounded">Me contacter</button>
            </div>
            <div className="flex relative my-10 md:my-0">
              <Image 
                src={'/bubble.svg'} 
                alt="bubble" 
                width={200} 
                height={75}
                className="absolute z-[-20] bubble-pop"
              />
              <p className="absolute top-[-48px] right-[10px] rotate-[25deg] text-3xl text-white font-bold opacity-0 show-hey">Hey !<span className="wiggle-hand inline-block">👋</span></p>
              <div className="w-[300px] h-[300px] bg-gray-300 rounded-full show-from-bottom bg-[url('/ppNC.jpg')] bg-center bg-cover">
              </div>
            </div>
          </div>
          <h2 className="text-3xl text-second font-bold show-tech-icon mb-2">Stack technique</h2>
          <TechStack />
        </div>
      </section>
      <section id="about" className="bg-gray-100">
        <div className="max-w-[1000px] h-[800px] md:h-[600px] flex flex-wrap justify-between items-center mx-auto px-2">
          <div className="flex items-center justify-center w-full md:w-fit">
            <Image src={'/coffee-cup.jpg'} alt="cup of coffee" width={275} height={300} className="rounded-xl" />
          </div>
          <div>
            <h2 className="text-3xl text-second font-bold mb-2">
              <span className="text-brand">01. </span>
              Qui suis je ?
            </h2>
            <p className="max-w-[600px] text-xl font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Cras interdum volutpat tempor. Cras augue sapien, iaculis non interdum non, ultricies nec nulla. 
              Curabitur gravida malesuada metus. Vestibulum auctor ex sapien, eu rutrum nibh sodales et. 
              Aenean rutrum vulputate ipsum, vitae lobortis felis vulputate et
            </p>
          </div>
        </div>
      </section>
      <section id="project" className="mb-10">
        <div className="max-w-[1000px] mx-auto px-2">
          <h2 className="text-3xl text-second font-bold my-20">
            <span className="text-brand">02. </span>
            Mes projets
          </h2>
          <ObserverWrapper direction="left">
            <Card 
              title="Flashcard App Fullstack"
              description="Cette application permet à n'importe qui de se connecter/s'inscrire en moins de 10 secondes
                en utilisant son compte Google ou Github afin de créer des flashcards pour apprendre/réviser des sujets intelligemment."
              stack="NextJS, React, Typescript, Prisma, NextAuth, Tailwind"
              sourceLink="https://github.com/GenesisBlock2140/flashcard-fullstack"
              demoLink="https://flashcard-fullstack.vercel.app/"
            />
          </ObserverWrapper>
          <ObserverWrapper direction="right">
            <Card 
              title="E-Commerce Brocante en ligne"
              description="Cette application est une boutique e-commerce développée avec Next.js, 
                plus précisément un site de brocante en ligne permettant de consulter les informations des produits, parcourir les categories, filtrer, ajouter au panier ..."
              stack="NextJS, React, Typescript, Redux Toolkit, Tailwind"
              sourceLink="https://github.com/GenesisBlock2140/ecommerce-nextjs"
            />
          </ObserverWrapper>
          <ObserverWrapper direction="left">
            <Card 
              title="Portfolio personnel"
              description="Site personnel portfolio permettant de me présenter simplement ainsi que certains de mes projets. Toutes les animations sont réalisées avec du CSS vanilla."
              stack="NextJS, React, Typescript, Tailwind"
              demoLink="#"
              sourceLink="https://github.com/GenesisBlock2140/portfolio-nextjs"
            />
          </ObserverWrapper>
        </div>
      </section>
      <footer className="text-center text-sm my-5">
        <p>
          ☕ Code disponible sur github {' '}
          <a href="https://github.com/GenesisBlock2140/portfolio-nextjs" target="_blank" className="underline" >ici</a>
        </p>
      </footer>
    </main>
  )
}
