import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getPost, getSlugs } from '../../lib/posts';

type PostTypes = {
	title: string;
	date: string;
	body: string;
}



interface PostPageProps {
	post: PostTypes
}


export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = await getSlugs()
	return {
		paths: slugs.map(slug => ({
			params: { slug },
		})),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params: { slug } }) => {
	const post = await getPost(slug);
	return {
		props: { post },
	};
};

const PostPage: NextPage<{ post: PostTypes }> = ({ post }) => {


	return (
		<>
			<Head>
				<title>{post.title}</title>
			</Head>
			<p>{post.date}</p>
			<h1>{post.title}</h1>
			<article dangerouslySetInnerHTML={{ __html: post.body }} />
		</>
	)
}
export default PostPage