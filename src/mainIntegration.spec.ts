import {battle} from "./main";
import {Character} from "./getCharacters";

it('battle should return the hero when API is called', async () => {
  const result = await battle("Batman", 'Joker');

  expect(result).toEqual({name: "Batman", score: 8.3, type: "hero", weakness: "Joker"});
})

it('battle should throw error when hero character not found', async () => {
  await expect(battle("Random", "Joker")).rejects.toThrow("Character Random not found. Try again with another name.");
})

it('battle should throw error when villain character not found', async () => {
  await expect(battle("Batman", "Random")).rejects.toThrow("Character Random not found. Try again with another name.");
})

it('battle should throw error when both characters character not found', async () => {
  await expect(battle("Random", "Random")).rejects.toThrow("Characters Random and Random not found. Try again with another names.");
})