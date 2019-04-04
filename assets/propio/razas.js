 //<![CDATA[ 
 // array of possible razas in the same order as they appear in the Raza selection list 
 var razaLists = new Array(4) 
 razaLists[""] = ["Seleccionar"]; 
 razaLists["PE"] = [["DE", "Desconocido"], ["CR", "Cruza"], ["AF", "Afgano"], ["AT", "Airedale Terrier"], ["AK", "Akita"], ["AL", "Alano"], ["BH", "Basset Hound"], ["BE", "Beagle"], ["BF", "Bichon Frise"], ["BL", "Bloodhound"], ["BC", "Border Collie"], ["BO", "Boxer"], ["BB", "Boyero de Berna"], ["BT", "Bull Terrier"], ["BF", "Bulldog Francés"], ["BI", "Bulldog Inglés"], ["BU", "Bullmastiff"], ["CN", "Caniche"], ["CI", "Cimarrón Uruguayo"], ["CA", "Cocker Spaniel Americano"],   ["CI", "Cocker Spaniel Inglés"], ["CL", "Collie de pelo largo"], ["CH", "Chihuahua"], ["CW", "Chow Chow"], ["DH", "Dachshund"], ["DM", "Dálmata"], ["DO", "Doberman"], ["DG", "Dogo Argentino"], ["DB", "Dogo de Burdeos"], ["FB", "Fila Brasilero"], ["FT", "Fox Terrier"], ["GG", "Galgo"], ["GR", "Golden Retriever"], ["GD", "Gran Danés"], ["GH", "Greyhound"],  ["HS", "Husky Siberiano"], ["JR", "Jack Russell Terrier"], ["LR", "Labrador Retriever"], ["MN", "Mastín Napolitano"], ["OA", "Ovejero Alemán"], ["OB", "Ovejero Belga"], ["PK", "Pekinés"], ["PM", "Pinscher miniatura"], ["PT", "Pitbull"], ["PN", "Pointer"], ["PM", "Pomerania"], ["PD", "Poodle"], ["PG", "Pug"], ["RW", "Rottweiler"], ["SB", "San Bernardo"], ["SG", "Schnauzer Gigante"], ["SM", "Schnauzer miniatura"], ["SS", "Schnauzer standard"], ["ST", "Scottish Terrier"],  ["SI", "Setter Inglés"], ["SR", "Setter Irlandés"], ["SP", "Shar Pei"], ["SL", "Shetland"], ["ST", "Shih Tzu"], ["SH", "Siberian Husky"], ["TN", "Terranova"], ["WM", "Weimaraner"], ["WP", "Whippet"], ["YT", "Yorkshire Terrier"], ["OT", "Otro"]]; 
 razaLists["GA"] = [["CR", "Cruza"], ["AN", "Angora"], ["BI", "Birmano"], ["PE", "Persa"], ["RU", "Ruso Azul"], ["SI", "Siamés"], ["OT","Otro"]]; 
 razaLists["OT"] = [["AV", "Ave"], ["CB", "Caballo"], ["CR", "Cerdo"], ["CN", "Conejo"], ["HM", "Hámster"], ["SR", "Serpiente"], ["TR", "Tortuga"], ["OT", "Otro"]]; 
  /* razaChange() is called from the onchange event of a select element. 
 * param selectObj - the select object which fired the on change event. 
 */ 
 function razaChange(selectObj) { 
 // get the index of the selected option 
 var idx = selectObj.selectedIndex; 
 // get the value of the selected option 
 var which = selectObj.options[idx].value; 
 // use the selected option value to retrieve the list of items from the razaLists array 
 cList = razaLists[which]; 
 // get the localidades select element via its known id 
 var cSelect = document.getElementById("raza"); 
 // remove the current options from the raza select 
 var len=cSelect.options.length; 
 while (cSelect.options.length > 0) { 
 cSelect.remove(0); 
 } 
 var newOption; 
 // create new options 
 for (var i=0; i<cList.length; i++) { 
 newOption = document.createElement("option"); 
 newOption.value = cList[i][0];  // when option string and value are different
 newOption.text=cList[i][1]; 
 // add the new option 
 try { 
 cSelect.add(newOption);  // this will fail in DOM browsers but is needed for IE 
 } 
 catch (e) { 
 cSelect.appendChild(newOption); 
 } 
 } 
 } 
//]]>