import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Page00() {
	const { data, error } = useSWR('https://thtp1a9i.directus.app/items/articles', fetcher)

	if (error) return <div>Failed to load</div>
	if (!data) return <div>Loading...</div>

	return (
		<>
			<Head>
				<title>00. SWR - React Hooks for Data Fetching</title>
			</Head>
			<main className={styles.main}>
				<h1>
					<a href="https://swr.vercel.app/">
						SWR (stale-while-revalidate) - React Hooks for Data
						Fetching
					</a>
				</h1>

				<p>
					⬅️ <Link href="/">Back Home</Link>
				</p>

				<ul>
					{data.data.map((item) => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			</main>
		</>
	);
}
