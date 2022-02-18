import { NegociacaoController } from './controllers/negociacao-controller.js';
import { NegociacoesView } from './views/negociacoes-view.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    controller.adiciona();   
    
})


const negociacaoView=new NegociacoesView('#negociacoesView');
