// import axios from 'axios'
import fetch from 'cross-fetch';

const findAnyName = async() => {
	const urls = ['https://jsonplaceholder.typicode.com/comments?postId=9', 'https://jsonplaceholder.typicode.com/comments?postId=1'];
		try{
			let res = await Promise.all(urls.map(e => fetch(e)))
			let resJson1 = await Promise.all(res.map(e => e.json()))
			// console.log(resJson1)
			for (let i = 0; i <= 7; i++){
				let resJson = resJson1.map(e => e[i].body)
			console.log(resJson)
			}
		}catch(err) {
			console.log(err)
		}
	}
	findAnyName()
	// 'voluptas deleniti ut', 'nam qui et', 
	// 'molestias sint est voluptatem modi',
	// 'hic molestiae et fuga ea maxime quod',
	// 'hic molestiae et fuga ea maxime quod',
	// 'autem illo facilis',