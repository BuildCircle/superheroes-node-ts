import {battle} from "./main";

it('battle should return the hero when API is called', async () => {
  const result = await battle("Batman", 'Joker');

  expect(result).toEqual({name: "Batman", score: 8.3, type: "hero", weakness: "Joker"});
})

it('battle should throw error when character not found', async () => {
  await expect(battle("Random", "Joker")).rejects.toThrow("Character not found. Try again with another name.");
})