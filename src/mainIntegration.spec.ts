import {battle} from "./main";

it('battle should return the hero when API is called', async () => {
  const result = await battle("Batman", 'Joker');

  expect(result).toEqual({name: "Batman", score: 8.3, type: "hero", weakness: "Joker"});
})

it('battle should throw error when character not found', async () => {
  const result = await battle("Random", 'Joker');

  expect(result).toEqual({name: "Batman", score: 8.3, type: "hero", weakness: "Joker"});
})