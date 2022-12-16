import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Page2({ data }) {
	return (
		<>
			<Head>
				<title>SSR</title>
			</Head>
			<main className={styles.main}>
				<h1>SSR (Server-Side Rendering / <a href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props">getServerSideProps</a>)</h1>

				<p>⬅️ <Link href="/">Back Home</Link></p>

				<ul>
					{data.data.map((item) => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			</main>
		</>
	);
}


// This gets called on every request
export async function getServerSideProps() {
	const res = await fetch('https://thtp1a9i.directus.app/items/articles')
	const data = await res.json()

	return {
		props: {
			data,
		}
	}
}
