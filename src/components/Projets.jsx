import React from 'react';

import ImgG from '../assets/jeuImg.webp';
import webImg from '../assets/website.png';
import etnaImg from '../assets/defi1.jpeg';
import mImg from '../assets/defi2.png'

const Projets = () => {
  return (
    <div name='projets' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-2 '>
        <div className='text-center py-4 text-slate-300'>
          <h2 className='text-3xl uppercase'>PROJETS</h2>
        </div>
        <div className='grid md:grid-cols-2 gap-4'>
       <a href="# " className="flex flex-col items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 animate-fadeIn duration-2s">
        <div className="flex flex-col md:flex-row md:max-w-xl">
    <div className="md:w-48">
            <img className="object-cover w-full rounded-t-lg md:rounded-none md:rounded-l-lg" src={webImg} alt=""/>
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
            <ol className='list-disc'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">WEBSITE : Développement d'un site E-commerce</h5>
                <li className="mb-2 font-normal text-white-700 dark:text-white-400">Apprenez à développer une API avec NodeJS, TypeScript et ExpressJS.</li>
                <li className="mb-2 font-normal text-white-700 dark:text-white-400">Création d'un site d'e-commerce ( page : accueil, produits , administrateur ( ajout et suppression de produit), panier). 
                </li>
              </ol>
            </div>
            </div>
          </a>
<a href="# " className="flex flex-col items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 animate-fadeIn duration-2s">
  <div className="flex flex-col md:flex-row md:max-w-xl">
    <div className="md:w-48">
      <img className="object-cover w-full rounded-t-lg md:rounded-none md:rounded-l-lg" src={etnaImg} alt=""/>
    </div>
    <div className="flex flex-col justify-between flex-1 p-4 leading-normal">
      <ol className='list-disc'>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">Defi ETNA : S'emarger automatiquement avec les cartes étudiants.</h5>
        <li className="mb-2 font-normal text-white-700 dark:text-white-400">Création d'un backend (API) et d'un frontend (web) en utilisant les technologies suivantes:</li>
        <li className="mb-2 font-normal text-white-700 dark:text-white-400">Pour le backend : MySQL, NodeJS, TypeScript et ExpressJS.<br /> Pour le frontend : JavaScript, ReactNative, CSS</li>
      </ol>
    </div>
  </div>
</a>
          <a href="# " className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 animate-fadeIn duration-2s">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={ImgG} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
            <ol className='list-disc'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">The Hyrule Castle: Développement de jeux en TypeScript</h5>
                <li className="mb-2 font-normal text-white-700 dark:text-white-400">Gérer les entrées utilisateur et leur gestion des erreurs</li>
                <li className="mb-2 font-normal text-white-700 dark:text-white-400">Créer un gameplay autour de fonctions algorithmiques et mathématiques</li>
              </ol>
            </div>
          </a>
          <a href="# " className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 animate-fadeIn duration-2s">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={mImg} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
            <ol className='list-disc'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Poubelle Automatique: programmation arduino</h5>
                <li className="mb-2 font-normal text-white-700 dark:text-white-400">Conception et développement d'une poubelle qui s'ouvre automatiquement dès que le capteur détecte un mouvement a moins de 20cm. Programmée en Arduino</li>
 
              </ol>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Projets;