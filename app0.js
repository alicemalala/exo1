$(document).ready(function(){
	let html = ""
	const URL = "https://jsonplaceholder.typicode.com/todos"
	const promise = new Promise(function(resolve,reject){
		resolve(fetch(URL))
	})
	promise.then(resp =>resp.json())
	.then(json =>{
		json.forEach((data,index) =>{
			if(index<10){
				html += "<tr><td>"+data.id+"</td><td>"+data.userId+"</td><td>"+data.title+"</td><td>"+data.completed+"</td></tr>"
			}
			$("tbody").html(html)
		})
	})
	$("#choix").on("change",function(e){
		let html = ""
		const choice = $(this).val()
		$("tbody").remove()
		$("table").append("<tbody></tbody>")
		fetch(URL).then(function(response){
			return response.json()
		}).then(function(json){
			let array
			if(choice == 1){
				array = json.filter(el=>!el.completed)
			}else if (choice == 2) {
				array = json.filter(el=>el.completed)
			}else{
				array = json
			}
			array.forEach((data,index) =>{
			if(index<10){
				html += "<tr><td>"+data.id+"</td><td>"+data.userId+"</td><td>"+data.title+"</td><td>"+data.completed+"</td></tr>"
			}
			$("tbody").html(html)
		})
		})
	})
})