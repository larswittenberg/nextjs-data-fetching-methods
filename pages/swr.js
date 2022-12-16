import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Page3() {
	const { data, error } = useSWR('https://thtp1a9i.directus.app/items/articles', fetcher)

	if (error) return <div>Failed to load</div>
	if (!data) return <div>Loading...</div>

	return (
		<>
			<Head>
				<title>SWR</title>
			</Head>
			<main className={styles.main}>
				<h1 className={inter.className}><a href="https://swr.vercel.app/">SWR - React Hooks for Data Fetching</a></h1>

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
