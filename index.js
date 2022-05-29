const searchvideos= async()=>{
    try{
        let input= document.getElementById("input").value;
        let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=AIzaSyBUhVB1ElvbTioqDiUWTPaTyiKH1497tSE&type=mostpopular&maxResults=30`;
        

        let res = await fetch(url);
        let data = await res.json();
        let videos= data.items;
        console.log(videos);
        appendVideos(videos);
    }
    catch(error){
        console.log("error",error);
    }
   
   
};


// https://www.youtube.com/embed/3fpP2dM02tM
const appendVideos= (data)=>{
        document.getElementById("search_results").innerHTML=null;
            data.forEach(({snippet:{title,thumbnails:{high:{url}}}},index) => {
                let div= document.createElement("div")
                // div.style.border="1px solid red"
                div.style.cursor="pointer";
                let thumb= document.createElement("img");
                thumb.src=url;
                thumb.style.width="100%";
                thumb.style.height="200px";
                let name= document.createElement("p");
                name.textContent=title;
                div.addEventListener("click",()=>{
                      localStorage.setItem("video",JSON.stringify(data[index]));
                      window.location.href="display.html";
                })
                // let iframe= document.createElement("iframe");
                // iframe.src=`https://www.youtube.com/embed/${el.id.videoId}`;
                // iframe.height="80%";
                // iframe.width="100%";
                // iframe.allow="fullscreen";
            div.append(thumb,name);
                document.getElementById("search_results").append(div);

            });
      
}




//    let url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=India&key=AIzaSyBUhVB1ElvbTioqDiUWTPaTyiKH1497tSE`;



const mostPopularVideos= async()=>{
    try{
        let url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyBUhVB1ElvbTioqDiUWTPaTyiKH1497tSE&maxResults=50`;
        let res = await fetch(url);
        let populardata = await res.json();
        let popularvideos= populardata.items;
        console.log(popularvideos);
        appendpopularVideos(popularvideos);
    }
    catch(error){
        console.log("error",error);
    }
   
   
};

mostPopularVideos();

const appendpopularVideos= (data)=>{
        document.getElementById("search_results").innerHTML=null;
            data.forEach(({snippet:{title,thumbnails:{high:{url}}}},index) => {
                let div= document.createElement("div")
                // div.style.border="1px solid red"
                div.style.cursor="pointer";
                let thumb= document.createElement("img");
                thumb.src=url;
                thumb.style.width="100%";
                thumb.style.height="200px";
                let name= document.createElement("p");
                name.textContent=title;
                div.addEventListener("click",()=>{
                      localStorage.setItem("video",JSON.stringify(data[index]));
                      window.location.href="display2.html";
                })
                // let iframe= document.createElement("iframe");
                // iframe.src=`https://www.youtube.com/embed/${el.id.videoId}`;
                // iframe.height="80%";
                // iframe.width="100%";
                // iframe.allow="fullscreen";
            div.append(thumb,name);
                document.getElementById("search_results").append(div);

            });
      
}
