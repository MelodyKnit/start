const methods = {
    $c: e => document.createElement(e),
    $: e => document.querySelector(e),
    $a: e => document.querySelectorAll(e),
    create: function(ele, test, style, dad) {
        let e = this.$c(ele);
        switch (typeof test) {
            case 'string':
                e.innerText = test
                break;
            case 'object':
                if (test.nodeName) e.appendChild(test);
                else test.forEach(eve => {
                    e.appendChild(eve)
                });
                break;
        };
        if (style) style.forEach(type => {
            if (typeof type !== 'object') e[type] = style[1];
            else e[type[0]] = type[1];
        });
        if (dad)
            if (typeof dad === 'string') $(dad);
            else dad.appendChild(e);
        return e
    }
}