165. Compare Version Numbers
Compare two version numbers version1 and version2.
If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

Here is an example of version numbers ordering:

0.1 < 1.1 < 1.2 < 13.37

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var v1 = version1.split('.');
    var v2 = version2.split('.');
    var l = v1.length > v2.length ? v1.length : v2.length;
    for(var i = 0 ; i < l; i++){
        var vv1 = parseInt(v1[i])||0;
        var vv2 = parseInt(v2[i])||0;
        if(vv1 > vv2){
            return 1 ;
        }else if(vv1 < vv2){
            return -1;
        }
    }
    return 0;
};