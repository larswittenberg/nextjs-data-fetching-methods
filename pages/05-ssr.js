import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Page05({ data }) {
	return (
		<>
			<Head>
				<title>05. SSR</title>
			</Head>
			<main className={styles.main}>
				<h1>
					SSR (Server-Side Rendering /{' '}
					<a href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props">
						getServerSideProps
					</a>
					)
				</h1>

				<p>
					⬅️ <Link href="/">Back Home</Link>
				</p>
				<br />

				<p>
					If you export a function called getServerSideProps (Server-Side Rendering) from a page, Next.js will
					pre-render this page on each request using the data returned by getServerSideProps.
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
export async function getServerSideProps() {
	const res = await fetch('https://thtp1a9i.directus.app/items/articles');
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}
