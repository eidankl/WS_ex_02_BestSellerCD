var express = require ('express');	//now we have ref to module express
var url = require('url');
var app = express(); 				//ref to the WS

var CDStock = require('./CD');		//ref to my module
var CD = new CDStock;				//new instance from CD

/*  ROOT */
app.get('/', function(req,res){
	res.send(" localhost called, CDStock WS ROOT");
	console.log("localhost called, CDStock WS ROOT");
});

/* getCD */
app.get('/getCD', function(req,res){
	var temp = CD.getCD();
	res.json(temp);
	
});

/* getCDByMonth*/
app.get('/getCDByMonth', function(req,res) {
	var urlPart = url.parse(req.url,true);
 	var query = urlPart.query;
 	//res.json('PPPPPP :' + query.Date);
	//var urlPart = url.parse(req.url,true);
	//var query = CD.getCDByMonth(query.month);
	//res.json(id + " id");
	//var urlObj = url.parse(req.url,true);
	//var query = urlObj.query;
	var temp = CD.getCDByMonth(query.Date);
	res.json(temp + "hhhhhhh");
	//res.status(200).json(CD.getCDByMonth(req.params.Date)  + "temp");
});

/* ngetCDByMonthAndName */
app.get('/getCDByMonthAndName', function(req,res){
	var urlObj = url.parse(req.url,true);
	var query = urlObj.query;
	var temp = CD.getCDByMonthAndName(parseInt(query.month),parseInt(query.name));
	res.json(temp);
})

/* for herouko */
app.listen(process.env.PORT || 3000);


/* module function */
CD.getCD();
CD.getCDByMonth('April');
CD.getCDByMonth('september');
CD.getCDByMonthAndName('April','Arik Ainshtein');
CD.getCDByMonthAndName('April','Arik');
