import { NextPage } from 'next';
import Head from 'next/head';

const PostInfo: NextPage = () => {
    return (
        <div className='max-w-4xl px-5 sm:px-0 mx-auto '>
            <Head>
                <title>Info. About Post</title>
            </Head>

            <div className='max-w-2xl mt-10 mx-auto '>
                <h1 className='text-4xl font-extrabold'>Past, Present, and Future of React State Management</h1>

                <time className='text-gray-400 text-sm'>12 de março de 2021</time>

                <p className='paragrafo'>React was introduced in May 2013. Its paradigm shift was that your UI was a function of your state. Given some component state, React can determine what your component will look like. React is built upon the idea of state. However, state has long been one of the most difficult parts of building a React application.</p>

                <p className='paragrafo'>Let's imagine state management in React as a rugged tool belt. You've used this tool belt for years, slowly adding new tools as needed. Each tool serves a very specific purpose. You don't use your hammer to screw in bolts. As a craftsman, you've learned the right time and place to use each tool.</p>

                <p className='paragrafo'> State management with React is a rugged tool belt, but not everyone has the prior experience to know which tool to reach for. This post will explain the past, present, and future of state management to help you make the correct decision for your team, project, or organization.</p>

                <h3 className='text-lg font-bold mt-10'>Glossary</h3>

                <p className='paragrafo'> Before we begin, it's critical you understand some of the terms commonly used. These aren't the canonical names. A few different variations of each float around, but the underlying ideas are the same:</p>

                <ul className='px-5'>
                    <li className='listItem'>UI State – State used for controlling interactive parts of our application (e.g. dark mode toggle, modals).</li>
                    <li className='listItem'>Server Cache State – State from the server, which we cache on the client-side for quick access (e.g. call an API, store the result, use it in multiple places).</li>
                    <li className='listItem'>Form State – The many different states of a form (e.g. loading, submitting, disabled, validation, retrying). There's also controlled & uncontrolled form state.</li>
                    <li className='listItem'>URL State – State managed by the browser (e.g. filter products, saving to query parameters, and refreshing the page to see the same products filtered)</li>
                    <li className='listItem'>State Machine – An explicit model of your state over time (e.g. a stoplight goes from green → yellow → red, but never green → red).</li>

                </ul>
            </div >
        </div >
    );
}

export default PostInfo;