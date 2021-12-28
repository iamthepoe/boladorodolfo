var pontos = 0;
var marginball = [];
var sizeball = 200;
		
		//var bola = document.getElementById("bola");
		//bola.addevent("listner")

function rodolfosMoviment(){
			pontos++;
			
			RodolfosBall = document.getElementById("bola");
			RodolfosBall.innerHTML = pontos;

			for(c = 0; c<=3; c++){
				marginball[c] = Math.floor(Math.random() * 300);
			}

			RodolfosBall.style.marginRight = (marginball[0] + "px");
			RodolfosBall.style.marginBottom = (marginball[1] + "px");
			RodolfosBall.style.marginTop = (marginball[2] + "px");
			RodolfosBall.style.marginLeft = (marginball[3] + "px");

			if(sizeball<=300 && sizeball>=200){ // balanceamento de medidas
				sizeball-=10;
			}else if(sizeball<=199 && sizeball>=100){
				sizeball-=5;
			}else if(sizeball<=99 && sizeball>=50){
				sizeball-=1;
			}else{
				sizeball = 50; //definindo tamanho limite
				
			}
			
			

			RodolfosBall.style.width = (sizeball + "px");
			RodolfosBall.style.height = (sizeball + "px");
			
}