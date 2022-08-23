import { read } from "./httpServices";

async function apiGetCities() {
  const cities = await read("cities");
  return cities.sort((a, b) => a.name.localeCompare(b.name));
}

async function apiGetCandidates() {
  const candidates = await read("candidates");
  return candidates;
}

async function apiGetElection(cityId) {
  const allCities = await apiGetCities();
  const city = allCities.find((city) => city.id === cityId);
  const allCandidates = await apiGetCandidates();

  const election = await read(`election?cityId=${cityId}`);

  const electionsComplete = {
    elections: election.map((item) => {
      const { name, username } = allCandidates.find(
        (candidate) => item.candidateId === candidate.id
      );

      return { ...item, name, username };
    }),
    city,
  };

  return electionsComplete;
}

export { apiGetCities, apiGetCandidates, apiGetElection };
