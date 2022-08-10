import { useState } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import TextInput from '../components/TextInput'
import Countries from '../components/Countries'

import {allCountries} from '../data/countries'


function ReactCountriesPage() {
  const [countrieFilter, setCountrieFilter] = useState("")
  const [visitedCountries, setVisitedCountries] = useState([])

  function handleCountriFilter(newCountry){
    setCountrieFilter(newCountry)
  }

  function toggleVisitedCountry (countryName){
    let newVisitedCountries = [...visitedCountries]

    if(newVisitedCountries.indexOf(countryName) !== -1){
      newVisitedCountries = newVisitedCountries.filter((country) => {
        return country !== countryName
      })

    }else{
      newVisitedCountries.push(countryName)
    }

    setVisitedCountries(newVisitedCountries)
  }

  const countrieFilterLowerCase = countrieFilter.trim().toLocaleLowerCase()

 
  const filteredCountries =  countrieFilterLowerCase.length >= 3 ? allCountries.filter(({name}) => {
    return name.common.toLocaleLowerCase().includes(countrieFilterLowerCase)
  }) : allCountries

  return(
    <div>
      <Header>
        React Countries
      </Header>

    <Main>
      <TextInput 
        id = "inputCountriFilter"
        labelDescription='Infome o nome do pais (pelo menos 3 letras'
        inputValue= {countrieFilter}
        autoFocus
        onInputChange={handleCountriFilter}
      />

      <Countries visitedCountries = {visitedCountries} onCountryClick = {toggleVisitedCountry}>{filteredCountries}</Countries>
    </Main>
   
  </div>
  )
}

export default ReactCountriesPage;