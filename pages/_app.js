import Head from 'next/head'
import NavBar from '../components/NavBar'
import styles from '../styles/styles.css'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel='apple-touch-icon' sizes='180x180' href='/favicon_io/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon_io/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon_io/favicon-16x16.png' />
				<link rel='manifest' href='/favicon_io/site.webmanifest' />
			</Head>
			<NavBar />
			<Component {...pageProps} />
		</>
	)
}
