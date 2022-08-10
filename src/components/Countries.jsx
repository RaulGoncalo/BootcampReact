import Country from "./Country";

function Countries({children: countries = [], onCountryClick = null, visitedCountries = []} ) {
  return (
    <div className="border p-2">
       <h2 className="text-center font-semibold">{`${countries.length} pais(es)`}</h2> 
       <h2 className="text-center font-semibold">{`${visitedCountries.length} pais(es) visitados`}</h2> 

       {
        countries.map((country, index)=>{
            const isVisited = visitedCountries.indexOf(country.name.common) !== -1;

            return <Country 
                        onCountryClick = {onCountryClick} 
                        key = {index}
                        isVisited = {isVisited}
                    >
                        {country}
                </Country>
        })
       }
       
    </div>

  );
}

export default Countries;