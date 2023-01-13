import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Page01({ data }) {
	return (
		<>
			<Head>
				<title>01. SSG</title>
			</Head>
			<main className={styles.main}>
				<h1>
					SSG - Static Site Generation (
					<a href="https://nextjs.org/docs/basic-features/data-fetching/get-static-props">getStaticProps</a>)
				</h1>

				<p>
					⬅️ <Link href="/">Back Home</Link>
				</p>
				<br />

				<p>
					If you export a function called getStaticProps (Static Site Generation) from a page, Next.js will
					pre-render this page at build time using the props returned by getStaticProps.
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
	const res = await fetch('https://thtp1a9i.directus.app/items/articles');
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}
