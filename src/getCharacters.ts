import fetch from 'node-fetch';


const CharactersUrl = "https://s3.eu-west-2.amazonaws.com/build-circle/characters.json";

export type Character = {
    name: string
    score: number
    type: string
}

export type CharactersResponse = {
    items: Character[]
}


export async function getCharacters(): Promise<CharactersResponse> {
  const response = await fetch(CharactersUrl);
  const responseJson = await response.json() as CharactersResponse;
  return responseJson
}