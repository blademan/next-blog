import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getPosts } from '../lib/posts';


export async function getStaticProps() {
	const posts: PostTypes[] = await getPosts()

	return {
		props: { posts },
	}
}

type PostTypes = {
	title: string;
	date: string;
	body: string;
	slug: string;
}


const HomePage: NextPage<{ posts: PostTypes[] }> = ({ posts }) => {



	return (
		<>
			<Head>
				<title >Home - Blog</title>
			</Head>
			<main>
				<h1>My Blog1</h1>
				<ul>
					{posts.map((post) => (
						<li key={post.slug}>
							<Link href={`posts/${post.slug}`}>{post.title}</Link>
							<hr />
						</li>
					))}
				</ul>
			</main>
		</>
	)
}

export default HomePage