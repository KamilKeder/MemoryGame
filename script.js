var button_start = document.querySelector("#button_start");
button_start.addEventListener("click",start);
var div_card = document.querySelectorAll(".div_card");

function start(){
	button_start.classList.remove("btn");
	button_start.classList.remove("btn-success");
	button_start.classList.add("ukryty");
for(var i=0; i<div_card.length; i++){
	div_card[i].classList.remove("sukces")
	div_card[i].classList.remove("obrot");
	div_card[i].classList.add("widzialne");
}
}

var zmienna = 0;
var wartosc1e = 0;
var wartosc2e = 1;
var wartosc1e1 = 0;
var wartosc2e1 = 1;
var zmienna2 = 0;

div_card.forEach((e)=>{
	e.addEventListener('click',()=>{		
		if (zmienna == 0) {
			zmienna = 1;
			e.classList.add("obrot");

			wartosc1e = e;
			wartosc1e1 = e.innerHTML;

		}else{
			div_card.forEach((e1)=>{
				e1.classList.add("blokada")
			})
			zmienna = 0;
			e.classList.add("obrot");
			wartosc2e = e;
			wartosc2e1 = e.innerHTML;
			setTimeout(function(){
				if(wartosc2e1 == wartosc1e1){
					wartosc1e.classList.add("sukces");
					wartosc2e.classList.add("sukces");
					wartosc1e.classList.remove("niezaliczone");
					wartosc2e.classList.remove("niezaliczone");
					sprawdzenie();
				}else{
					wartosc1e.classList.remove("obrot");
					wartosc2e.classList.remove("obrot");

				}
							div_card.forEach((e1)=>{
				e1.classList.remove("blokada")
			})


			},600)

		}
	
	})
})
function sprawdzenie(){
	for(var i=0; i<div_card.length; i++){
	if(div_card[i].classList.contains("niezaliczone")){

	}else{
		zmienna2 += 1;
		if (zmienna2 == 42) {
			alert("Gratulacje, udało ci się");
			zmienna2 = 0;
				button_start.classList.add("btn");
				button_start.classList.add("btn-success");
				button_start.classList.remove("ukryty");
		}
	}

}
}
