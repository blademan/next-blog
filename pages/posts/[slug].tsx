import { NextPage } from 'next';
import Head from 'next/head';
import { getPost, getSlugs } from '../../lib/posts';

type PostTypes = {
	title: string;
	date: string;
	body: string;
}

type SlugTypes = string[]


export async function getStaticPaths() {
	const slugs: SlugTypes = await getSlugs()
	return {
		paths: slugs.map(slug => ({
			params: { slug },
		})),
		fallback: false,
	}
}

export async function getStaticProps({ params: { slug } }) {
	const post: PostTypes = await getPost(slug)
	return {
		props: { post },
	}
}

const PostPage: NextPage<{ post: PostTypes }> = ({ post }) => {


	return (
		<>
			<Head>
				<title>{post.title} - My Blog</title>
			</Head>
			<p>{post.date}</p>
			<h1>{post.title}</h1>
			<article dangerouslySetInnerHTML={{ __html: post.body }} />
		</>
	)
}
export default PostPage