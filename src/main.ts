import {getCharacters, Character} from './getCharacters'

export async function battle(heroName: string, villainName: string): Promise<Character> {
  const characters = await getCharacters()

  const hero = characters.items.find(e => e.name === heroName)
  const villain = characters.items.find(e => e.name === villainName)
  if(!hero || ! villain) {
    throw new Error("Character not found. Try again with another name.")
  }
  return gets_winner(hero!, villain!);;
}

function gets_winner(hero: Character, villain: Character): Character {
  return hero!.score >= villain!.score ? hero! : villain!
}