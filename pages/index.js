import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

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
					<div>
						<a
						href="https://nextjs.org/"
						target="_blank"
						rel="noopener noreferrer"
						>
						<Image
							src="/next.svg"
							alt="Next.js Logo"
							className={styles.nextLogo}
							width={100}
							height={24}
							priority
						/>
						</a>
					</div>
				</div>

				<div className={styles.center}>
					<Link href="/ssg" className={styles.card}>
						<h2 className={inter.className}>Static Site Generation + ISR</h2>
					</Link>
					<br />
					<Link href="/ssr" className={styles.card}>
						<h2 className={inter.className}>Server-Side Rendering</h2>
					</Link>
					<br />
					<Link href="/swr" className={styles.card}>
						<h2 className={inter.className}>SWR - React Hooks for Data Fetching</h2>
					</Link>
					<br />
					<Link href="/ssg-swr" className={styles.card}>
						<h2 className={inter.className}>SSG + SWR</h2>
					</Link>
					<br />
					<Link href="/ssg-isr-swr" className={styles.card}>
						<h2 className={inter.className}>SSG + ISR + SWR</h2>
					</Link>
				</div>

				<div className={styles.grid}></div>
			</main>
		</>
	)
}
