
import { countLetters } from "./countLetters";


test('countLetters method with wow string return string as keys, and numbers as values ', () => {
    expect(countLetters('wow')).toEqual({
        "w": 2,
        "o": 1
    });
});