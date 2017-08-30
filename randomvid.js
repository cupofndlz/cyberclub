 
  document.onreadystatechange = function () {
      if (document.readyState == "interactive") {    
 
    
// build up your storage for video urls here 
// leave out the file extension, we will let the browser decide which type he can play.
// also note how I left out the 'http:' part. we don't need it, the browser automatically
// decides if he needs http or https.
var videoStorage = [ 
    'songs/hoodrich',
    'songs/friednoodles',
    'songs/allstar',
    'songs/dkrap',
    'songs/getlow',
    'songs/pumpedupkicks',
    'songs/congradulations',
    'songs/noodlescantbebeat',
    'songs/alabamanigger'
],
    video = document.querySelector('video'),
    // choose one random url from our storage as the active video
    activeVideoUrl = videoStorage[Math.round(Math.random() * (videoStorage.length - 1))];        
        
// check which file extension your browser can play and set the video source accordingly
if(video.canPlayType('video/mp4')) {
    video.setAttribute('src', activeVideoUrl + '.mp4');
} else if(video.canPlayType('video/webm')) {
    video.setAttribute('src', activeVideoUrl + '.webm');
}
    }
}