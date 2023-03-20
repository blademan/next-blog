import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getPosts } from '../lib/posts';



interface Post {
	title: string;
	date: string;
	body: string;
	slug: string;
}

interface Props {
	posts: Post[]
}


const HomePage: NextPage<Props> = ({ posts }) => {



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


export const getStaticProps: GetStaticProps<Props> = async () => {
	const posts = await getPosts() ?? [];
	return {
		props: { posts },
	};
}