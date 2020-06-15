// this code was contributed by: me and...
//   Jessica Ribbecke
//     Phillip Golden
//       and Prince Adom

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


let mainElement = document.querySelector("main")
let kata1Heading  = document.createElement("h1")
let kata1Info = document.createElement("div")
let kata2Heading = document.createElement("h1")
let kata2Info = document.createElement("div")
let kata3Heading = document.createElement("h1")
let kata3Info = document.createElement("div")
let kata4Heading = document.createElement("h1")
let kata4Info = document.createElement("div")
let kata5Heading = document.createElement("h1")
let kata5Info = document.createElement("div")
let kata6Heading = document.createElement("h1")
let kata6Info = document.createElement("div")
let kata7Heading = document.createElement("h1")
let kata7Info = document.createElement("div")
let kata8Heading = document.createElement("h1")
let kata8Info = document.createElement('div')
let kata9Heading = document.createElement("h1")
let kata9Info = document.createElement("div")
let kata10Heading = document.createElement("h1")
let kata10Info = document.createElement("div")
let kata11Heading = document.createElement("h1")
let kata11Info = document.createElement("div")
let kata12Heading = document.createElement("h1")
let kata12Info = document.createElement("div")
let kata13Heading = document.createElement("h1")
let kata13Info = document.createElement("div")
let kata14Heading = document.createElement("h1")
let kata14Info = document.createElement("div")
let kata15Heading = document.createElement("h1")
let kata15Info = document.createElement("div")
let kata16Heading = document.createElement("h1")
let kata16Info = document.createElement("div")
let kata17Heading = document.createElement("h1")
let kata17Info = document.createElement("div")
let kata18Heading = document.createElement("h1")
let kata18Info = document.createElement("div")

// Display the numbers from 1 to 20. (1, 2, 3, …,19, 20)
mainElement.append(kata1Heading)
kata1Heading.append("Kata 1")
mainElement.append(kata1Info)
let counter = 1
while (counter < 21) {
 kata1Info.append(counter + ", ")
  counter += 1
}

// Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)
mainElement.append(kata2Heading)
kata2Heading.append("Kata 2")
mainElement.append(kata2Info)
counter = 2
while (counter < 21) {
    kata2Info.append(counter + ", ")
  counter += 2
}

// Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)
mainElement.append(kata3Heading)
kata3Heading.append("Kata 3")
mainElement.append(kata3Info)
let counter3 = 1
while (counter3 <= 20) {
  kata3Info.append(counter3 + ", ")
  counter3 += 2
}

// Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
mainElement.append(kata4Heading)
kata4Heading.append("Kata 4")
mainElement.append(kata4Info)
let counter4 = 5
while (counter4 <= 100) {
  kata4Info.append(counter4 + ", ")
  counter4 += 5
}




// Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
mainElement.append(kata5Heading)
kata5Heading.append("Kata 5")
mainElement.append(kata5Info)

for (counter5 = 1; counter5 <= 10; counter5 += 1) {
    kata5Info.append(counter5 * counter5 + ", ")
}
// let counter5 = 1
// while (counter5 <=100){
//   const isSquare = Number.isInteger(Math.sqrt(counter5));
//   if (isSquare){
//   kata5Info.append(counter5 + ", ")
//   }
//   counter5 += 1

// }

// Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
mainElement.append(kata6Heading)
kata6Heading.append("Kata 6")
mainElement.append(kata6Info)
let counter6 = 20
while (counter6 >= 1) {
  kata6Info.append(counter6 + ", ")
  counter6 -= 1
}

// Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
mainElement.append(kata7Heading)
kata7Heading.append("Kata 7")
mainElement.append(kata7Info)
let counter7 = 20
while (counter7 >= 1) {
  kata7Info.append(counter7 + ", ")
  counter7 -= 2
}

// Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
mainElement.append(kata8Heading)
kata8Heading.append("Kata 8")
mainElement.append(kata8Info)
let counter8 = 20
while (counter8 >= 1) {
  kata8Info.append(counter8 + ", ")
  counter8 -= 1
}

// 9// Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
mainElement.append(kata9Heading)
kata9Heading.append("Kata 9")
mainElement.append(kata9Info)
let counter9 = 100
while (counter9 >= 4) {
    const multi5 = (counter9);
    mainElement.append(multi5 + ", ")
    counter9 -= 5; 
}

//10: Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
mainElement.append(kata10Heading)
kata10Heading.append("Kata 10")
mainElement.append(kata10Info)
let counter10 = 10
while (counter10 >= 1) {
    const isSquare = counter10 * counter10;
    counter10 -= 1; 
    mainElement.append(isSquare + ", ")
}

// //11 Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
mainElement.append(kata11Heading)
kata11Heading.append("Kata 11")
mainElement.append(kata11Info)
for (counter11 = 0; counter11 < sampleArray.length; counter11 ++){
  mainElement.append(sampleArray[counter11] + ", ")
}



// 12// Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
mainElement.append(kata12Heading)
kata12Heading.append("Kata 12")
mainElement.append(kata12Info)
// function getEvenNumbers(){
//     for(counter12 = 0; counter12 < sampleArray.length; counter12 += 1){
//       if (sampleArray[counter12] % 2 === 0){
//       }
//     }
// }
for (counter12 = 0; counter12 < sampleArray.length; counter12 +=1){
    if (sampleArray[counter12] % 2===0){
    mainElement.append(sampleArray[counter12] + ", ")
    }
  }




// /13/ Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
mainElement.append(kata13Heading)
kata13Heading.append("Kata 13")
mainElement.append(kata13Info)
// var evens = [];
// var odds = [];

// for (var i = 0; i < sampleArray.length; i++) {

//     if ((sampleArray[i] % 2) != 1) {
//         evens.push(sampleArray[i]);
//         console.log(evens);
//     }
//     else {
//         odds.push(sampleArray[i]);
//     }
//     mainElement.append(odds);

// }
for (counter13 = 0; counter13 < sampleArray.length; counter13 +=1){
    if (sampleArray[counter13] % 2===1){
    mainElement.append(sampleArray[counter13] + ", ")
    }
  }



// /14/ Display the square of each element in sampleArray. (219961, 570025, …, 222784)
mainElement.append(kata14Heading)
kata14Heading.append("Kata 14")
mainElement.append(kata14Info)
for (counter14 = 0; counter14 < sampleArray.length; counter14 += 1) {
    kata14Info.append(sampleArray[counter14] * sampleArray[counter14] + ", ")
}


// /15/ Display the sum of all the numbers from 1 to 20.
mainElement.append(kata15Heading)
kata15Heading.append("Kata 15")
mainElement.append(kata15Info)
// forKata15 = 0
// let  ForKata15 = 20
// for (counter15 = 1; counter15 <= ForKata15; counter15 += 1) {
// 
//     forKata15 += counter15
// 
//     if  (Counter15 == forKata15 ){
//         Kata15Info.append(counter15 + "= " + forKata15)
//     } 
// else  {
//         kata15Info.append(counter15 + "+ ")
//    }
//  }
forKata15 = 0
let xForKata15 = 20
for (counter15 = 1; counter15 <= xForKata15; counter15 += 1) {
    forKata15 += counter15
    if (counter15 === xForKata15) {
        kata15Info.append( forKata15)
    }
}
//210


// /16/ Display the sum of all the elements in sampleArray.
mainElement.append(kata16Heading)
kata16Heading.append("Kata 16")
mainElement.append(kata16Info)
// let counter16 = sampleArray
// let total = 0
// for(let i in arr) { total += arr[i]; }

// counter16 = sampleArray[0]
// counter16
let kata16Last = sampleArray.length - 1
let kata16Add = 0
for (counter16 = 0; counter16 < sampleArray.length; counter16 += 1) {
    kata16Add += sampleArray[counter16]
    if (kata16Last === counter16) {
        kata16Info.append(sampleArray[counter16] + " = " + kata16Add)
    } else {
        kata16Info.append(sampleArray[counter16] + " + ")
    }
}

// /17/ Display the smallest element in sampleArray.
mainElement.append(kata17Heading)
kata17Heading.append("Kata 17")
mainElement.append(kata17Info)
smallestElement = 0
for (counter17 = 0; counter17 < sampleArray.length; counter17 += 1) {
    if (smallestElement === 0) {
        smallestElement = sampleArray[counter17]
    } if (sampleArray[counter17] < smallestElement ){
        smallestElement = sampleArray[counter17]

    }

}
kata17Info.append(smallestElement)



// /18/ Display the largest element in sampleArray.
mainElement.append(kata18Heading)
kata18Heading.append("Kata 18")
mainElement.append(kata18Info)
largestElement = 0
for (counter18 = 0; counter18 < sampleArray.length; counter18 += 1) {

    if (largestElement === 0 ){
        largestElement = sampleArray[counter18]
    } if(sampleArray[counter18] > largestElement) {
     largestElement = sampleArray[counter18]


    }
}

kata18Info.append(largestElement)

