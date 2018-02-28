//Counter Code

var button=document.getElementById('counter');
button.onclick  = function () {
    
    // create a request object
    
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in the variable
    
    request.onreadystatechange = function () {
        
        if (request.readyState === XMLHttpRequest.DONE) {
            
            //take some action
            
            if (request.status == 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();            
                
            }
        }
        
            //dont take any action
            
            
        
    };
    
    // make the request
    
    request.open('GET','http://sibunsoumya.hasura-app.io/counter', true);
    request.send(null);

    
};
