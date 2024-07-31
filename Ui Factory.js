var lastFocus = "";

app.Script("_UI_Factory.js", true);//Add Custom UI Class File

function OnStart(){

var arr =[];

	lay = app.CreateLayout( "Linear", "Center","FillXY" );
		lay.SetBackGradient(color.base[0], color.base[1], color.base[2], "bottom-top" )
	var _UI = new _UI_Factory("Light");
	var color = _UI.color;

var ly  = _UI.Card("card",lay, 0.9);

var newbutton = _UI.Button(newbutton, ly, "btntwo", 0.5);
newbutton  = _UI.Button("mainbtn", ly, "mybtn", 0.6);
	tbx = _UI.TextBox("tboxone",ly, "my hint dude","lg","FillX, SingleLine");
	ftbox = _UI.TextBox("fulltbox", ly," hint bro","md",null);
	var RTbox = _UI.TextBoxRound("Rboxone", ly,"round", "lg");
		var RTboxtwo = _UI.TextBoxRound("Rboxtwo", ly,"rndtwo", "lg");
	var RTboxthree = _UI.TextBoxRound("Rboxthree", ly,"rndthree", "lg");
	var txt = app.AddText( lay, "start",1.0,-1,"MultiLine");
	app.AddLayout( lay );
	var playbtn =	app.AddButton( lay,"play", 0.8,-1, null );

		
		//RTbox.click = function(){app.Alert( "kooookkk") }
		
			playbtn.SetOnTouch( play);	
	function play(){
				let  obj = app.GetObjects();
				
							for(var i in obj){
							//arr.push(""+obj[i].GetType(+"..."));
							arr.push(""+JSON.stringify(obj[i])+"");
				
										
								}
										txt.SetText(arr.join("\n" ))
				}
}
	
//size =full,lg,md,sm...
//


//Class.Textbox(id,layout,hint,size,options)
//____________________________________________________

//____________________________________________________

//____________________________________________________

//____________________________________________________

//____________________________________________________




		





//class newclass{
		//				constructor(name)
//						}
//}

//____________________________________________________

//_________________________________________________

//___________________________________________________