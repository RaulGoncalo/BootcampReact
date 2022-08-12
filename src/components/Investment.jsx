export default function Table({ report }) {
    function shortenMonth(month) {
        const months = [
            "jan",
            "fev",
            "mar",
            "abr",
            "mai",
            "jun",
            "jul",
            "ago",
            "set",
            "out",
            "nov",
            "dez"
        ]
        return months[month - 1]

    }
    const positiveOrNegative = parseFloat(report.variation) > 0 ? 'text-green-500' : parseFloat(report.variation) < 0 ? 'text-red-500' : '';
    return (
        <div className="flex flex-row border-b-2 p-2 m-2">

            <div className="flex m-2 mr-4">
                <p >
                    {`${shortenMonth(report.month)}/${report.year}`}
                </p>
            </div>

            <div className="flex flex-row m-2">
                <p className={positiveOrNegative} >
                    R$ {report.value.toFixed(2)}
                </p>
            </div>

            <div className="flex-1 flex-row m-2 justify-end">
                <p className={`${positiveOrNegative} text-right`}>
                    {report.variation}%
                </p>
            </div>

        </div>
    )
}
