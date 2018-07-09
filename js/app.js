var guardianUrl = 'https://content.guardianapis.com/search?' + 'api-key=84cff7a5-13e4-4b66-b235-40efe13230ae';
var xhr = new XMLHttpRequest();

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
              <a href="#"><h3 data-url="${allArticles[i].webUrl}">${allArticles[i].webTitle}</h3></a>
              <h6>${allArticles[i].sectionName}</h6>
          </section>
          <section class="impressions">
            526
          </section>
          <!-- .fields.thumbnail
          trying to get images working here:
          <section class="images">
            <a href="#"><img src=data-image="${allArticles[i].image}">${allArticles[i].image}</h3></a>
          </section>-->
          <div class="clearfix"></div>
        </article>
      `;
    }
    $("#main").append(articleContent);
    popUp();

// shows title when article is clicked on
  $(".article").on("click", "h3", function () {
      var articleTitle = $(event.target).html();
      var articleUrl = $(event.target).data("url");
      var popUpChildren = $("#popUp").children(".container");
      popUpChildren.children("h1").html(articleTitle);
      var myButton = $(".popUpAction").attr("href", articleUrl);

  });
}

  xhr.send();

};

makeGuardianRequest(guardianUrl);

// popup loader for article module

function popUp(){
  var delayInMilliseconds = 1000;
  $(".article h3").on("click", function() {
      document.getElementById("popUp").classList.remove("hidden");
      setTimeout(function() {
        document.getElementById("popUp").classList.remove("loader");
      }, delayInMilliseconds);
});

$(".closePopUp").on("click", function() {
      document.getElementById("popUp").classList.add("hidden");

});
}

// slide search bar out on click
$("#search").on("click", function () {
    $("#search").toggleClass("active");
});
