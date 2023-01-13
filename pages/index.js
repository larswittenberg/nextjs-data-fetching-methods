import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Next.js data fetching methods</title>
				<meta name="description" content="Demo project for SSG, SSR, ISR, SWR" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.description}>
					<h1>Next.js data fetching methods - SSG, SSR, ISR, SWR, CSR</h1>
				</div>

				<div className={styles.center}>
					<Link href="/00-csr" className={styles.card}>
						<h2>00. CSR - Client Side Rendering</h2>
					</Link>
					<br />

					<Link href="/00-swr" className={styles.card}>
						<h2>00. SWR - React Hooks for Data Fetching</h2>
					</Link>
					<br />

					<hr />
					<br />

					<Link href="/01-ssg" className={styles.card}>
						<h2>01. Static Site Generation</h2>
					</Link>
					<br />

					<Link href="/02-ssg-isr" className={styles.card}>
						<h2>02. Static Site Generation + ISR</h2>
					</Link>
					<br />

					<Link href="/03-ssg-swr" className={styles.card}>
						<h2>03. Static Site Generation + SWR</h2>
					</Link>
					<br />

					<Link href="/04-ssg-swr-isr" className={styles.card}>
						<h2>04. Static Site Generation + SWR + ISR</h2>
					</Link>
					<br />

					<hr />
					<br />

					<Link href="/05-ssr" className={styles.card}>
						<h2>05. Server-Side Rendering</h2>
					</Link>
					<br />

					<Link href="/06-ssr-swr" className={styles.card}>
						<h2>06. Server-Side Rendering + SWR</h2>
					</Link>
					<br />
				</div>

				<div className={styles.grid}></div>
			</main>
		</>
	);
}
