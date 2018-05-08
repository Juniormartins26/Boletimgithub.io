	(function(){

			let nota1, nota2, media = 0;
			  nota1 = document.querySelector('#nota01');
			  nota2 = document.querySelector('#nota02');
			  nota3 = document.querySelector('#nota03');
			  let msg = document.querySelector('#msg-modal');
			  let   msgObrigatorio = document.querySelector('#msg');
			  let btnLimpar = document.querySelector('#btnLimpar');
			 let botao =  document.querySelector('#btnCalcular');

			 botao.addEventListener('click',mediaCal,false);
			 	// $('#btnCalcular').click (function(){
			 	// 	$('#modal-mensagem').modal();

			 	// });

				limp();
				
				function mediaCal(){	
					if(nota1.value == "" || nota2.value == "" ||  nota3.value == ""){

						 $('.bd-show2-modal-sm ,modal-content').modal();

						  msgObrigatorio.innerText=" Preencha todos os campos!";
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
					
						 $('.bd-show-modal-sm ,modal-content').modal();
						
						msg.innerText=" Aluno Aprovado com a média "+media.toFixed(2);


					}
					else if(media >=5  && media <7){
						  $('.bd-show-modal-sm ,modal-content').modal();
						msg.innerText=" O aluno foi  Aprovado com a média "+media.toFixed(2);

						msg.innerText=(" O aluno ficou em  Recuperação com a média "+media.toFixed(2));

					}else{
						 $('.bd-show-modal-sm ,modal-content').modal();
						msg.innerText=" O aluno foi  Aprovado com a média "+media.toFixed(2);

						msg.innerText=(" O aluno ficou em  Recuperação com a média "+media.toFixed(2));

					}
				}
							   
				

	}());
