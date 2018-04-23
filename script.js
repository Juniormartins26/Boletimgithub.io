(function(){

		  let nota1, nota2, media = 0;
		  nota1 = document.querySelector('#nota01');
		  nota2 = document.querySelector('#nota02');
		  nota3 = document.querySelector('#nota03');

		 let botao = document.querySelector('#btnCalcular');

		 botao.addEventListener('click',mediaCal,false);
			
			function mediaCal(){	

				nota1 = parseFloat(nota1.value);
				nota2 = parseFloat(nota2.value);
				nota3 = parseFloat(nota3.value);

				media = (nota1 + nota2 + nota3 )/3;
				if(media){alert("A sua média é "+media.toFixed(2));
				}


				}
					

					

				
	
}());
