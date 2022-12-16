import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Page2({ data }) {
	return (
		<>
			<Head>
				<title>SSR</title>
			</Head>
			<main className={styles.main}>
				<h1 className={inter.className}>SSR (Server-Side Rendering / <a href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props">getServerSideProps</a>)</h1>

				<p className={inter.className}><Link href="/">Home</Link></p>

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
export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch('https://thtp1a9i.directus.app/items/articles')
	const data = await res.json()

	return {
		props: {
			data,
		}
	}
}
