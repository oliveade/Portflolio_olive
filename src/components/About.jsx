import React from 'react'
import c from '../assets/about.jpg'

const About = () => {
  return (
    <div name='about' className='w-full my-32 '>
     
        <div className='grid md:grid-cols-2 max-w-[1240px] my-8 mx-8 mx-auto flex flex-col space-y-4'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <h1 className='py-3 text-2xl md:text-2xl font-bold'>A propos</h1>
                <p className='first-line:uppercase first-line:tracking-widest
                first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900
                first-letter:mr-3 first-letter:float-left text-justify'>Je suis fascinée et intéressée par tous ce qui a relation avec le domaine des sciences  généralement et l’informatique particulièrement.
                 Ma passion pour l'informatique a commencé très tôt dans mon parcours scolaire. J'ai toujours été fasciné par la façon dont les ordinateurs et les technologies numériques peuvent résoudre des problèmes complexes, 
                 rendre la vie plus facile et apporter des changements significatifs dans le monde. Mon objectif est donc d’acquérir un solide socle de connaissances et de développer des compétences techniques et méthodologiques dans tous les 
                domaines de l’informatique afin d’exercer le métier de mon rêve autant qu’une une développeuse web comme il faut. Et effectivement obtenir un diplôme reconnu et en adéquation avec mon projet professionnel.</p>
            </div>
            <div className=' p-20 my-20 '>
                <img className='w-8/12 h-8/12' src={c} class="hidden md:block w-8/12 h-4/12" alt="/" />
            </div>
        </div>
      
    </div>
  )
}

export default About