Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return str.split("").map(a =>{
        return (a.charCodeAt(0) > 64 && a.charCodeAt(0) < 92) ? String.fromCharCode(a.charCodeAt(0)-65+97) : a;
    }).join("");
};