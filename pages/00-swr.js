import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import styles from '../styles/Home.module.css';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page00() {
	const { data, error } = useSWR('https://thtp1a9i.directus.app/items/articles', fetcher);

	if (error) return <div>Failed to load</div>;

	return (
		<>
			<Head>
				<title>00. SWR - React Hooks for Data Fetching</title>
			</Head>
			<main className={styles.main}>
				<h1>
					<a href="https://swr.vercel.app/">SWR (stale-while-revalidate) - React Hooks for Data Fetching</a>
				</h1>

				<p>
					⬅️ <Link href="/">Back Home</Link>
				</p>
				<br />

				<p>
					The team behind Next.js has created a React hook library for data fetching called SWR. It is highly
					recommended if you are fetching data on the client-side. It handles caching, revalidation, focus
					tracking, refetching on intervals, and more.
				</p>

				{!data ? (
					<ul>
						<li>Loading...</li>
					</ul>
				) : (
					<ul>
						{data.data.map((item) => (
							<li key={item.id}>{item.title}</li>
						))}
					</ul>
				)}
			</main>
		</>
	);
}
