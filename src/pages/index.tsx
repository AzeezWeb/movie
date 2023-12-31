import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react'
import Head from 'next/head';
import { Header, Hero, Row } from 'src/components';
import { IMovie } from 'src/interfaces/app.interface';
import { API_REQUEST } from 'src/services/api.servise.';

export default function Home(): JSX.Element {
  const [trending, setTrending] = useState<IMovie | any >(null)

  useEffect( () => {
    const getData = fetch(API_REQUEST.trending)
    .then(response => response.json())
    .then(response =>console.log(response.results))
    .catch(err => console.error(err)); 
  
    
   },[])


	return (
		<div className='relative h-[200vh]'>
			<Head>
				<title>Home - Sammi</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/logo.svg' />
			</Head>
			<Header />
			<main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
				<Hero trending={trending} />
				<section>
					{/* Row */}
					{/* BigRow */}
					{/* Row */}
					{/* BigRow */}
				</section>
			</main>
		</div>
	);
};

// export const getServerSideProps: GetServerSideProps = async () => {
// 	const trending = fetch(API_REQUEST.trending).then(res => res);

// 	return {
// 		props: {
// 			trending: trending,
// 		},
// 	};
// };




interface HomeProps {
	trending: IMovie[];
}



// useEffect( () => {
//   const getData = fetch(API_REQUEST.trending)
//   .then(response => response.json())
//   .then(response =>console.log(response.results))
//   .catch(err => console.error(err)); 

  
//  },[])