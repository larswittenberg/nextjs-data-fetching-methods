import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Page02({ data, time }) {
	return (
		<>
			<Head>
				<title>02. SSG + ISR</title>
			</Head>
			<main className={styles.main}>
				<h1>
					SSG - Static Site Generation (
					<a href="https://nextjs.org/docs/basic-features/data-fetching/get-static-props">getStaticProps</a>)
					+ ISR{' '}
					<a href="https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration">
						(Incremental Static Regeneration)
					</a>
				</h1>

				<p>
					⬅️ <Link href="/">Back Home</Link>
				</p>
				<br />

				<p>
					Next.js allows you to create or update static pages after you’ve built your site. Incremental Static
					Regeneration (ISR) enables you to use static-generation on a per-page basis, without needing to
					rebuild the entire site. With ISR, you can retain the benefits of static while scaling to millions
					of pages.
				</p>

				<p className={styles.mt}>Uhrzeit Build-Time: {time}</p>

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

	const now = new Date();
	let time = `${now.getHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`;

	return {
		props: {
			data,
			time,
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		revalidate: 10, // In seconds
	};
}
