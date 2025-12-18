let score=39

switch(true){
    case (score>=90):
        console.log("The student grade is A+ : Outstanding")
        break
    
    case (score>=80):
        console.log("TThe student grade is A : Excellent")
        break

    case (score>=70):
        console.log("The student grade is B : Very Good")
        break

    case (score>=60):
        console.log("The student grade is C : Good")
        break

    case (score>=50):
        console.log("The student grade is D : Average")
        break

    case (score>=40):
        console.log("The student grade is E : Below Average")
        break
        
    default:
        console.log("The student grade is F : Fail")
        break        
}