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

export const attack = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid character")
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
}

export const attackInvDep = (
    attacker: Character,
    defender: Character,
    validator: (c: Character) => boolean) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character")
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
}
