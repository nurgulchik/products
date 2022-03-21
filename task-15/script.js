function products() {
    fetch("products.json")
        .then((res) => {
            return res.json();
        }).then((product) => {
            product.forEach(element => {
                const productsInner = document.querySelector(".products__inner");
                const info = document.createElement("div");
                const divImg = document.createElement("div");
                const photo = document.createElement("img");
                const descr = document.createElement("div");
                const h2 = document.createElement("h2");
                const h3 = document.createElement("h3");
                const text = document.createElement("div");
                const p = document.createElement("p");

                productsInner.style.display = "flex";
                productsInner.style.flexWrap = "wrap";
                productsInner.appendChild(info);

                info.className = ("container");
                info.style.width = "350px";
                info.style.display = "flex";
                info.style.flexDirection = "column";
                info.style.backgroundColor = "fff";
                info.style.border = "3px solid #1845a2";
                info.style.margin = "50px auto";
                info.style.backgroundColor = "white";
                info.style.textAlign = "center";
                info.style.borderRadius = "15px";
                info.style.padding = "1em";
                info.style.boxShadow = "5px 5px 15px 5px #000000";

                info.appendChild(divImg);

                photo.style.width = "200px";
                photo.style.height = "250px";
                photo.style.objectFit = "contain";
                divImg.appendChild(photo);

                descr.className = ("div-1");
                descr.style.height = "60px";
                descr.style.display = "flex";
                descr.style.borderBottom = "3px solid rgb(0, 0, 0)";
                descr.style.justifyContent = "space-between";
               descr.style.alignItems = "center";
                divImg.appendChild(descr);

                h2.style.fontSize = "15px";
                h2.style.textAlign = "left"
                descr.appendChild(h2);

                h3.style.fontSize = "15px";
                descr.appendChild(h3);
                info.appendChild(text);
                text.appendChild(p);

                photo.src = element.img;
                h2.textContent = element.title;
                h3.textContent = element.price;
                p.textContent = element.desc;
                
            });
        })
}
products()