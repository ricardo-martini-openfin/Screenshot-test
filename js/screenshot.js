document.addEventListener("DOMContentLoaded", () => {
    const shot = async () => {
        let elem = document.getElementById('test');
        
        
        let { x, y, width: w, height: h } = elem.getBoundingClientRect();

        // let { x, y, w, h} = {
        
        //     x: 0, y: 0, w: 100, h: 100
        
        // }
        
        console.log(x, y, w, h, elem);
        
        
        view = fin.View.getCurrentSync();
        
        
        img = await view.capturePage({
        
        //   area: { x: x, y: y, width: 100, height: 100 },
          area: { x: 5, y: 15, width: 150, height: 60 },
          format: `jpg`
        
        });
        console.log(img)
        
        
        let win = window.open('about:blank');
        
        let image = new Image();
        
        image.src = `data:image/png;base64,${img}`;
        
        setTimeout(function(){
        
            win.document.write(image.outerHTML);
        
        }, 0);
    
}
document.getElementById("shot").addEventListener("click", shot)})






