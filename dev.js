//node dev.js
//----------------------------------    1    -------------------------------------//
const exam1 = [6, -1, -5, 200, 7, 9, -13, 20];
const answer1 = findMostValue(exam1);
console.log("answer1 : ", answer1);

//----------------------------------    2    -------------------------------------//
const exam2 = 100;
const answer2 = fizzBuzz(exam2);
console.log("answer2 : ", answer2);

//----------------------------------    3    -------------------------------------//
//check Palindrome
const exam3_1 = "asd";
const exam3_2 = "asa";
const exam3_3 = 1112;
const exam3_4 = 12321;
const answer3_1 = isPalindrome(exam3_1);
const answer3_2 = isPalindrome(exam3_2);
const answer3_3 = isPalindrome(exam3_3);
const answer3_4 = isPalindrome(exam3_4);
console.log("answer3_1 : ", answer3_1);
console.log("answer3_2 : ", answer3_2);
console.log("answer3_3 : ", answer3_3);
console.log("answer3_4 : ", answer3_4);

//find Palindrome
const exam3_5_start = 1;
const exam3_5_results = 100;
const answer3_5 = findPalindrome(exam3_5_start, exam3_5_results);
console.log("answer3_5 : ", answer3_5);

//----------------------------------    4    -------------------------------------//
const exam4_1 = ["alice", "bob", "trudy", "jack"];
const exam4_2 = ["janet", "alice", "james", "jack"];
const answer4 = findSameWord(exam4_1, exam4_2);
console.log("answer4 : ", answer4);

//----------------------------------    5    -------------------------------------//
const n = 12;
const answer5 = fibonacci(n);
console.log("answer5 : ", answer5);

//----------------------------------    6    -------------------------------------//
const number = [1, 5, 13, 2, 7, 6];
const answer6 = findEqualTarget(number, 15);
console.log("answer6 : ", answer6);

//----------------------------------    7    -------------------------------------//
const sentence =
  "This sentence has five words. Here are five more words. Five-word sentences are fine. But several together become monotonous.";
const answer7 = findMostWord(sentence);
console.log("answer7 : ", answer7);

//--------------------------------------------------------------------------------//

////////////////////////////////////////////////////////////////////////////////////
//                                    FUNCTION                                    //
////////////////////////////////////////////////////////////////////////////////////

//----------------------------------    1    -------------------------------------//

function findMostValue(data) {
  const maxValue = Math.max(...data);
  return maxValue;
}

//----------------------------------    2    -------------------------------------//

function fizzBuzz(data) {
  let answer = [];
  for (let i = 1; i <= data; i++) {
    // console.log(i)
    if (i % (3 * 5) == 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 == 0) {
      answer.push("Fizz");
    } else if (i % 5 == 0) {
      answer.push("Buzz");
    } else {
      answer.push(i);
    }
  }
  return answer;
}

//----------------------------------    3    -------------------------------------//

function isPalindrome(word) {
  word = word.toString();
  let isPalindrome = true;
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  return word + " are " + (isPalindrome ? "Palindrome" : "not Palindrome");
}

function isPalindromeVer2(num) {
  num = num.toString();
  const length = num.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (num[i] !== num[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function findPalindrome(start, number) {
  let answer = [];

  while (answer.length < number) {
    if (isPalindromeVer2(start)) {
      answer.push(start.toString());
    }
    start++;
  }

  return answer;
}

//----------------------------------    4    -------------------------------------//

function findSameWord(arr1, arr2) {
  const sameWord = [];
  for (let i = 0; i < arr1.length; i++) {
    if (in_array(arr1[i], arr2)) {
      sameWord.push(arr1[i]);
    }
  }
  return sameWord;
}

function in_array(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

//----------------------------------    5    -------------------------------------//

function fibonacci(n) {
  let fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo[n];
}

//----------------------------------    6    -------------------------------------//

function findEqualTarget(number, target) {
  let answer = [];
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      if (number[i] + number[j] === target) {
        answer.push({ first: number[i], second: number[j] });
      }
    }
  }

  return answer;
}

//----------------------------------    7    -------------------------------------//

function findMostWord(sentence) {
  let lower = sentence.toLowerCase();
  let clear = lower.replace(/[^a-z]/g, " ");
  let words = clear.split(" ");
  let wordMap = [];
  let mostWords = [];
  let maxCount = 0;

  words.forEach((word) => {
    if (word !== "") {
      if (!wordMap[word]) {
        wordMap[word] = 1;
      } else {
        wordMap[word]++;
      }
    }
  });

  for (let word in wordMap) {
    if (wordMap[word] > maxCount) {
      maxCount = wordMap[word];
    }
  }

  for (let word in wordMap) {
    if (wordMap[word] === maxCount) {
      // mostWords.push(word + " " + wordMap[word] + " times");
      mostWords.push(word);
    }
  }

  return mostWords;
}
//--------------------------------------------------------------------------------//
