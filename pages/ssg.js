import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Page1({ data }) {
	return (
		<>
			<Head>
				<title>SSG + ISR</title>
			</Head>
			<main className={styles.main}>
				<h1 className={inter.className}>SSG (Static Site Generation / <a href="https://nextjs.org/docs/basic-features/data-fetching/get-static-props">getStaticProps</a>)</h1>

				<p className={inter.className}>⬅️ <Link href="/">Back Home</Link></p>

				<ul>
					{data.data.map((item) => (
						<li key={item.id} className={inter.className}>{item.title}</li>
					))}
				</ul>
			</main>
		</>
	);
}


// This gets called on every request
export async function getStaticProps() {
	const res = await fetch('https://thtp1a9i.directus.app/items/articles')
	const data = await res.json()

	return {
		props: {
			data,
		},
	}
}
