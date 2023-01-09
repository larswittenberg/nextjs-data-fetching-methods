import Head from 'next/head'
import Link from 'next/link'
import useSWR, { SWRConfig } from "swr";
import styles from '../styles/Home.module.css'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page06({ fallback }) {
	return (
		<>
			<Head>
				<title>06. SSR + SWR</title>
			</Head>
			<main className={styles.main}>
				<h1>
					SSR (Server-Side Rendering /{" "}
					<a href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props">
						getServerSideProps
					</a>
					) +{" "}
					<a href="https://swr.vercel.app/docs/with-nextjs">SWR</a>
				</h1>

				<p>
					⬅️ <Link href="/">Back Home</Link>
				</p>

				<SWRConfig value={{ fallback }}>
					<Article />
				</SWRConfig>
			</main>
		</>
	);
}


function Article() {
	// `data` will always be available as it's in `fallback`.
	const { data, error } = useSWR(
		"https://thtp1a9i.directus.app/items/articles",
		fetcher
	);

	// there should be no `undefined` state
	console.log("Is data ready?", !!data);

	if (error) return "An error has occurred.";
	if (!data) return "Loading...";

	return (
		<ul>
			{data.data.map((item) => (
				<li key={item.id}>{item.title}</li>
			))}
		</ul>
	);
}


// This gets called on every request
export async function getServerSideProps() {
	const res = await fetch('https://thtp1a9i.directus.app/items/articles')
	const data = await res.json()

	return {
		props: {
			fallback: {
				"https://thtp1a9i.directus.app/items/articles": data,
			},
		},
	};
}
