/*! head.import */
!function(){
	var el, path, type, files;

	el = (function(scripts){
		return scripts[scripts.length-1];
	}(document.getElementsByTagName("script")));

	path = (function(el){
		var src, a;
		if(! (/false/i).test(el.getAttribute("data-resolve"))){
			src = el.getAttribute("src");
			a = document.createElement("a");
			a.href = src;
			return a.pathname.replace(/[^\/]+$/, "");
		}
		return "";
	}(el));

	type = function(obj, test){
		var name = Object.prototype.toString.call(obj).replace(/^\[object\s(.+?)\]$/, "$1");
		return test ? name === test : name;
	};

	files = (function(){
		var data, json, i;
		data = el.getAttribute("data-files");
		data = data ? data.split(",") : [];
		try {
			json = JSON.parse(el.innerHTML);
			json = type(json, "Array") ? json : [];
		} catch(e){
			json = [];
		}
		data = data.concat(json);
		i = data.length;
		while(i--){
			data[i] = path + data[i].replace(/(^\s+|\s+$)/, "");
		}
		return data;
	}());

	head.js.apply(head, files);
}();