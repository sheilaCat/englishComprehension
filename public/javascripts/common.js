//��ÿ������choose����
var blank_space = document.getElementsByClass("blank-space");
var i =0;
for(i;i<blank_space.length;i++){
	var node = blank_space.childnodes[i];
	document.setAttribute("onclick","choose();");
}
//choose����
function choose(){
}