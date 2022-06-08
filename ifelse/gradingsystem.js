// function getGrade(number){
//     if(number >= 80 && number <= 100){
//         console.log('Your graqde is A');
//     }
//     else if(number >= 70 && number <= 79){
//         console.log('Your grade is B')
//     }
//     else if(number >= 60 && number <= 69){
//         console.log('Your grade is C');
//     }
//     else if(number < 60 && number >= 0){
//         console.log('You are fail in this course');
//     }
//     else{
//         console.log('This number is invalid');
//     }
// }


// getGrade(60);




var mark;
var grade;
grade = "Not Yet Graded";

mark = prompt( "Please input the mark(%)" );
mark = parseInt( mark, 10 ); // see comment



if( mark > 70 )
{
grade = "First Class";
}
else if( mark > 60 )
{
grade = "Upper Second";
}
else if( mark > 50 )
{
grade = "Lower Second";
}
else if( mark > 40 )
{
grade = "Third Class";
}

else if( mark < 40 )
{
grade = "Fail";
}


alert( "Mark: " + mark + "% - Grade: " + grade );