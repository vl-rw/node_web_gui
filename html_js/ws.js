const ws = new WebSocket("ws://localhost:9898");
        
ws.addEventListener("open", () => {

	text_area.textContent= "We are connected!";
           
	ws.send("Request from html-based GUI...");
        
});
        
ws.addEventListener("message", ({ data }) => {
           
	text_area.textContent= data;
	
});
