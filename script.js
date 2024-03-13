function checkScore() {
    var userScore = Number(score.value)
    if (userScore == ''){
        console.log('Invalid Answer');
        result.innerHTML = 'Enter your Score'
        var songInvalid = new Audio("")
        songInvalid.play()
    }
else if (userScore >= 0 && userScore < 40) {
    console.log('F-Fail');
    result.innerHTML = 'F-Fail'
    var songFail = new Audio("sound/WhatsApp Audio 2024-03-12 at 20.18.03_750a83fa.dat.unknown")
    songFail.play()
} else if (userScore <45 && userScore >=40){
    console.log('E-Pass');
    result.innerHTML = 'E-Pass'
    var songPass = new Audio("sound/your-a-failure-made-with-Voicemod.mp3")
    songPass.play()
} else if (userScore <50 && userScore >=45) {
    console.log('D-Average');
    result.innerHTML = 'D-Average'
    var songAverage = new Audio("sound/WhatsApp Audio 2024-03-12 at 20.17.13_162bb260.dat.unknown")
    songAverage.play()
} else if (userScore <60 && userScore >=50) {
    console.log('C-Credit');
    result.innerHTML = 'C-Credit'
    var songCredit = new Audio("sound/WhatsApp Audio 2024-03-12 at 20.17.49_f9d304f2.dat.unknown")
    songCredit.play()
} else if (userScore <70 && userScore >=60) {
    console.log('B-Good');
    result.innerHTML = 'B-Good'
    var songGood = new Audio("")
    songGood.play()
} else if (userScore >= 70 && userScore <=100){
    console.log('A-Excellent');
    result.innerHTML = 'A-Excellent'
    var songExcellent = new Audio ("sound/uefa-champions-league-anthem-made-with-Voicemod.mp3")
    songExcellent.play()
} else if (userScore>100){
    console.log('Invalid Answer');
    result.innerHTML = 'Invalid Answer'
    var songInvalid = new Audio("")
    songInvalid.play()
} else if (userScore<0){
    console.log('Invalid Answer');
    result.innerHTML = 'Invalid Answer'
    var songInvalid = new Audio("")
    songInvalid.play()
}
}
   