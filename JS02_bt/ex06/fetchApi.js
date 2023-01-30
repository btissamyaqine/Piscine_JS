// import axios from 'axios'
import fetch from 'cross-fetch';

const findName = async() => {
	const urls = ['https://jsonplaceholder.typicode.com/comments?postId=9', 'https://jsonplaceholder.typicode.com/comments?postId=1'];
		try{
			let res = await Promise.all(urls.map(e => fetch(e)))
			let resJson = await Promise.all(res.map(e => e.json()))
			// console.log(resJson1)
			for (let i = 0; i <= 5; i++){
				let resJson1 = resJson.map(e => e[i].email)
			console.log(resJson1)
			}
		}catch(err) {
			console.log(err)
		}
	}
	findName()
	// 'voluptas deleniti ut', 
	// 'nam qui et', 
	// 'molestias sint est voluptatem modi',
	// 'hic molestiae et fuga ea maxime quod',
	// 'hic molestiae et fuga ea maxime quod',
	// 'autem illo facilis',