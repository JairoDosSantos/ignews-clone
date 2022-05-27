import { NextPage } from "next";
import Head from "next/head";
import Item from "../../components/postItem";


const Posts: NextPage = () => {
    return (
        <div className='max-w-2xl mx-auto px-5 sm:px-0'>
            <Head>
                <title>All Posts</title>
            </Head>
            <Item />
            <Item />
            <Item />
        </div>
    )
}

export default Posts;