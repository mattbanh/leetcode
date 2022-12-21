// LESSON 13 Roman to Integer:
// - When looping, find a way to use as simple logic as possible (ie. nested conditionals === BAD)
// - Keep the library as simple as possible (ie. nested objects === BAD)
// - When approaching a problem, break down the logic and explore from multiple angles

// LESSON 12 Integer to Roman:
// - For complicated conversions, it is better to have a complicated "database" or table rather than complicated if/else logic

import { useState } from "react";

export default function RomanInteger() {
  const [romanValue, setRomanValue] = useState("");
  const [intValue, setIntValue] = useState("");
  const [romanError, setRomanError] = useState(false);
  const [intError, setIntError] = useState(false);

  const romanToInt = (s) => {
    const romLib = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let romInt = 0;

    for (let i = 0; i < s.length; i++) {
      romLib[s[i]] < romLib[s[i + 1]]
        ? (romInt -= romLib[s[i]])
        : (romInt += romLib[s[i]]);
    }
    return romInt;
  };
  const handleRomanChange = (e) => {
    const input = e.target.value;
    setRomanValue(input);
  };
  const romanHandler = (e) => {
    e.preventDefault();
    const romInt = romanToInt(e.target.roman.value);
    setIntValue(romInt);
  };

  const intToRoman = (num) => {
    const M = ["", "M", "MM", "MMM"];
    const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    const roman =
      M[(num / 1000) | 0] +
      C[((num % 1000) / 100) | 0] +
      X[((num % 100) / 10) | 0] +
      I[num % 10 | 0];
    return roman;
  };

  const handleIntChange = (e) => {
    const input = e.target.value;
    setIntValue(input);
  };
  const intHandler = (e) => {
    e.preventDefault();
    const intRom = intToRoman(e.target.integer.value);
    setRomanValue(intRom);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Roman To Integer</h2>
      <div className="flex gap-10">
        <form
          className="flex flex-col justify-center"
          id="roman"
          onSubmit={romanHandler}
        >
          <label>
            Roman Numeral:
            <input
              name="roman"
              value={romanValue}
              onChange={handleRomanChange}
            ></input>
          </label>
        </form>
        <div className="flex flex-col gap-5">
          <button
            className="font-bold bg-slate-400 hover:bg-slate-600 py-2 px-3  rounded-md ease-in-out duration-300"
            form="roman"
            type="submit"
          >
            Convert to Integer
          </button>
          <button
            className="font-bold bg-slate-400 hover:bg-slate-600 py-2 px-3  rounded-md ease-in-out duration-300"
            form="integer"
            type="submit"
          >
            Convert to Roman Numeral
          </button>
        </div>
        <form
          className="flex flex-col justify-center"
          id="integer"
          onSubmit={intHandler}
        >
          <label>
            Integer:
            <input
              name="integer"
              value={intValue}
              onChange={handleIntChange}
            ></input>
          </label>
        </form>
      </div>
    </div>
  );
}

// Original Solution 13 [SUPER SLOW]
// - in this case I believed that ones were different from fives but in fact the logic behind roman numerals is simpler than that
//  //   /**
//   //    * @param {string}
//   //    * @return {number}
//   //    */
//   var romanToInt = function (s) {
//     let count = 0;
//     let romanInt = 0;
//     // Library created to exercise DRY
//     const romanLibrary = {
//       ones: {
//         I: { value: 1, five: "V", ten: "X" },
//         X: { value: 10, five: "L", ten: "C" },
//         C: { value: 100, five: "D", ten: "M" },
//         M: { value: 1000, five: null, ten: null },
//       },
//       fives: { V: "I", L: "X", D: "C" },
//     };

//     for (let i = 0; i < s.length; i++) {
//       // Check if numeral should be skipped
//       if (count > i) {
//         console.log("skip");
//       }
//       //   Check if numeral belongs to ones
//       else if (romanLibrary.ones.hasOwnProperty(s[i])) {
//         if (s[i + 1] === s[i]) {
//           if (s[i + 2] === s[i]) {
//             romanInt += 3 * romanLibrary.ones[s[i]].value;
//             count += 3;
//           } else {
//             romanInt += 2 * romanLibrary.ones[s[i]].value;
//             count += 2;
//           }
//         } else if (s[i + 1] === romanLibrary.ones[s[i]].five) {
//           romanInt += 4 * romanLibrary.ones[s[i]].value;
//           count += 2;
//         } else if (s[i + 1] === romanLibrary.ones[s[i]].ten) {
//           romanInt += 9 * romanLibrary.ones[s[i]].value;
//           count += 2;
//         } else {
//           romanInt += romanLibrary.ones[s[i]].value;
//           count += 1;
//         }
//       }
//       //   Check if numeral belongs to fives
//       else if (romanLibrary.fives.hasOwnProperty(s[i])) {
//         if (s[i + 1] === romanLibrary.fives[s[i]]) {
//           if (s[i + 2] === romanLibrary.fives[s[i]]) {
//             if (s[i + 3] === romanLibrary.fives[s[i]]) {
//               romanInt += 8 * romanLibrary.ones[romanLibrary.fives[s[i]]].value;
//               count += 4;
//             } else {
//               romanInt += 7 * romanLibrary.ones[romanLibrary.fives[s[i]]].value;
//               count += 3;
//             }
//           } else {
//             romanInt += 6 * romanLibrary.ones[romanLibrary.fives[s[i]]].value;
//             count += 2;
//           }
//         } else {
//           romanInt += 5 * romanLibrary.ones[romanLibrary.fives[s[i]]].value;
//           count += 1;
//         }
//       }
//     }
//     return romanInt;
//   };

// Original Solution 12 (SLOW)
// const intToRoman = (num) => {
//   const romLib = {
//     1: ["I", "V", "X"],
//     10: ["X", "L", "C"],
//     100: ["C", "D", "M"],
//     1000: ["M"],
//   };

//   let romNum = num;

//   const romArr = [];
//   let romLibVal = 1;

//   while (romNum > 0) {
//     let digit = romNum % 10;

//     if (digit / 5 >= 1) {
//       digit = digit % 5;
//       if (digit === 4) {
//         romArr.unshift(romLib[romLibVal][0], romLib[romLibVal][2]);
//       } else {
//         romArr.unshift(
//           romLib[romLibVal][1],
//           romLib[romLibVal][0].repeat(digit)
//         );
//       }
//     } else {
//       if (digit === 4) {
//         romArr.unshift(romLib[romLibVal][0], romLib[romLibVal][1]);
//       } else {
//         romArr.unshift(romLib[romLibVal][0].repeat(digit));
//       }
//     }
//     romNum = Math.floor(romNum / 10);
//     romLibVal = romLibVal * 10;
//   }
//   const roman = romArr.join("");
//   return roman;
// };
