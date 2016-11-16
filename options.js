

function showList () {
	var ol = document.getElementById('blacklist');

	// For...
		// ol. addChild ....

}

function addItem (item) {
	hideList.push(item);
	localStorage.setItem("rutenBlackList", hideList);
}


function onInit () {
	var hideList = localStorage.getItem("rutenBlackList");
	console.log(hidelist);
	showList(hideList);
}



onInit();