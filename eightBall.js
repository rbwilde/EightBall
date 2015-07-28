var net = require("net");
var port = 2000;
var fs = require("fs");
var predictions = ["It is certain","It is decidedly so","Without a doubt","Yes definitely","You may rely on it","As I see it, yes","Most likely","Outlook good","Yes","Signs point to yes","Reply hazy try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"];

var server = net.createServer(function(connection){
	connection.write("Ask your question...\n");
	connection.setEncoding("utf8");
	connection.on("data", function(answers){
			var questions = answers.toString().trim().toLowerCase();
			console.log("you asked a question")
				if(questions.indexOf("?")){
					console.log(typeof predictions);
					connection.write(predictions[Math.floor(Math.random()*predictions.length)] + "\n");
					}else{
						connection.write("That's not a question.")
					}
				})	
});

server.listen(2000, function() {
    console.log("Listening");
});


