enum METHOD {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE',
}

type Options = {
	method: METHOD
	data?: any
	timeout?: number
	headers?: {}
}

type OptionsWithoutMethod = Omit<Options, 'method'>

class HTTPTransport {
	get(
		url: string,
		options: OptionsWithoutMethod = {}
	): Promise<XMLHttpRequest> {
		return this.request(url, { ...options, method: METHOD.GET })
	}
	post(url: string, options: {}): Promise<XMLHttpRequest> {
		return this.request(url, { ...options, method: METHOD.POST })
	}
	put(url: string, options: {}): Promise<XMLHttpRequest> {
		return this.request(url, { ...options, method: METHOD.PUT })
	}
	patch(url: string, options: {}): Promise<XMLHttpRequest> {
		return this.request(url, { ...options, method: METHOD.PATCH })
	}
	delete(url: string, options: {}): Promise<XMLHttpRequest> {
		return this.request(url, { ...options, method: METHOD.DELETE })
	}

	request(
		url: string,
		options: Options = { method: METHOD.GET }
	): Promise<XMLHttpRequest> {
		const {
			method,
			data,
			timeout = 0,
			headers = {
				'Content-Type': 'application/json',
				authorization: 'this.token',
			},
		} = options

		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest()

			xhr.open(method, url)

			const headersArr: [string, string][] = Object.entries(headers)
			headersArr.forEach(([key, value]) => xhr.setRequestHeader(key, value))

			xhr.onload = function () {
				resolve(xhr)
			}

			function errHeandler() {
				reject(xhr)
			}

			xhr.onabort = function () {
				errHeandler()
			}
			xhr.onerror = function () {
				errHeandler()
			}
			xhr.ontimeout = function () {
				errHeandler()
			}
			xhr.timeout = timeout

			if (method === METHOD.GET && !data) {
				xhr.send()
			} else {
				xhr.send(JSON.stringify(data))
			}
		})
	}
}

const getPATH = 'https://jsonplaceholder.typicode.com/posts?_limit=5'
const postPATH = 'https://jsonplaceholder.typicode.com/posts'
const putPATH = 'https://jsonplaceholder.typicode.com/posts/1'
const delPATH = 'https://jsonplaceholder.typicode.com/posts/1'

// const api = new HTTPTransport()

function fetchWithRetry(url, options) {
	let count = 0
	function go() {
		return fetch(url, options)
			.then(res => {
				return res
			})
			.catch(err => {
				if (count < options.retries) {
					count++
					go()
				} else {
					throw err
				}
			})
	}

	return go()
}

// api.get(getPATH).then(res => console.log(res))
// api.delete(delPATH, { method: 'DELETE' }).then(res => console.log(res))

// api
// 	.post(postPATH, {
// 		data: {
// 			title: 'foo',
// 			body: 'bar',
// 			userId: 931214214,
// 		},
// 		method: 'POST',
// 	})
// 	.then(res => console.log(res.response))

// api
// 	.put(putPATH, {
// 		data: {
// 			id: 1,
// 			title: 'foo',
// 			body: 'bar',
// 			userId: 1,
// 		},
// 		method: 'PUT',
// 	})
// 	.then(res => console.log(res.response))
