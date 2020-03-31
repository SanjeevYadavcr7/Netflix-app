// Get the elements
// const player = document.querySelector('.player');
// const video = document.querySelector('.viewer');
// const progress = player.querySelector('.progress');
// const progressBar = player.querySelector('.progress__filled');
// const toggle = player.querySelector('.toggle');
// const skipButtons = player.querySelectorAll('[data-skip]');
// const ranges = player.querySelectorAll('.player__slider');

// Bulid out functions


 var video_screen = document.getElementById('main');
  var play_pause_status = "pause";

  function togglePlay()
  {
    if (play_pause_status == "pause")
    {
      video_screen.play();
      play_pause_status = "play";
      return true;
    }
    else
    {
      video_screen.pause();
      play_pause_status = "pause";
      return true;
      
    }
  }

// function updateButton()
// {
// 	const icon = this.paused ?   : !! ;
// 	toggle.textContent = icon;
// }

  //Hook up listners

  // video.addEventListener('click', togglePlay);
  // video.addEventListener('play', updateButton);
  // video.addEventListener('pause', updateButton);

  // toggle.addEventListener('click', togglePlay);
