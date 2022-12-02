import {getCharacters, Character} from './getCharacters'

export async function battle(heroName: string, villainName: string): Promise<Character> {
  const characters = await getCharacters();
  const hero = characters.items.find(e => e.name === heroName);
  const villain = characters.items.find(e => e.name === villainName);
  assert_characters_exist(hero!, heroName, villain!, villainName);

  return gets_winner(hero!, villain!);
}

function assert_characters_exist(hero: Character, heroName: string, villain: Character, villainName: string) {
  let message = ''
  if(!hero)
    message = `Character ${heroName} not found. Try again with another name.`
  if(!villain)
    message = `Character ${villainName} not found. Try again with another name.`
  if(!villain && !hero)
    message = `Characters ${heroName} and ${villainName} not found. Try again with another names.`
  if (message)
    throw new Error(message)
}

function gets_winner(hero: Character, villain: Character): Character {
  if (hero!.score >= villain!.score)
    return hero
  return villain
}