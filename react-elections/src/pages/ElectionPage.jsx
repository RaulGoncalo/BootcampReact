import { apiGetCandidates, apiGetElection, apiGetCities } from '../services/apiServices';

import Header from '../components/Header';
import Main from '../components/Main';
import Error from '../components/Error';
import { useEffect, useState } from 'react';
import SelectCities from '../components/SelectCities';
import Election from '../components/Election';
import Loading from '../components/Loading';

export default function ElectionPage() {
    const [citySelected, setCitySelected] = useState(null);
    const [cities, setCities] = useState([]);
    const [candidates, setCandidates] = useState([]);
    const [allElections, setAllElections] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [loadingElections, setLoadingElections] = useState(true)

    useEffect(() => {
        async function getBackendCities() {
            try {
                const bakendCities = await apiGetCities();
                setCities(bakendCities);
                setCitySelected(bakendCities[0].id)
                setError('');
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false)
            }
        }
        getBackendCities()
    }, []);

    useEffect(() => {
        if (!citySelected) {
            return
        }

        async function getBackendElecions() {
            setLoadingElections(true);
            const backendElections = await apiGetElection(citySelected);
            setAllElections(backendElections);
            setLoadingElections(false);
        }
        getBackendElecions()
    }, [citySelected])



    function handleCitySelected(cityId) {
        setCitySelected(cityId)
    }


    return (

        <>
            <Header>React-elections</Header>

            <Main>
                {

                    loading
                        ?
                        <Loading />
                        :
                        error
                            ?
                            <Error>{error}</Error>
                            :
                            <>
                                <div className='flex flex-col items-center justify-center'>
                                    <h2 className='font-semibold'>
                                        Escolha um município
                                    </h2>

                                    <SelectCities cities={cities} onSelected={handleCitySelected} />
                                </div>
                                {
                                    loadingElections
                                        ?
                                        <Loading />
                                        :
                                        <Election elecitons={allElections.elections} city={allElections.city} />
                                }

                            </>
                }

            </Main>
        </>
    )
}
