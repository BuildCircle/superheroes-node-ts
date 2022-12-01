import {getCharacters, Character} from './getCharacters'

export async function battle(heroName: string, villainName: string): Promise<Character> {
  const characters = await getCharacters()

  const hero = characters.items.find(e => e.name === heroName)
  const villain = characters.items.find(e => e.name === villainName)
  const winner = gets_winner(hero!, villain!);
  return winner;
}

function gets_winner(hero: Character, villain: Character): Character {
  return hero!.score >= villain!.score ? hero! : villain!
}