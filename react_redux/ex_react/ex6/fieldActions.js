export function changeValue(e){
	console.log('changeValue')
	return{
		type: 'VALUE_CHANGED',
		//dado que vem com a ação
		payload: e.target.value
	}
}