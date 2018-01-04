// o js duvidacruel esta sendo referenciado abaixo
//require('./duvidacruel')

const produto ={
	nome: 'Caneta BIC Preta',
	preco: 1.90,
	desconto: 0.05
}

function clone(objeto){
	// ... operador spread que faz a copia do objeto
	return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta BIC Azul'

console.log(produto, novoProduto)