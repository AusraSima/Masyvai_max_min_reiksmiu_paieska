"use strict"

// Dailusis čiuožimas. Dailiojo čiuožimo teisėjų brigadą sudaro 
// n (5 <= n <= 12) šios sporto šakos žinovų. Vertindami sportininko 
// pasirodymą, jie skiria balus už atlikimo techniką ir artistiškumą. 
// Vertinimo skalė yra šešių balų, naudojant ir skaičiaus dešimtąsias dalis. 
// Vienas pats aukščiausias ir vienas pats žemiausias įverčiai atmetami. 
// Jei keli teisėjai davė didžiausią ar mažiausią įvertinimą, atmetami pirmo 
// sąraše teisėjo balai. Sukurkite programą sportininko balų vidurkiui 
// apskaičiuoti. Pradinių duomenų faile Duomenys.txt yra surašoma:
// Pirmoje eilutėje nurodoma, kiek teisėjų n (5 ≤ n ≤12) vertina sportininką.
// Tolimesnėse n eilučių yra surašoma po du realiuosius skaičius, nurodančius 
// teisėjo skirtus balus už techniką ir artistiškumą. Rezultatų faile reikia 
// pateikti skirtingose eilutėse įverčių už techniką ir artistiškumą vidurkius 
// (vidurkius pateikti vieno skaičiaus po kablelio tikslumu)

function findAverage(arr){
    let sum = 0;
    for(let i = 0; i <arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

const n = 7;
const points1 = [5.6, 5.2, 5.5, 5.2, 5.4, 5.3, 5.7];
const points2 = [5.8, 5.7, 5.8, 5.4, 5.5, 5.8, 5.6];

let min1 = Math.min(points1);
let min2 = Math.min(points2);
const indexMin1 = points1.indexOf(min1);
const indexMin2 = points2.indexOf(min2);
points1.splice(indexMin1, 1);
points2.splice(indexMin2, 1);


let max1 = Math.max(points1);
let max2 = Math.max(points2);
const indexMax1 = points1.indexOf(max1);
const indexMax2 = points2.indexOf(max2);
points1.splice(indexMax1, 1);
points2.splice(indexMax2, 1);

let avgPoints1 = findAverage(points1);
let avgPoints2 = findAverage(points2);

document.getElementById("content").innerHTML = `${avgPoints1.toFixed(1)}<br>${avgPoints2.toFixed(1)}`;


