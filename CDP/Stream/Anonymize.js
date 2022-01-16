function Anonymize(){
	_boxeverq.push(function () {
		Boxever.reset();
	});
	location.reload();
}
//*****************************************
if (confirm('START AS ANONYMOUS?')) {
	Anonymize();
}