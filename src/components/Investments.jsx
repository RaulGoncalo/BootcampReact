import Investment from "./Investment"

export default function Investments({ investment }) {
    const positiveOrNegative = parseFloat(investment.totalYield) >= 0 ? 'text-green-500' : 'text-red-500';

    return (
        <div className="border-4 mb-6 p-2 text-center">
            <h2 className='font-semibold' >{investment.description}</h2>
            <spam>Rendimento total: </spam>
            <spam className={positiveOrNegative}>{`R$ ${investment.totalYield.toLocaleString('pt-BR')} (${investment.totalVariation.toLocaleString('pt-BR')}%)`}</spam>
            {
                investment.reports.map((item) => {
                    return <Investment key={item.id} report={item} />
                })
            }
        </div>
    )
}
