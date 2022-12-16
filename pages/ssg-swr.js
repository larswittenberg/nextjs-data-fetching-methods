import Head from 'next/head'
import Link from 'next/link'
import useSWR, { SWRConfig } from 'swr'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Page4({ fallback }) {
	return (
		<>
			<Head>
				<title>SSG + SWR</title>
			</Head>
			<main className={styles.main}>
				<h1 className={inter.className}><a href="https://swr.vercel.app/docs/with-nextjs">SSG + SWR</a></h1>

				<p className={inter.className}>⬅️ <Link href="/">Back Home</Link></p>

				<SWRConfig value={{ fallback }}>
					<Article />
				</SWRConfig>
			</main>
		</>
	);
}


function Article() {
	// `data` will always be available as it's in `fallback`.
	const { data, error } = useSWR('https://thtp1a9i.directus.app/items/articles', fetcher)

	// there should be no `undefined` state
	console.log("Is data ready?", !!data);

	if (error) return "An error has occurred.";
	if (!data) return "Loading...";

	return (
		<ul>
			{data.data.map((item) => (
				<li key={item.id} className={inter.className}>{item.title}</li>
			))}
		</ul>
	)
}


// This gets called on every request
export async function getStaticProps() {
	const res = await fetch('https://thtp1a9i.directus.app/items/articles')
	const data = await res.json()

	return {
		props: {
			fallback: {
				'https://thtp1a9i.directus.app/items/articles': data
			}
		}
	}
}
