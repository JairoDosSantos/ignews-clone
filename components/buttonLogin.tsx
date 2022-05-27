import { NextPage } from 'next';
import Image from 'next/image';




const LoginButton: NextPage = () => {
    const isLoggIn = true;
    return (
        <>
            {
                (!isLoggIn ? <button className='flex gap-3 items-center justify-center w-[218px] py-2 rounded-full bg-btnLogin hover:brightness-75' >
                    <span className=''>
                        <Image src='/Github.png' height={15} width={15} />
                    </span>
                    <span className=''>Sign in with Github</span>
                </button> : <button className='flex gap-3 items-center justify-center sm:w-[218px] py-2 px-2 rounded-full bg-btnLogin hover:brightness-75'>

                    <span className=''>
                        <Image src='/GithubSignout.png' className='hidden inset-0' height={15} width={15} />
                    </span>
                    <span className=''>Jairo Cristóvão</span>
                    <Image src='/close.png' height={15} width={15} />
                </button>)
            }

        </>
    )
}

export default LoginButton;