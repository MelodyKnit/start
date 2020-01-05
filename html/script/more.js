(e => {
    animes.forEach(ele => {
        methods.create('a', methods.create('li', [methods.create('div', [methods.create('img', false, ['src', ele.img])]), methods.create('p', ele.p)]), [
            ['href', ele.https],
            ['target', '_blank']
        ], e)
    })
})(methods.$('.more ul'))