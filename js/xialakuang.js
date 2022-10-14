//hyw写的⬇
let res 

// 回调执行函数
 function fkujson(resa) {
    res = JSON.stringify(resa)
    res = JSON.parse(res).g
 }
((d) => {
    let ipt = d.getElementById('input_search')
    ipt.oninput = function () {
        let timer;
          let context = this; 
          let args = arguments; 
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            let key = this.value,
            url = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=26350&wd=${key}&req=2&csor=1&pwd=a&callback=fkujson`,
            tag = d.getElementsByClassName('xlk')[0],
            html = ''

            // url = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=26350&wd=${key}&req=2&csor=1&pwd=a&callback=fkujson`,
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            document.head.appendChild(script);

        if(key){
            res.map(item=>{
                html+=`<div>${item.q}</div>`
            })
            tag.innerHTML = html
        }else{
            tag.innerHTML = ''
        }
        
    }, 500)
        
    }
})(document)
//hywend
