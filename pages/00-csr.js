import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page00() {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('https://thtp1a9i.directus.app/items/articles')
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!data) return <p>No data</p>;

	return (
		<>
			<Head>
				<title>00. CSR - Client Side Rendering</title>
			</Head>
			<main className={styles.main}>
				<h1>
					<a href="https://nextjs.org/docs/basic-features/data-fetching/client-side">
						CSR - Client Side Rendering
					</a>
				</h1>

				<p>
					⬅️ <Link href="/">Back Home</Link>
				</p>
				<br />

				<p>
					Client-side data fetching is useful when your page doesn&apos;t require SEO indexing, when you
					don&apos;t need to pre-render your data, or when the content of your pages needs to update
					frequently.
				</p>
				<p>
					It&apos;s important to note that using client-side data fetching can affect the performance of your
					application and the load speed of your pages.
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
