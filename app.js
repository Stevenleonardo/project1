$(document).ready(function () {
    //data base where information is stored
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+x+"&key=AIzaSyBb9SLVx_0mHhYCPqnaZJjEX1Ii-iHEuuE";
    var apiKey2 = "d2b6366945a9a0c064fc4b1be7fadb4a932e099f"
    var x = ""
    

    //function that runs the first call
    function youVideo(x){
    
     $.ajax({
        url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+x+"&key=AIzaSyBb9SLVx_0mHhYCPqnaZJjEX1Ii-iHEuuE",
        method: "GET"
     }).then(function (response) {
        console.log(response)
        console.log("https://www.youtube.com/watch?v="+response.items[0].id.videoId)
        var a = $("<a>").attr("href", "https://www.youtube.com/watch?v="+response.items[0].id.videoId)

        //Redirects the user to a new page
        window.open("https://www.youtube.com/watch?v="+response.items[0].id.videoId, "_blank")
 
     });
    }
    //second api key and URL
    var key2 = "d2b6366945a9a0c064fc4b1be7fadb4a932e099f";
    var queryURL3 = "https://wger.de/api/v2/exerciseinfo/?page=3";
    //Call for the second Api
    $.ajax({
        url: queryURL3,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        //Setting specific info into a local variable
        var number8 = response.results[8].description;
        var number10 = response.results[10].description;
        var number2 = response.results[2].description;
        var number15 = response.results[15].description;
        var p8 = number8;
        //creating a p tag
        var p10 = $("<p>").text(number10);
        var p2 = number2;
        var p15 = number15;
        //event listener which prevent page refresh but also append info
        $(".des8").on("click", function() {
          event.preventDefault();
          $(".chest2").empty()
          $(".chest2").append(p8);
        });
        $(".des10").on("click", function() {
          event.preventDefault();
          $(".abs2").empty()
          $(".abs2").append(p10);
        });
        $(".des2").on("click", function() {
          event.preventDefault();
          $(".legs2").empty()
          $(".legs2").append(p2);
        })
        $(".des15").on("click", function() {
          event.preventDefault();
          $(".body2").empty()
          $(".body2").append(p15);
        })
        
    });
    //second call for a different page on the second api
    var queryURL4 = "https://wger.de/api/v2/exerciseinfo/?page=4";
    // call out to the Html
    $.ajax({
        url: queryURL4,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        //set info from the object into a local variable
        var number18 = response.results[18].description;
        var p18 = number18;
        //event listener
        $(".des18").on("click", function() {
            //prevents refreshing
          event.preventDefault();
          //empties span
          $(".back2").empty()
          //places on page
          $(".back2").append(p18);
        })
        
    });

        //event listener for endurance
       $("#endurance").on("click", function(){
         youVideo("cardio");
         $(".endurance2").empty()
         var p2 = $("<p>").text("Endurance exercise includes activities that increase your breathing and heart rate such as walking, jogging, swimming, biking and jumping rope.")
         $(".endurance2").append(p2);
       })
       //event listener for hiit
       $("#Hiit").on("click", function(){
        youVideo("hiit");
        $(".hiit2").empty()
        var p1 = $("<p>").text(" Exercises are performed with a high level of effort, or intensity, where it is thought that it will stimulate the body to produce an increase in muscular strength and size.")
        $(".hiit2").append(p1);
      })
      //event listener for low intensity cardio
      $("#low").on("click", function(){
        youVideo("running");
        $(".low2").empty()
        var p3 = $("<p>").text("Low intensity cardio is aerobic exercise that is performed at 60 to 80 % of your maximum heart rate or your target heart rate.")
        $(".low2").append(p3);
      })
      //event listener for zumba
      $("#zumba").on("click", function(){
        youVideo("dance workout");
        $(".zumba2").empty()
        var p4 = $("<p>").text("Zumba routines incorporate interval training — alternating fast and slow rhythms — to help improve cardiovascular fitness.");
        $(".zumba2").append(p4);
      })
      //event listener for chest
      $("#chest").on("click", function(){
        youVideo("chest workout");
      })
      //event listener for back
      $("#back").on("click", function(){
        youVideo("back workout")
      })
      //event listener for legs
      $("#legs").on("click", function(){
        youVideo("leg workout")
      })
      //event listener for abs
      $("#abs").on("click", function(){
        youVideo("abs workout")
      })
      //event listener for karma
      $("#karma").on("click", function(){
        youVideo("karma yoga");
        $(".karma2").empty()
        //Creates a p tage and then appends the text onto the page
        var kar = $("<p>").text("Karma yoga, also called Karma marga, is one of the three spiritual paths in Hinduism, one based on the - yoga of action. To a karma yogi, right action is a form of prayer. It is one of the paths in the spiritual practices of Hindus, others being Jnana yoga and Bhakti yoga");
       $(".karma2").append(kar)
      })
      //event listener for bhakti yoga
      $("#bhakti").on("click", function(){
        youVideo("bhakti yoga");
        $(".bhakti2").empty()
        var bha = $("<p>").text("The Sanskrit word bhakti comes from the root bhaj, which means - to adore or worship God. Bhakti yoga has been called - love for love's sake - and - union through love and devotion. Bhakti yoga, like any other form of yoga, is a path to self-realization, to having an experience of oneness with everything.");
        $(".bhakti2").append(bha);
      })
      //event listener for jnana yoga
      $("#jnana").on("click", function(){
        youVideo("jnana yoga");
        $(".jnana2").empty()
        var jna = $("<p>").text('Jnana yoga, also known as Jnanamarga, is one of the several spiritual paths in Hinduism that emphasizes the "path of knowledge", also known as the "path of self-realization". ... The jnana yoga is a spiritual practice that pursues knowledge with questions such as "who am I, what am I" among others.');
        $(".jnana2").append(jna);

      })
      //event listener for raja yoga
      $("#raja").on("click", function(){
       youVideo("raja yoga");
       $(".raja2").empty()
        var raj = $("<p>").text("Raja Yoga is a study of the human mind, becoming aware of its habitual tendencies, and ultimately transcending identification with the body-mind-intellect complex through meditation to rest in the vast ocean of consciousness, which comprises it all.");
        $(".raja2").append(raj);
      })
      //event listener for zumba
      $("#calisthenics").on("click", function(){
       youVideo("calisthenics workout")
      })
      //event listener that will open a new tab to the target link
      $("#hiphop").on("click", function(){
          window.open("https://www.youtube.com/watch?v=l0U7SxXHkPY&list=PLetgZKHHaF-Zq1Abh-ZGC4liPd_CV3Uo4", "_blank")
      })
      $("#edc").on("click", function(){
        window.open("https://www.youtube.com/watch?v=6BgUaQLCAsI", "_blank")
    })
    $("#classical").on("click", function(){
        window.open("https://www.youtube.com/watch?v=EeZHNmtBvDI", "_blank")
    })
    $("#rap").on("click", function(){
        window.open("https://www.youtube.com/playlist?list=PL4o29bINVT4EG_y-k5jGoOu3-Am8Nvi10&pbjreload=10", "_blank")
    })
});      