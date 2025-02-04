const url = 'https://myhealthbox.p.rapidapi.com/product/info?product_id=3521578';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'myhealthbox.p.rapidapi.com'
	}
};

 const getfacts=async () =>{
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} 