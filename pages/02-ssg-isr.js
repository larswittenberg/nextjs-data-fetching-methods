import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Page1({ data }) {
	return (
		<>
			<Head>
				<title>02. SSG + ISR</title>
			</Head>
			<main className={styles.main}>
				<h1>
					SSG - Static Site Generation (
					<a href="https://nextjs.org/docs/basic-features/data-fetching/get-static-props">
						getStaticProps
					</a>
					) +{" "}
					ISR <a href="https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration">
						(Incremental Static Regeneration)
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


// This gets called on every request
export async function getStaticProps() {
	const res = await fetch('https://thtp1a9i.directus.app/items/articles')
	const data = await res.json()

	return {
		props: {
			data,
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		revalidate: 10, // In seconds
	}
}
