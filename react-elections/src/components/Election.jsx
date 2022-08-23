import CardCandidates from "./CardCandidates"

export default function Election({ elecitons, city }) {
    const presence = city.votingPopulation - city.absence

    return (
        <div className='flex  flex-col space-y-2 border items-center justify-center p-2 m-2'>
            <h2 className='font-bold'>Eleições em {city.name}</h2>
            <div className='flex flex-row justify-between items-center'>
                <span>
                    <strong>Total de  eleitores: </strong>
                    {city.votingPopulation.toLocaleString('pt-br')}
                    <strong> Absteção: </strong>
                    {city.absence.toLocaleString('pt-br')}
                    <strong> Comparecimento: </strong>
                    {presence.toLocaleString('pt-br')}
                </span>
            </div>
            <h3 className='font-semibold'>{elecitons.length} candidatos</h3>
            <div className="flex flex-row justify-center space-x-2 flex-wrap">
                {

                    elecitons.sort((a, b) => b.votes - a.votes).map((item, index) => {
                        return <CardCandidates key={item.id} electionInfos={item} votingTotal={city.presence} elected={index} />
                    })
                }
            </div>
        </div>
    )
}
