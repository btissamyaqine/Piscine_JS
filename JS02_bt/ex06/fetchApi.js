// - JS00: JSX - 
// - JS01: DOM -
// - JS02: Callbacks - Promise(try / catch / all / then) - async - await



// import axios from 'axios'
import fetch from 'cross-fetch';

const findAnyName = async() => {
	const urls = [
		'https://ops.demanddriventech.com/api/v1/deploy/findResources?siteId=Demo1',
		'https://jsonplaceholder.typicode.com/comments?postId=9',
		'https://jsonplaceholder.typicode.com/comments?postId=1'
	];
		try{
			let res = await Promise.all(urls.map(e => fetch(e)))
			let resJson = await Promise.all(res.map(e => e.json()))
			console.log(resJson[0][0].name)
			// for (let i = 0; i <= 7; i++){
				// let resJson = resJson1.map(e => e[i].body)
			// 	console.log(resJson)
			// }
		} catch(err) {
			console.log(err)
		}
	}
	findAnyName()
	// 'voluptas deleniti ut', 'nam qui et', 
	// 'molestias sint est voluptatem modi',
	// 'hic molestiae et fuga ea maxime quod',
	// 'hic molestiae et fuga ea maxime quod',
	// 'autem illo facilis',