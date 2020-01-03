class getText {
    constructor() {
        this.$ = e => document.querySelector(e);
        this.$c = e => document.createElement(e);
        this.$a = e => document.querySelectorAll(e);
        this.txt = this.$('.txt');
        this.text = this.$('.text');
        this.types = this.$a('.types');
        this.txt.oninput = e => this.oninput();
        this.types.forEach(e => { e.oninput = e => this.table(); })
        this.table()
    }
    table() { this.values = window[this.types[0].value][this.types[1].value]; }
    puth(i) {
        switch (i) {
            case 'top':
                return '题目'
            case 'answer':
                return '答案'
            case 'option':
                return '选项'
        }
    }
    oninput(e) {
        let value = this.txt.value;
        if (value) {
            this.text.innerHTML = '';
            this.values.forEach(e => {
                if (RegExp(value).test(e.top)) {
                    let ul = this.$c('ul');
                    let txt = e.top;
                    console.log()
                    for (let i in e) {
                        let li = this.$c('li');
                        let p = this.$c('p');
                        p.innerHTML = typeof e[i] == 'object' ? e[i].join('<br>') : i == 'top' ? txt.replace(RegExp(value), '<font color="red">' + value + '</font>') : e[i];
                        li.innerHTML += this.puth(i) + '：';
                        li.appendChild(p);
                        ul.appendChild(li);
                    }
                    this.text.appendChild(ul);
                }
            })
        }
    }
}