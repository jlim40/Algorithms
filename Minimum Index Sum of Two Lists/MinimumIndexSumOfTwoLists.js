/*
Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

Example 1:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".
Example 2:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
Note:
The length of both lists will be in the range of [1, 1000].
The length of strings in both lists will be in the range of [1, 30].
The index is starting from 0 to the list length minus 1.
No duplicates in both lists.
*/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const obj = {};
    let idxFromList2;
    let min = Number.MAX_VALUE;
    for(let i = 0; i < list1.length; ++i) {
        idxFromList2 = list2.indexOf(list1[i]);
        if(idxFromList2 !== -1){
            if(i + idxFromList2 <= min) {
                min = i+idxFromList2;
                obj[list1[i]] = min; 
            }
        }
    }
    let res = [];
    for(let elem in obj){
        if(obj[elem] === min) {
            res.push(elem);
        }
    }
    return res;
};