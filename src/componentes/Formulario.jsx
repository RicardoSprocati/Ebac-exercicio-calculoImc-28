import { useState } from "react";

import styles from './Form.module.css';

const Formulario = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacaoResultado, setClassificacaoResultado] = useState('');

    const calcularImc = () => {
        event.preventDefault();

        const pesoEmNumero = parseFloat(peso);
        const alturaEmMetros = parseFloat(altura);

        if (!isNaN(pesoEmNumero) && !isNaN(alturaEmMetros) && alturaEmMetros > 0) {
            const resultadoImc = pesoEmNumero / (alturaEmMetros * alturaEmMetros);
            const imcArredondado = resultadoImc.toFixed(1);
            setImc(imcArredondado);

            let classificacao = '';

            if (imcArredondado < 18.5) {
                classificacao = "Abaixo do peso";
            } else if (imcArredondado >= 18.5 && imcArredondado <= 24.9) {
                classificacao = "Peso normal";
            } else if (imcArredondado >= 25 && imcArredondado <= 29.9) {
                classificacao = "Sobrepeso";
            } else if (imcArredondado >= 30 && imcArredondado <= 34.9) {
                classificacao = "Obesidade Grau I";
            } else if (imcArredondado >= 35 && imcArredondado <= 39.9) {
                classificacao = "Obesidade Grau II (severa)";
            } else if (imcArredondado >= 40) {
                classificacao = "Obesidade Grau III (mórbida)";
            }

            setClassificacaoResultado(classificacao);
        } else {
            setImc(null);
            setClassificacaoResultado('');
        }
    }



    return (
        <div className="container">
            <header className={styles.header}>
                <h1>Cálculo IMC</h1>
            </header>
            <form onSubmit={calcularImc} className={styles.form}>
                <input type="number" placeholder="Digite sua altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
                <input type="number" placeholder="Digite seu peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
                <button type="submit">Calcular</button>
            </form>
            <section className={styles.section}>
                <div >
                    <h1>Resultado</h1>
                    {imc && (
                        <div className={styles.resultado}>
                            <p>Seu IMC é: <span>{imc} {`considerado ${classificacaoResultado}`}</span></p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Formulario;