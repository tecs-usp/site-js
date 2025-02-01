import { getPostData, getAllPostSlugs } from '../../lib/posts';
import styles from './Post.module.css';

export async function getStaticPaths() {
    const paths = getAllPostSlugs();
    return {
        paths,
        fallback: false, // Show 404 if the slug doesn't exist
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.slug);
    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    return (
        <article className={styles.container}>
            <h1 className={styles.title}>{postData.title}</h1>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
        </article>
    );
}