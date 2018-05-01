(function(){

		let nota1, nota2, media = 0;
		  nota1 = document.querySelector('#nota01');
		  nota2 = document.querySelector('#nota02');
		  nota3 = document.querySelector('#nota03');

		  let btnLimpar = document.querySelector('#btnLimpar');
		 let botao = document.querySelector('#btnCalcular');

		 botao.addEventListener('click',mediaCal,false);
			limp();
			function mediaCal(){	
				if(nota1.value == "" || nota2.value == "" ||  nota3.value == ""){
					alert('Preencha todos os campos!');
			}else{
				nota1 = parseFloat(nota1.value);
				nota2 = parseFloat(nota2.value);
				nota3 = parseFloat(nota3.value);

				media = (nota1 + nota2 + nota3 )/3;
				
				botao.removeEventListener('click',mediaCal, true);
					
				valicao();

				}
			}		
			function limp(){
				btnLimpar.addEventListener('click', function(){
			
					window.location.reload();
					},false);
			}
				
			function valicao(){
				if(media >= 7){
					alert("Aluno Aprovado com a média "+media.toFixed(2));

				}
				else if(media >=5  && media <7){
					alert("Aluno Recuperação com a média "+media.toFixed(2));

				}else{
						alert("Aluno Reprovado com a média "+media.toFixed(2));
				}
			}
			
			
				 
				
	
}());
