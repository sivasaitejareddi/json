
const dom=document.getElementById('github');
dom.addEventListener('click',function(){

  openwin();
  
})
function openwin(){
  var xhr = new XMLHttpRequest();
  //xhttp.onreadystatechange=function() {
    //if (this.readyState == 4 && this.status == 200) {
      //console.log(JSON.parse(this.responseText))
  //  }
 // };
  
  xhr.open("GET", "https://api.github.com/users", true);
  xhr.send();
 //  window.open("https://api.github.com/users");
    xhr.onload = function(){
       if(this.status == 200){
    //       console.log(this.responseText);
        var users = JSON.parse(this.responseText);
            output = '';
            for(var i in users){
                 output += 
                 '<div class="user">'+
                  '<img src="'+users[i].avatar_url+'" width="70" height="70">' +
                  '<ul>' +
                    '<li>id:'+users[i].id+'</li>'+
                    '<li>login:'+users[i].login+'</li>' +
                    '</ul>' +
                    '</div>';
                   // document.getelementbyid('users').innerHTML = output;
              }
            }
          }
    xhr.send();
}
