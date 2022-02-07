import { getIfAreAnagrams } from './anagram';

test("the two strings are Anagramms", () => {
  expect(getIfAreAnagrams("evi", "ive")).true;
});

test("the two strings are not Anagramms", () => {
    expect(getIfAreAnagrams("evi", "ives")).false;
});

