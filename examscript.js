
const finalsSetUp = () => {
 
  let examDate = "Friday December 15th";
  let examTime = "10:30am - 12:30pm";
  let mode ="online via lockdown browser"


  $("#showDetailsBtn").click(function() {
    $("#examModalContent").html("<h2>Final Exam Details</h2><p>Date: " 
                                + examDate + "<br>Time: " + examTime +"<br>Mode:" +mode +"</p>" + 
                                "<p>The final exam is due on friday December 15 by 12:30pm dont be late!</p>");
    $("#examModal").fadeIn();
    $("#overlay").fadeIn();
  });

//This close the exam Details 
  $("#closeModalBtn, #overlay").click(function() {
    $("#examModal").fadeOut();
    $("#overlay").fadeOut();
  });
}
$(document).ready(finalsSetUp)