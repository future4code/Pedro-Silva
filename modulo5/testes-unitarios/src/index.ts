export interface Character {
    name: string
    life: number
    strength: number
    defense: number
}

export const validateCharacter = (c: Character): boolean => {
    if (!c.name || !c.life || !c.strength || !c.defense) {
        return false
    }

    if (c.life <= 0 || c.strength <= 0 || c.defense <= 0) {
        return false;
    }

    return true
}
