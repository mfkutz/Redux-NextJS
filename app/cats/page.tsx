'use client'
import { useGetPhrasesQuery } from '@/lib/services/catPhrases'
import Link from 'next/link'

const CatsPhrases = () => {

    const { isFetching, isLoading, data, error } = useGetPhrasesQuery(null)

    // if (isFetching || isLoading) return <div>Loading...</div>

    if (error) return <div>Error</div>

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <h1 className='mb-5'>Phrases of cats</h1>

            <div className="mb-5">
                {
                    (isFetching || isLoading) ?
                        <div>Loading...</div>
                        :
                        <p className="max-w-[800px] text-center">{data?.fact}</p>
                }
            </div>

            <button
                className='bg-green-500 px-5 rounded-md'
                onClick={() => window.location.reload()}
            >
                Next
            </button>
            <Link href={'/'}>
                <button
                    className='bg-blue-500 px-5 rounded-md mt-2'
                >
                    Home
                </button>
            </Link>


        </div>
    );
}

export default CatsPhrases;
