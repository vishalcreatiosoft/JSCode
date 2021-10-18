// let restaurent = {
//     name : "Haldiram",
//     guestCapacity : 100,
//     guestCount : 95,
//     checkAvailibility : function(partySize){
        
//        // console.log(this.guestCapacity)
//        let seatsLeft = this.guestCapacity - this.guestCount
//        return partySize <= seatsLeft
//     }
// }

// let result = restaurent.checkAvailibility(3)
// console.log(result)


let restaurent = {
    name : "Haldiram",
    guestCapacity : 75,
    guestCount : 0,
    seatParty : function(partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeParty : function(partySize){
        this.guestCount = this.guestCount - partySize
    },
    checkAvailibility : function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft      

    }
}


restaurent.seatParty(72)
console.log(restaurent.checkAvailibility(4))
restaurent.removeParty(5)
console.log(restaurent.checkAvailibility(4))













