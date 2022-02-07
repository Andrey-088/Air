import airplane from "./airplane.js";


const readyPlane = (forms, main) => {
	//создаем массив
	const data = [];

	forms.forEach((form) => {
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			// console.log(form.elements);
			for (const element of form.elements) {
				//Блокируем элементы с помощью disabled
				element.disabled = true;
			}
			data.push({
				name: form.name.value,
				ticket: form.ticket.value,
			});
			// console.log('data:', data); посмотрели массив
			// Если длина массива равна длине введенных данных, 
			//то с помощью forEach пройдем по массиву и уберем поля ввода используя remove.
			if (forms.length === data.length) {
				forms.forEach(form => form.remove())
				//появляется самолет, передаем main и введеннные data
				airplane(main, data);
			}
		});
	})
};

export default readyPlane;