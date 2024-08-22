/***
Accepts any string and checks for the longest sub string 
that contains no two adjacent characters as neighboring lowercase english alphabets.
*/
const check_str = (str) => {
    let longest_substr = '';
    let temp_substr = '';

    if (is_lower_case_english_alphbet(str[0])) {
        temp_substr += str[0];
        longest_substr += str[0];
    }


    for (let i = 1; i < str.length; i++) {
        let diff = Math.abs(str[i].charCodeAt(0) - str[i - 1].charCodeAt(0));

        if (!is_lower_case_english_alphbet(str[i])) {
            // current string is not a valid english alphabet - the substring or word completed
            if (temp_substr.length >= longest_substr.length) {
                // 'temp_substr' is the most recent longest sub string or word
                longest_substr = temp_substr;
            }
            temp_substr = '';

        } else if (diff > 1) {
            // The current and previous chars are not neighboring and same english alphabets
            temp_substr += str[i];
            if (temp_substr.length >= longest_substr.length) {
                longest_substr = temp_substr;
            }
        } else {
            // The current and previous chars are same OR neighboring english alphabets => Go to next char
            if (temp_substr.length >= longest_substr.length) {
                longest_substr = temp_substr;
            }

            temp_substr = '';
        }

    }

    return longest_substr;
}

const is_lower_case_english_alphbet = (char) => {
    return char.charCodeAt(0) >= 'a'.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0);
}

// const str = 'A quick brown fox is jumping over a while lazy dog';
// const str = ' a aabdmlxb highness goes sick due to fever '
const str = '   ags ce   xdrvjkl aiepuzbdfkhipadfkzwm-airbkca  ';
const response = check_str(str);
console.log('Longest sub string:  ', response);