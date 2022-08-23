import React from 'react'

export default function CardCandidates({ electionInfos, votingTotal, elected }) {
    const isElected = elected > 0 ? false : true

    const textStyle = isElected ? 'text-green-500' : 'text-orange-500'
    return (
        <div className='flex flex-col items-center justify-center shadow-sm bg-gray-50 p-2 m-2 w-60 h-48 '>
            <div className='flex flex-row space-x-8 p-2'>
                <div >
                    <img className='rounded-full w-14' src={`/img/${electionInfos.username}.png`} alt={electionInfos.username} />
                </div>

                <div>
                    <p className={`font-bold text-2xl ${textStyle}`}>{(electionInfos.votes / votingTotal * 100).toFixed(2).toLocaleString('pt-br')}%</p>
                    <p>{electionInfos.votes.toLocaleString('pt-br')} votos</p>
                </div>
            </div>

            <p className={`font-semibold text-2xl mt-4`}>{electionInfos.name}</p>
            <span className={`font-semibold ${textStyle}`}>{isElected ? 'Eleito' : 'Não eleito'}</span>
        </div>
    )
}
