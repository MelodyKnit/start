(e => {
    let search = new Object();
    for (let i in e.children) search[e.children[i].className] = e.children[i];
    search.https = animes[0].https;
    search.open = function(e) { if (e === 'Enter' && this.txt.value !== '') window.open(this.https + this.txt.value); };
    search.sub.addEventListener('click', () => search.open('Enter'));
    window.onkeydown = e => search.open(e.key || e.code);
    methods.create('ul', (() => {
        let myArray = new Array()
        animes.forEach(e => {
            myArray.push(methods.create('li', methods.create('img', false, ['src', e.img]), ['onclick', function() {
                search.https = e.https;
                myArray.forEach(e => { e.className = '' });
                this.className = 'top';
                for (let i = 0; i < 2; i++)
                    if (myArray[i].className !== 'top') { myArray[i].className = 'reTop'; return }
            }]));
        });
        return myArray;
    })(), [
        ['className', 'search_switch'],
        ['title', '切换搜索']
    ], search.switch_over)
})(methods.$('.search'));