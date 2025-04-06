const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLJtPH8t_isfVo8JMCfpm50ZoGWK9XASW6&maxResults=50&key=AIzaSyA2j4dkUhELA5-4nwUDxWKYGs-GYxfk-IE";

       fetch(url).then(response => {
         console.log(response);
         return response.json();
         
       }).then(data => {
        getData(data.items);
       }).catch(error => {
         console.log(error);
       });

       function getData(data) {
        console.log(data);
        data.forEach(item => {
            var title = item.snippet.title;
            var videoId = item.snippet.resourceId.videoId;
            var thumbnail = item.snippet.thumbnails.medium.url;
            
        
            // Removed unused variable 'discription'
            console.log(title)
            console.log(videoId)
            console.log(thumbnail)
            // createVideoElement(title, videoId, thumbnail);
            document.getElementById('content').innerHTML += "<hr><div class='btn btn-warning' type='submit' onclick='loadVideo(\"" + videoId + "\")'>" + title + "</div><img src='" + thumbnail + "' class='img-thumbnail' alt='thumbnail'>";
            
            // <p>" + item.snippet.description.split('.')[0] + ".</p><hr>";
        
        });  
       }


       function loadVideo(videoId) {
        document.getElementById('player').src = "https://www.youtube.com/embed/"+videoId + "?autoplay=1 ; rel=0 ; showinfo=0"; 
       }