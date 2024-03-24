<button> 
    onclick = window.location.href='http//www.'
</button>
document.getElementById('chat form').addEventListener('submit',function(event)
{event.preventDefault();
var message=document.getElementById('textinput').ariaValueMax;
sendMessagToServer(message); document.getElementById('textinput').value='';
})