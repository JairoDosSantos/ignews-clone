import Link from "next/link";


export default function Item() {
    return (
        <div className="border-b border-b-headerBorderBottom  space-y-2 mt-4 py-8">
            <time className="text-gray-400 text-sm">12 de março de 2021</time>
            <h1 className="font-extrabold text-xl hover:text-orangeNews transform hover:transition-all">
                <Link href='/posts/1'>Creating a Monorepo with Lerna & Yarn Workspaces</Link>
            </h1>
            <p className="text-gray-400 text-sm">In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
        </div>
    );
}
