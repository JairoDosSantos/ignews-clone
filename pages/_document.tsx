import { NextPage } from 'next';
import { Head, Html, Main, NextScript } from 'next/document';



const Document: NextPage = () => {
    return (
        <>
            <Html>
                <Head>
                    <title>igNews</title>
                    <link rel="icon" href="/logo.svg" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        </>
    )
}

export default Document;