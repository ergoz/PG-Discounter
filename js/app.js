$(document).ready(function() {
	
		$('#edsprocess').click(function(){
				
			var bez_skidki = $('.wodiscount');
			var summa_skidki = $('.summdiscount');
			var so_skidkoi = $('.withdiscount');
			var sama_skidka = $('.countdiscount');
			
			if(bez_skidki.val()<1) {
				$('#wodiscount').addClass('error');
				$('#wodiscount').find('.help-inline').html("Это поле обязательно для заполнения!");
			} else {
				$('#wodiscount').removeClass('error');
				$('#wodiscount').find('.help-inline').html("");
				if(summa_skidki.val() > 0) {
					$('#summdiscount').removeClass('error');
					$('#summdiscount').find('.help-inline').html("");
					$('#withdiscount').removeClass('error');
					$('#withdiscount').find('.help-inline').html("");
					$('#countdiscount').removeClass('error');
					$('#countdiscount').find('.help-inline').html("");
					so_skidkoi.val( bez_skidki.val() - summa_skidki.val() );
					sama_skidka.val( 100 - (so_skidkoi.val() * 100) / bez_skidki.val() );
				} else if(so_skidkoi.val() > 0) {
					$('#summdiscount').removeClass('error');
					$('#summdiscount').find('.help-inline').html("");
					$('#withdiscount').removeClass('error');
					$('#withdiscount').find('.help-inline').html("");
					$('#countdiscount').removeClass('error');
					$('#countdiscount').find('.help-inline').html("");
					summa_skidki.val( bez_skidki.val() - so_skidkoi.val() );
					sama_skidka.val( 100 - (so_skidkoi.val() * 100) / bez_skidki.val() );
				} else if(sama_skidka.val() > 0) {
					$('#summdiscount').removeClass('error');
					$('#summdiscount').find('.help-inline').html("");
					$('#withdiscount').removeClass('error');
					$('#withdiscount').find('.help-inline').html("");
					$('#countdiscount').removeClass('error');
					$('#countdiscount').find('.help-inline').html("");
					summa_skidki.val( bez_skidki.val() * (sama_skidka.val() / 100) );
					so_skidkoi.val( bez_skidki.val() - summa_skidki.val() );
				} else {
					$('#summdiscount').addClass('error');
					$('#summdiscount').find('.help-inline').html("Заполните хотя бы одно из этих полей!");
					$('#withdiscount').addClass('error');
					$('#withdiscount').find('.help-inline').html("Заполните хотя бы одно из этих полей!");
					$('#countdiscount').addClass('error');
					$('#countdiscount').find('.help-inline').html("Заполните хотя бы одно из этих полей!");
				}
			}
			
			return false;
		});
		
		$('#edsclean').click(function(){
			$('.wodiscount').val("");
			$('.summdiscount').val("");
			$('.withdiscount').val("");
			$('.countdiscount').val("");
			
			$('#wodiscount').removeClass('error');
			$('#wodiscount').find('.help-inline').html("");
			$('#summdiscount').removeClass('error');
			$('#summdiscount').find('.help-inline').html("");
			$('#withdiscount').removeClass('error');
			$('#withdiscount').find('.help-inline').html("");
			$('#countdiscount').removeClass('error');
			$('#countdiscount').find('.help-inline').html("");

			return false;
		});
		
	});