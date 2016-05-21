$(document).ready(function() {
	"use strict";
// --------------Newsletter-----------------------

	$(".newsletter-signup").ajaxChimp({
		callback: mailchimpResponse,
		url: "http://creap.us9.list-manage.com/subscribe?u=6a9d144cf8d024b24d643696e&id=f6738e96de" // Replace your mailchimp post url inside double quote "".  
	});

	function mailchimpResponse(resp) {
		 if(resp.result === 'success') {

			$('.alert-success').html(resp.msg).fadeIn().delay(3000).fadeOut();

		} else if(resp.result === 'error') {
			$('.alert-warning').html(resp.msg).fadeIn().delay(3000).fadeOut();
		}
	};
 });
