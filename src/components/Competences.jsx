import React from 'react';
import Image from '../assets/develop.jpeg'

const Competences = () => {
  return (
  <div name='competence' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={Image} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Compétences</h2>
              <h3 className='text-5xl font-bold py-6 text-left'>L’informatique n’est qu’un outil, comme un pinceau ou un crayon. <br />-GRIFFO</h3>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      
                      <h3 className='font-bold text-2xl my-6'>Language</h3>
                      <ol className='list-disc'>
                        <li className='text-black text-xl'>HTML</li>
                        <li className='text-black text-xl'>CSS</li>
                        <li className='text-black text-xl'>TypeScript</li> 
                        <li className='text-black text-xl'> JavaScript</li>
                        <li className='text-black text-xl'> Python</li>
                        <li className='text-black text-xl'> Xml</li>
                        <li className='text-black text-xl'> Arduino</li>
                        <li className='text-black text-xl'>C</li>
                      </ol>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      
                      <h3 className='font-bold text-2xl my-6'>Frameworks</h3>
                      <ol className='list-disc'>
                        <li className='text-black text-xl'>Next</li>
                        <li className='text-black text-xl'>Angular</li>
                        <li className='text-black text-xl'> ReactJs</li>
                        <li className='text-black text-xl'> ReactNative</li>
                    
                      </ol>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                     
                      <h3 className='font-bold text-2xl my-6'>SGBDR</h3>
                      <ol className='list-disc'>
                        <li className='text-black text-xl'>SQLite</li>
                        <li className='text-black text-xl'>MySQL</li>
                     
                      </ol>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                     
                      <h3 className='font-bold text-2xl my-6'>Systèmes d'exploitation et Logiciels</h3>
                      <ol className='list-disc'>
                        <li className='text-black text-xl'>Mac OS, Windows</li>
                        <li className='text-black text-xl'>Git, Visual StudioCode, Android Studio, Word, Excel, et Powerpoint.</li>
                      </ol>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Competences;

