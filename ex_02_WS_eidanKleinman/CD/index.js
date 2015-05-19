var CDJson = require('./stock.json');


/* CDStock hold the cd at the json */
function CDStock(){
	CDJson;
}

/* getCD: return all the CD that sold, No param */
CDStock.prototype.getCD = function(){
	console.log("\ngetCD() function called")
	var length = CDJson.CDStock.length;
	/* if there is no CD at the json*/
	if( length == 0){
			console.log("There is no CD");
			return 0;
	}

	/*print the json */
	console.log("Sold CD:")
	for(var i = 0; i < CDJson.CDStock.length; i++){
		console.log("**************");
		console.log("ID:" + CDJson.CDStock[i].ID);
		console.log("Name:" + CDJson.CDStock[i].Name);
		console.log("Date:" + CDJson.CDStock[i].Date);
		console.log("Price:" + CDJson.CDStock[i].Price);
	}
	return CDJson;
}

/* getCDByMonth: return all the CD that sold at specific month, 1 Param-->Month */
CDStock.prototype.getCDByMonth = function(month){
	var found = 0;//if the month found this flag will be 1
	var stack = {
		CDStock:[]
	};//array for matching CD by  month

	console.log("\n\ngetCDByMonth(" + month + ") called:")
	for(var i = 0; i < CDJson.CDStock.length; i++){
		if(CDJson.CDStock[i].Date == month){
				found = 1;
				
				console.log("**************");
				console.log("ID:" + CDJson.CDStock[i].ID);
				console.log("Name:" + CDJson.CDStock[i].Name);
				console.log("Date:" + CDJson.CDStock[i].Date);
				console.log("Price:" + CDJson.CDStock[i].Price);
				
				 stack.CDStock.push({
				
					"ID" : CDJson.CDStock[i].ID,
					"Name" : CDJson.CDStock[i].Name,
					"Date" : CDJson.CDStock[i].Date,
					"Price" : CDJson.CDStock[i].Price
				});
				console.log(stack.CDStack.pop());

				//stack.push(CDJson.CDStock[i]);
					
		}
		
	}
	/* if there is no match for month --> print no match*/
	if(found == 0){
		console.log("NO match --> There is no CD that sold this month (" + month + ")" );
		return 0;
	}
	return stack;
}

/* getCDByMonthAndName: return all the CD that sold at specific month with specific name, 2 Param-->Month & Name, Return val-->stack with CD obj */
CDStock.prototype.getCDByMonthAndName = function(month,name){
	var found = 0;//if the month and name found this flag will be 1
	var stack = [];//array for matching cd by  month and name

	console.log("\n\ngetCDByMonthAndName(" + month + "," + name + ") called:")
	for(var i = 0; i < CDJson.CDStock.length; i++){
		if(CDJson.CDStock[i].Date == month && CDJson.CDStock[i].Name == name){
				found = 1;
				console.log("**************");
				console.log("ID:" + CDJson.CDStock[i].ID);
				console.log("Name:" + CDJson.CDStock[i].Name);
				console.log("Date:" + CDJson.CDStock[i].Date);
				console.log("Price:" + CDJson.CDStock[i].Price);
				
				stack.push(CDJson.CDStock[i]);
		}

	}
	/* if there is no match for month and name --> print no match*/
	if(found == 0){
		console.log(" NO match --> There is no CD that sold this month (" + month + ")" +" with the name:" + name );
		return 0;
	}
	return stack;
}



/*export the module */
module.exports = CDStock;