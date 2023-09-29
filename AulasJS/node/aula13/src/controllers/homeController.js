exports.paginaInicial = (req, res) => {
    console.log('Respondendo ao cliente.')
    res.render('index');
    return;
}

exports.trataPost = (req, res, next) => {
    res.send(req.body);
    return;
};