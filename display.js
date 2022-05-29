

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
        document.getElementById("display").innerHTML=null;
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
                document.querySelector(".searchdata").append(div);

            });
      
}





let video= JSON.parse(localStorage.getItem("video"))||{};
console.log(video);
const appendData= (data)=>{
   document.getElementById("display").innerHTML=null;
            let div= document.createElement("div")
            // div.style.border="1px solid red"
            div.style.cursor="pointer";
            let name= document.createElement("p");
            name.textContent=data.snippet.title;
            let iframe= document.createElement("iframe");
            iframe.src=`https://www.youtube.com/embed/${data.id.videoId}`;
            iframe.id="iframe";
            iframe.allow="fullscreen";
            div.append(iframe,name);
            document.getElementById("display").append(div);

  
}

appendData(video);


