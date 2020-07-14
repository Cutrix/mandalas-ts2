var printImage = "";
var printPopup = "";
function startPrinting(img) {
	if(printPopup)
		printPopup.close()

	//keep it in memory until the popup is ready
	printImage = img
	printPopup = window.open("print.html", "Print", "location=no,height=500,width=600");
    printPopup.onbeforeunload = function(){
        printPopup = ""
        printImage = ""
    }
}

function transmitImg() {
	if(printPopup)
	{
		printPopup.addImg(printImage)
		//var countryCode = language+'_'+country;
		//printPopup.addContest(countryCode)
		printImage = ""
		printPopup.focus();
		setTimeout(function(){
			printPopup.print();
		}, 500)
	}

}
