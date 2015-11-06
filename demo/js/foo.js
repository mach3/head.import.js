var result = document.getElementById("result");

result.append = function(text){
	var li = document.createElement("li");
	li.innerText = text;
	this.appendChild(li);
};

result.append("foo");

