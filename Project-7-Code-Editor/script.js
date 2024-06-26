function executar() {
    // Obtém os elementos HTML, CSS, JS com seus repectivos valores e o elemento output
    const codigoHTML = document.querySelector("#codigo-html").value;
    const codigoCSS = document.querySelector("#codigo-css").value;
    const codigoJS = document.querySelector("#codigo-js").value;
    const output = document.querySelector("#output");

    // Constrói o conteúdo do iframe com HTML e CSS
    const conteudo = `
        ${codigoHTML}
        <style>${codigoCSS}</style>
    `;

    // Atualiza o conteúdo do iframe
    output.contentDocument.body.innerHTML = conteudo;
    output.contentWindow.eval(codigoJS);
}
