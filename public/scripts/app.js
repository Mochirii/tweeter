$(document).ready(function() {


  $('#compose').on('click', function(event) {
    $('.new-tweet').slideToggle();
    $('.text').focus();
  });

  $("#add-tweet-form").on('input', function(event) {
    let text = $(this).find('.text').val();
    if (!(text === "") || !(text === null)) { 
      $('.error-empty').hide();
    }
    if (!(text.length > 140)) { 
      $('.error-limit').hide();
    }
  });
    

  $("#add-tweet-form").on('submit', function(event) {
    event.preventDefault();
    let serialized = $(this).serialize(); 
    if(!validate(this)){
      return;
    }
    $('.text').val('');
    $('.counter').text(140);
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: serialized,
      success: function() {
        loadTweets();
      }
    })
  })


  function validate(This) {
    let text = $(This).find('.text').val();
    if (text === "" || text === null) {
      $('.error-empty').show();
      return false;
    } else if (text.length > 140) {
      $('.error-limit').show();
      return false;
    }
    return true;
  };

  function loadTweets() {
    $.ajax({
      url:'/tweets',
      method: 'GET',
      dataType: 'json',
      success: function (getTweets) {
        renderTweets(getTweets);
      }
    })
  }
  loadTweets();


  function renderTweets(tweets) {
    var $tweeeeeetts = $(".tweet-container").empty();
    for (let i = 0; i < tweets.length; i++) {
      var tweethtml = createTweetElement(tweets[i]);
      $tweeeeeetts.prepend(tweethtml);
    }
  }
  

  function createTweetElement(tweet) {
    return `
    <article class="tweet">
      <header class="tweet-header">
        <img class="avatar" src="${tweet.user.avatars.small}">
        <span class="name">${tweet.user.name}</span>
        <span class="username">${tweet.user.handle}</span>
      </header>
      <div class="tweet-body">${tweet.content.text}</div>
      <footer class="tweet-footer">
        <span class="time-stamp">${new Date(tweet.created_at*1000)}</span>
        <span class="list-group">
          <a class="list-group-item" href="#"><i class="fa fa-flag fa-fw"></i></a>
          <a class="list-group-item" href="#"><i class="fa fa-retweet fa-fw" ></i></a>
          <a class="list-group-item" href="#"><i class="fa fa-heart fa-fw" ></i></a>
        </span>
      </footer>
    </article>`
  }
    
});

