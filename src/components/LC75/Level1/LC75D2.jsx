import { useState } from "react";

// LESSON 205 - isomorphic strings
const isIsomorphic = (s, t) => {
  let sArr = s.split("");
  let tArr = t.split("");
  let sObj = {};
  let tObj = {};
  for (let i = 0; i < sArr.length; i++) {
    sObj[sArr[i]] = tArr[i];
  }
  for (let i = 0; i < tArr.length; i++) {
    tObj[tArr[i]] = sArr[i];
  }
  const sMap = sArr.map((x) => sObj[x]);
  const tMap = tArr.map((x) => tObj[x]);

  return sMap.join("") === t && tMap.join("") === s;
};

// LESSON 392 - subsequence
// I have to be careful about indices! The first submission, I neglected to add 1 to the slice index so it would nice slice properly
const isSubsequence = (s, t) => {
  let tSubstr = t;

  for (let i = 0; i < s.length; i++) {
    let tInd = tSubstr.indexOf(s[i]);

    if (tInd > -1) {
      tSubstr = tSubstr.slice(tInd + 1);
    } else {
      return false;
    }
  }
  return true;
};

export default function LC75D2() {
  const [isomorphic, setIsomorphic] = useState("");
  const [subsequence, setSubsequence] = useState("");

  const isomorphicSubmit = (e) => {
    e.preventDefault();
    const isomorphicResponse = isIsomorphic(
      e.target.word1.value,
      e.target.word2.value
    );
    setIsomorphic(isomorphicResponse);
  };
  const subsequenceSubmit = (e) => {
    e.preventDefault();
    const subsequenceResponse = isSubsequence(
      e.target.word1.value,
      e.target.word2.value
    );
    setSubsequence(subsequenceResponse);
  };

  return (
    <>
      <div className="mb-16">
        <h2 className="text-lg underline mb-3">Day 2</h2>
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">205. Isomorphic Strings</h3>
          <p>
            "Given two strings s and t, determine if they are isomorphic. Two
            strings s and t are isomorphic if the characters in s can be
            replaced to get t. All occurrences of a character must be replaced
            with another character while preserving the order of characters. No
            two characters may map to the same character, but a character may
            map to itself."
          </p>
        </div>
        <form onSubmit={isomorphicSubmit}>
          <label className="mr-6">
            Word 1 (s)
            <input
              className="ml-3 px-1 border-2 border-black rounded-md bg-slate-200"
              name="word1"
              type="text"
              defaultValue="foo"
            ></input>
          </label>
          <label className="mr-6">
            Word 2 (t)
            <input
              className="ml-3 px-1 border-2 border-black rounded-md bg-slate-200"
              name="word2"
              type="text"
              defaultValue="bar"
            ></input>
          </label>
          <button
            className="bg-slate-300 px-4 py-2 font-bold text-slate-600 rounded-md mr-4"
            type="submit"
          >
            Are they isomorphic?
          </button>
          {isomorphic === true ? (
            <span>Yes</span>
          ) : (
            isomorphic === false && <span>No</span>
          )}
        </form>
      </div>
      <div>
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3">392. Is Subsequence</h3>
          <p>
            "Given two strings s and t, return true if s is a subsequence of t,
            or false otherwise. A subsequence of a string is a new string that
            is formed from the original string by deleting some (can be none) of
            the characters without disturbing the relative positions of the
            remaining characters. (i.e., "ace" is a subsequence of "abcde" while
            "aec" is not)."
          </p>
        </div>
        <form onSubmit={subsequenceSubmit}>
          <label className="mr-6">
            Subsequence (s)
            <input
              className="ml-3 border-2 border-black rounded-md bg-slate-200"
              name="word1"
              type="text"
            ></input>
          </label>
          <label className="mr-6">
            String (t)
            <input
              className="ml-3 border-2 border-black rounded-md bg-slate-200"
              name="word2"
              type="text"
            ></input>
          </label>
          <button
            className="bg-slate-300 px-4 py-2 font-bold text-slate-600 rounded-md mr-4"
            type="submit"
          >
            Is it a subsequence?
          </button>
          {subsequence === true ? (
            <span>Yes</span>
          ) : (
            subsequence === false && <span>No</span>
          )}
        </form>
      </div>
    </>
  );
}
