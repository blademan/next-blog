import Head from 'next/head'

export default function about() {
	console.log('[AboutPage] render')
	return (
		<>
			<Head>
				<title>About - Blog</title>
			</Head>
			<main>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel necessitatibus ut beatae, voluptatum nesciunt
				eaque eius alias! Blanditiis, eaque!
			</main>
		</>
	)
}
