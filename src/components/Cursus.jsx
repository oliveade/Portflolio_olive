import React from 'react';
import pImg from '../assets/eigsi.jpeg';
import wImg from '../assets/Fond1.jpeg';
import cImg from '../assets/cImg.jpeg'
const Cursus = () => {
  return (
    <div name='cursus' className='w-full text-white my-24'>
      <div className='w-full h-[800px] absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-2 '>
        <div className='text-center py-4 text-black'>
          <h2 className='text-3xl uppercase'>Formations</h2>
        </div>
        <div className='grid md:grid-cols-2 gap-4'>
        <a href="# " className='flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
        
        <img className="object-cover w-full rounded-t-lg h-90 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={cImg} alt=""/>
        <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CYCLES PREPARATOIRE PERE AUPIAIS 2019-2021</h5>
        <ol className='list-none'>
            <li className="mb-2 font-normal text-gray-900 dark:text-gray-400">MPSI Math Physique et Sciences de l'ingénieur</li>
          </ol>
        </div>
      </a>

          <a href="# " className='flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
        
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pImg} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ECOLE D'INGENIEURS GENERALISTES 2021-2022</h5>
            <ol className='list-none'>
                <li className="mb-2 font-normal text-gray-900 dark:text-gray-400">3ème année - Première année de cycle ingénieur</li>
              </ol>
            </div>
          </a>

        
          <a href='# ' className='flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={wImg} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ETNA, ECOLE DES TECHNOLOGIES NUMÉRIQUES AVANCÉES 2022 à aujourd'hui</h5>
            <ol className='list-none'>
                <li className="mb-2 font-normal text-gray-900 dark:text-gray-400">Ingénierie informatique</li>
              </ol>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Cursus;