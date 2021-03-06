module.exports = {
    age(timestamp){
        const today = new Date()
        
        const birthDay = new Date(timestamp)

        let age = today.getFullYear() - birthDay.getFullYear()
        const month = today.getMonth() - birthDay.getMonth()

        if(month < 0 || month == 0 && today.getDate() < birthDay.getDate()){
            return age = age - 1
        }
        
        return age
    },
    graduation(level){
       
       const graduations = {
         
        medio:"Ensíno Médio Completo",
        superior:"Ensino Superior Completo",
        mestrado:"Mestrado",
        doutorado:"Doutorado"

       }
        
       for(graduation in graduations){
        if(level == graduation){
               return graduations[this.graduation]
           }

       }
    },
    date(timestamp){

        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            year,
            month,
            day,
            iso:`${year}-${month}-${day}`,
            birthDay:`${day}/${month}`,
            format:`${day}/${month}/${year}`
        }
    },
}