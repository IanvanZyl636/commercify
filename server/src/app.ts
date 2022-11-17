import apiServerUp from "./integration/express";
import axios, {AxiosResponse} from "axios";
import {IPokemonListResponse} from "./model/pokemonList.model";
import {Status, LoadsheddingStage} from "eskom-loadshedding-api";

const getPokemonList = async () => {
    return await axios
        .get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
        .then((resp: AxiosResponse<IPokemonListResponse>) => resp);
};

const getPokemonByName = (
    pokenListRespReslts: Array<{ name: string; url: string }>,
    pokemonName: string
) => {
    return pokenListRespReslts.filter(
        (pokemon: { name: string; url: string }) => pokemon.name === pokemonName
    )[0];
};

const initialize = async () => {
    const pokenListResp = await getPokemonList();
    console.log(pokenListResp.data.results);
    const jigg = getPokemonByName(pokenListResp.data.results, "jigglypuff");
    const pop = "";
};

initialize();

const port = Number(process.env.PORT) || 5000;

apiServerUp(port);

// import { Search, Province, Municipality, Suburb } from "eskom-loadshedding-api";
// import { subtle } from "crypto";
//
// const filterFuncFirstItem = (
//   datas: Array<any>,
//   dataKey: string,
//   findCondition: any
// ) => {
//   return datas.filter((data) => data[dataKey] === findCondition)[0];
// };
//
// const initialize = async () => {
//   const cityOfTshwane = await Search.getMunicipalities(Province.GAUTENG).then(
//     (municipalities: Municipality[]) =>
//       municipalities.filter((municipality) => municipality.id === 167)[0]
//   );
//
//   const suburbCeltisdal = await Search.getMunicipalitySuburbs(
//     cityOfTshwane.id,
//     "CELTISDAL"
//   ).then((suburbs: Suburb[]) => filterFuncFirstItem(suburbs, "id", 1025243));
//
//   const pop = suburbCeltisdal;
// };
//
// initialize();
