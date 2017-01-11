var socket = io.connect('http://127.0.0.1:6677',{'forceNew':true});

socket.on('messages' ,function(data){
    
    console.log(data);
    render(data);
    
});

function render(data){
    var html = data.map(function(message, index){
        
      return (`
       <div class="message">
<strong>${message.nickname}</strong> dice:
<span>${message.text}</span>
</div>

`);       
    }).join('');
    
    document.getElementById('messages').innerHTML = html;
                                              
}