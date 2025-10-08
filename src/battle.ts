import {Character, getCharacters} from "./getCharacters";

type CharacterQuery = {
  name: string
  type: string
}

export function battle(hero: CharacterQuery, villain: CharacterQuery): Character {
  const heroCharacter = findCharacter(hero.name, hero.type)
  const villainCharacter = findCharacter(villain.name, villain.type)

  return heroCharacter!.score >= villainCharacter!.score ? heroCharacter! : villainCharacter!
}

function findCharacter(name: string, type: string) {
  const characters = getCharacters()

  let character
  for (let i = 0; i < characters.items.length; i++) {
    if (characters.items[i].name === name && characters.items[i].type === type) {
      character = characters.items[i]
    }
  }
  return character
}
