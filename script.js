// press button to access quote library/API via fetch API
// get quote pop up in new div, option to tweet out using Twit API, twitter functionality

// next stage - categories of quotes (motivational, funny, culture, etc.)
// select by keyword, author/origin

fetch("https://talaikis.com/api/quotes/random/")
	.then(
		function(response) {
			if (response.status !== 200) {
				console.log('Looks like there was an error - Status Code ' + response.status);
				return;
			}
			response.json().then(function(data) {
				console.log(data);
				document.body.innerHTML = `<div>${data.quote} - ${data.author}</div>`;
			});
		}
	)
	.catch(function(err) {
		console.log('Fetch Error ', err);
	});