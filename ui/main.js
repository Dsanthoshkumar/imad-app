// counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
    //create a request to the counter endpoint
var request = new XMLHttpRequest();
    //capture the response end store it in the variable
    request.onreadystatechange = function () {
        if (request.readyState --- XMLHttpRequest.DONE) {
            if (request.satus === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //not done
    };
  
 //make request   
    request.open()
};