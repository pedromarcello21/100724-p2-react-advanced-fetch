import { v4 as uuid } from 'uuid'

export const sandwichArray = [
    {
        id: uuid(),
        name: 'Peanut Butter and Jelly',
        description: 'Peanut butter and jelly on bread of your choice.',
        rating: '3',
        isRealSandwich: true
    },
    {
        id: uuid(),
        name: 'Hotdog',
        description: 'A ground pork tube nestled in a hot dog bun.',
        rating: '4',
        isRealSandwich: false
    },
    {
        id: uuid(),
        name: 'Breakfast Sandwich',
        description: 'Meat, egg, and cheese on a biscuit.',
        rating: '1',
        isRealSandwich: true
    }
]