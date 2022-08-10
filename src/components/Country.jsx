import Item from './Item'

export default function Country({
    children: country = null, 
    onCountryClick = null, 
    isVisited = false
}) {
    if(!country){
        return <div>Impossivel renderizar o pais</div>
    }

    function handleCountryClick (){
        if(onCountryClick){
            console.log("Clicou no pais: " + name.common )
            onCountryClick(name.common)
        }
    }

    const demographcDensity = country.population / country.area

    const {flags, name, capital, region, population, area} = country

    const isVisitedClassName = isVisited ? 'bg-green-100' : '';
  return (
    <div className= {`border p-2 m-2 flex flex-row items-center space-x-2 cursor-pointer ${isVisitedClassName}`}onClick = {handleCountryClick}>
        <img className = "w-48" alt={name.common} src = {flags.svg}/>
        <ul>
            <li><Item label = "Nome: ">{name.common}</Item></li>
            <li><Item label = "Capital: ">{capital}</Item></li>
            <li><Item label = "Região: ">{region}</Item></li>
            <li><Item label = "População: ">{population}</Item></li>
            <li><Item label = "Área: ">{area}</Item></li>
            <li><Item label = "Densidade demográfica: ">{demographcDensity}</Item></li>
        </ul>
    </div>
  )
}
