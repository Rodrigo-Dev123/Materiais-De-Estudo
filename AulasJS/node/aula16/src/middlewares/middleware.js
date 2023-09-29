exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
    next();
}

exports.outroMiddlewar = (req, res, next) => {
    console.log('Outro middleware')
    next();
}