function setCookie(name, value, expireSec) {
	var exdate = new Date();
	exdate.setTime(exdate.getTime() + expireSec * 1000);
	document.cookie = name + "=" + escape(value) + ((expireSec == 0) ? "" : ";expires=" + exdate.toGMTString());
}
function getCookie(name) {
	if (document.cookie.length > 0) {
		var start = document.cookie.indexOf(name + "=");
		if (start != -1) {
			start = start + name.length + 1;
			var end = document.cookie.indexOf(";", start);
			if (end == -1) {
				end = document.cookie.length
			}
			return unescape(document.cookie.substring(start, end));
		}
	}
	return "";
}