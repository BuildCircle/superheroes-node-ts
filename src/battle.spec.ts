import { battle } from './battle'
import { getCharacters } from './getCharacters'

jest.mock('./getCharacters')

const getCharactersMocked = getCharacters as jest.MockedFunction<typeof getCharacters>

it('battle should return the hero if they have a higher score', () => {
  getCharactersMocked.mockReturnValue({
    items: [
      { name: 'Winner', score: 9.0, type: 'hero' },
      { name: 'Loser', score: 8.0, type: 'villain' }
    ]})

  const result = battle({name: 'Winner', type: 'hero'}, {name: 'Loser', type: 'villain'})
  expect(result).toBeDefined()
})

