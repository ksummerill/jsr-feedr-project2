var guardianUrl = 'https://content.guardianapis.com/search?' + 'api-key=84cff7a5-13e4-4b66-b235-40efe13230ae';
var xhr = new XMLHttpRequest();

// Guardian global variables
// var guardianLink =

// Request to Guardian API and appending of articles to #main

function makeGuardianRequest(guardianUrl, error, response, body) {
    xhr.open("GET", guardianUrl, true);
    xhr.onload = function (data){
      var parsed = JSON.parse(data.target.responseText);
        console.log(parsed);
      var allArticles = parsed.response.results;
        console.log(allArticles);
      var articleContent;
      for (var i = 0; i < allArticles.length; i++) {
        console.log(i);
       articleContent += `
        <article class="article">
          <section class="featuredImage">
            <img src="images/article_placeholder_2.jpg" alt="" />
          </section>
          <section class="articleContent">
              <a href="#"><h3>${allArticles[i].webTitle}</h3></a>
              <h6>${allArticles[i].sectionName}</h6>
          </section>
          <section class="impressions">
            526
          </section>
          <div class="clearfix"></div>
        </article>
      `;
    }
    $("#main").append(articleContent);
    popUp();

    //$(".article").on("click", function() {
  $(".article").on("click", "h3", function () {
      var articleTitle = $(event.target).html();
      var popUpChildren = $("#popUp").children(".container");
      popUpChildren.children("h1").html(articleTitle);

  });
}

  xhr.send();

};

makeGuardianRequest(guardianUrl);

// WORKS! popup loader for article module

function popUp(){
  var delayInMilliseconds = 1000;
  $(".article h3").on("click", function() {
      document.getElementById("popUp").classList.remove("hidden");
    //  function() {

    //  }
      setTimeout(function() {
        document.getElementById("popUp").classList.remove("loader");
      }, delayInMilliseconds);
});

$(".closePopUp").on("click", function() {
      document.getElementById("popUp").classList.add("hidden");

});
}

// Needs work! function to show article title / description in module

// function articlesInModule(){
//   //var delayInMilliseconds = 2000;
//   $(".article h1").on("click", function() {
//       document.getElementById("popUp").classList.remove("hidden");
//       // if the first article is clicked
//       // open the module and display the first article title
//       setTimeout(function() {
//         document.getElementById("popUp").classList.remove("loader");
//       }, delayInMilliseconds);
// });
// }


// Needs work! function to enable "read more from source" button to open new tab

function readMoreButton(){
  $(".popUpAction").on("click", function() {
    document.getElementById("popUp");
  })
}


// Needs work! function to handle the search bar

    // var title = allArticles[i].webTitle;
    // $("#popUpAction").append(articleContent);
    // popUp();
    // };

  //  <button onclick="window.open('https://www.our-url.com')" id="myButton"
 //class="btn request-callback" >Read more from source  </button>

    //});
