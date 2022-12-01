import { battle } from './main'
import * as getCharactersMethods from './getCharacters'

jest.spyOn(getCharactersMethods, 'getCharacters').mockResolvedValue({
  items: [
    { name: 'Winner', score: 9.0, type: 'hero' },
    { name: 'Loser', score: 8.0, type: 'villain' }
  ]})


it('battle should return the hero if they have a higher score', async () => {
  const result = await battle('Winner', 'Loser')
  expect(result).toEqual({name: "Winner", score: 9.0, type: 'hero'})
})

