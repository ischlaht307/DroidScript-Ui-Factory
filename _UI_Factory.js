class _UI_Factory{
							constructor(Mode){
											this.Theme = Mode;
										this.color = {
																			'base': ["#FF1A1A1D", "#FF333333", "#FF494949"],
																			'white': "#FFFFFFFF",
																			'black': "#FF000000",
																			'blue': (this.Theme == "Light" ? "#FF526EFF": "#FF046DFF"),
																			'btn':{
																									'a': (this.Theme == "Light" ?	"#FF727272" : "##FF424242"/*"#FF7C7C7C"*/),
																									'ab': (this.Theme == "Light" ?	"#FF555555" : "#FF000000")
																				},
																				'bg':{
																									'a': (this.Theme == "Light" ? "#FFB6B6B6" : "#FF6A6A6A"),
																									'ab': (this.Theme == "Light" ? "#FFB6B6B6" : "#FF6A6A6A")
																				},
																				'window':{
																									'a': (this.Theme == "Light" ?	"#FFA9A9A9" : "#FF7C7C7C"),
																									'ab': (this.Theme == "Light" ?	"#FFA9A9A9" : "#FF7C7C7C")
																				},
																					'text':{
																									'a': (this.Theme == "Light" ? "#FF000000" : "#FFFFFFFF"),
																									'ab': (this.Theme == "Light" ? "#FF404040" : "#FFC7C7C7")
																				},
																					'card':{
																									'a': (this.Theme == "Light" ? "#FFDDDDDD" : "#FFA3A3A3"),
																									'ab': (this.Theme == "Light" ? "#FFCCCCCC" : "#FFA3A3A3"),
																									'b': (this.Theme == "Light" ? "#FF9DA5FA" : "#FF5761FF")
																				},	
																					'tbox':{
																									'a': (this.Theme == "Light" ? "#FFCCCCCC" : "#FFA3A3A3"),
																									'ab': (this.Theme == "Light" ? "#FF666666" : "#FFA3A3A3"),
																									'b': (this.Theme == "Light" ? "#FF9DA5FA" : "#FF5761FF"),
																						 	'sel': (this.Theme == "Light" ? "#FFFFFFFF" : "#FF000000")
																				}
												}//color--END
												
												this.dim={	
																					'text': { 
																											'tbox':24,
																											'head':60,
																											'sub':36,
																											'msg':20,
																					},
																						'rad' : 16,
												}
		
						}//constructor--END--END
						
						Dims(s){//FINISHED
						/**/				let x = ( s=="lg"||s=="full"?0.9:s=="md"?0.45:s=="sm"?0.2:Number.isInteger(s)?s:0.1 )
						/**/				let y = ( s=="full"?0.2:-1 );
						/**/		return x,y;
						}//---Dims----END---END--FINISHED-----END
					
		TextBox(id, layout, hint, wh, options){
				const tbox = app.AddTextEdit( layout,"",this.Dims(wh), options);
										tbox.SetTextSize(this.dim.text.tbox, "ps");
										tbox.SetTextColor(this.color.text.a);
										tbox.SetSelectColor("#FFFFFFFF");
										tbox.SetCursorColor(this.color.blue);
										tbox.SetPadding( 20,20,20,20,"px" );
										tbox.SetMargins( 20,20,20,20,"px" );
										tbox.SetHint( hint );
										tbox.data.id = this.name;
										tbox.SetOnChange(this.TextBoxOnChange) 
										tbox.SetOnEnter(this.TextBoxOnEnter);
										return tbox;
							}
							
			Card(id, layout, size){
							var card = app.AddLayout(layout,"Card","Center, FillX");
											card.SetBackColor( this.color.card.ab)
											card.SetSize(-1,-1);	
											card.SetCornerRadius(20,"px");
											card.SetElevation(10);
											card.data.id = id;
									var  LineLay= app.AddLayout(card,"Linear","Center, FillXY" )
													LineLay.SetPadding(20,20,20,20,"px");
									return LineLay;
							}
							
			Button(id,layout,name,size){
						var btn = app.AddButton(layout,name, size, -1,"VCenter, Custom" );
										btn.SetTextSize(24,"ps");
										btn.SetStyle(this.color.btn.a, this.color.btn.ab, 15, "white", 0, 0.5);
										btn.data.id = id;
								return btn
							}
							
			TextBoxRound(id, layout, hint, wh, options){
														const rndcrd = app.AddLayout(layout, "Card", "FillX");
																				 rndcrd.SetSize(this.Dims(wh));
																				 rndcrd.SetBackColor(this.color.tbox.a );
																				 rndcrd.SetCornerRadius( this.dim.rad, "px");
																				 rndcrd.SetMargins(15,15,15,15, "px");	
																				 rndcrd.SetElevation(5.0);	
																		const abs_lay =  app.AddLayout(rndcrd, "Linear", "FillXY");
																								abs_lay.SetBackColor("#00000000");
														 									const tboxrnd = app.AddTextEdit( abs_lay,"",-1,-1,"FillXY");
														 						 								 tboxrnd.SetBackColor( "#00000000" );
														 					 										tboxrnd.SetTextSize(this.dim.text.tbox, "ps");
																														tboxrnd.SetTextColor(this.color.text.a);
																														tboxrnd.SetSelectColor(this.color.tbox.sel);
																														tboxrnd.SetCursorColor(this.color.blue);
																														tboxrnd.SetPadding( 40,30,40,4,"px" );
																														tboxrnd.SetHint( hint );
																													const divider = app.AddLayout(abs_lay, "Linear", "FillX, Bottom");	
																																			divider.SetMargins(40,0,40,12, "px");
																																			divider.SetSize(-1, 3, "px");
																																			divider.SetBackColor( this.color.black );
																																							 					  
																								tboxrnd.data.id = id;
																								tboxrnd.data.divider = divider;
																								tboxrnd.data.parent = rndcrd;
																										tboxrnd.SetOnFocus(this.TextBoxRoundOnFocus);
																										tboxrnd.SetOnChange( this.TextBoxRoundOnChange );
																				 					//rndcrd.SetOnTouch(()=>{rndcard.SetBackColor(this.color.tbox.a)} )
																			return rndcrd;
							}
	

}		



_UI_Factory.prototype.TextBoxRoundOnChange = function(data){
//this.SetBackColor("black");
//this.divider.SetBackColor("red");
		//		this.Mode = "Dark";
				//app.Alert(this.GetText())
			var txx =	JSON.stringify(document)
	//			app.Alert( JSON.stringify(this) )
				app.Alert( txx )
 };
 
 _UI_Factory.prototype.TextBoxRoundOnFocus = function(data){
 		this.data.divider.SetBackColor("red");
 		Rboxone.SetBackColor("green");
 	
 						
 							
 								
 									/*	var inter  = setInterval( () => {
 								if(this.data.id != lastFocus){
 													this.data.divider.SetBackColor("black");
 													clearInterval(inter);
 													app.ShowPopup(lastFocus);
 								}
 								else{
 									app.ShowPopup('lastFocus');
 								}
					},500);
			*/
					lastFocus = this.data.id;
 };

App.prototype.MyBtn = function(id,layout,name,size){
			var btn = this.AddButton(layout,name, size, -1,"VCenter, Custom" );
							btn.SetTextSize(24,"ps");
							btn.SetStyle("#ffffffff", "ff000000", 15, "white", 1, 0.5);
							btn.data.id = id;
			return btn;
};

function callb(){
			console.log(JSON.stringify(this.data.id));
}
/****  
class _UIE extends _UI_Factory{
		constructor(this.ThemeMode){
				super(this.ThemeMode);
				
				TextBox(){
						tbox.SetOnChange( TextBoxOnChange );
				}
							TextBoxOnChange(data){	
									app.Alert(app.eventSource.GetText());
							}
		}
}
****/



				/*			TextBoxImage(id, layout, hint, wh, options){
				const tbox = app.AddTextEdit( layout,"",this.Dims(wh), options);
				tbox.SetBackground("Img/Illustration13.png" )
										tbox.SetTextSize(this.dim.text.tbox, "ps");
										tbox.SetTextColor(this.color.text.a);
										tbox.SetSelectColor("#FFFFFFFF");
										tbox.SetCursorColor(this.color.blue);
										tbox.SetPadding( 20,20,20,20,"px" );
										tbox.SetMargins( 20,20,20,20,"px" );
										tbox.SetHint( hint );
										tbox.data.id = id;
										tbox.SetOnChange(this.TextBoxOnChange) 
										tbox.SetOnEnter(this.TextBoxOnEnter);
										return tbox;
							}*/


/****
.😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀
😀*/