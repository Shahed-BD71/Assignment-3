//Problem 1: kilometerToMeter.

function kilometerToMeter(kilometer){
    var meter = 1000 * kilometer;
    return meter;
}
// var result = kilometerToMeter(5);
// console.log(result);


// Problem 2 : budgetCalculator

   function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity){    
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    totalPrice = watchPrice*watchQuantity+ phonePrice*phoneQuantity+ laptopPrice*laptopQuantity;
    return totalPrice;
   }

//    var result = budgetCalculator(1, 1, 2)
//    console.log(result);


// Problem 3 : hotelCost

function hotelCost(day) {
    var totalCost = 0;
    if (day <= 10) {
        totalCost = day * 100;
    }else if (day <= 20) {
        var firstCost = 100 * 10;
        remaining = day - 10;
        secondCost = remaining * 80;
        totalCost = firstCost + secondCost;

    } else {
        firstCost = 100 * 10;
        secondCost = 80 * 10;
        remaining = day - 20;
        thirdCost = remaining * 50;
        totalCost = firstCost + secondCost + thirdCost;
    }
    return totalCost
}

//  var result = hotelCost(30);
//  console.log(result);

// Problem 4: megaFriend.

function megaFriend(friends) {
    if (friends.length == 0) {
        return "Enter a valid list"
    }
    var mega = friends[0];
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > mega.length) {
            mega = friends[i];
        }

    }
    return mega;
}
// var friends = ['Bill gates', 'Alon musk', 'mark zukarberg'];
// console.log(megaFriend(friends));