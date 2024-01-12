function Grade(text_name,score) {
    var str_grade = "";
    if(text_name != ''){
        if(score != ''){
            if(score >= 0 && score <= 100){
                if(score > 90){
                    str_grade = 'Exelence'
                }else if(score > 80){
                    str_grade = 'Very Good'
                }else if(score > 60){
                    str_grade = 'Fair'
                }else if(score >= 50){
                    str_grade = 'medium'
                }else{
                    str_grade = 'Fail'
                }
                document.getElementById("str_grade").innerHTML = text_name +"'s grade is <b>"+ str_grade + '</b>'
            }else{
                alert("Score must be between 0 -> 100")
            }
        }else{
            alert("Please enter a score")
        }
    }else{
        alert("Please enter a name")
    }
}