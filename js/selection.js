console.log("hello world!");
var client = contentful.createClient({
    space: 'f7mp64jz9fcp',
    accessToken: 'UWiDchefAhl13tJ2Vh9UkgZeKVZaMmHgap4vtd6bp7U',
});

var content = document.getElementById('products');

client.getEntries({content_type: 'products',}).then(function (entries) {
    entries.items.forEach(function (entry) {

        var contentDiv = document.createElement('div');
        var name = document.createElement('h3');
        name.innerHTML = entry.fields.name;
        contentDiv.append(name);
        content.append(contentDiv);

        var price = document.createElement('p');
        price.innerHTML = entry.fields.price;
        contentDiv.append(price);

        console.log(entry.fields.mainImage.fields.file.url)
        var mainImage = document.createElement('img');
        mainImage.classList.add('main-image')
        if (entry.fields.mainImage){
            var hero = document.createElement('div');
            hero.style.backgroundImage = entry.fields.mainImage.fields.file.url;
            mainImage.src = entry.fields.mainImage.fields.file.url;
            contentDiv.append(mainImage);
        }

        var linkToDetails = document.createElement('a');
        linkToDetails.href = 'product.html?id=' + entry.sys.id;
        linkToDetails.appendChild(mainImage);
        
        contentDiv.appendChild(linkToDetails);
        contentDiv.appendChild(name);
        contentDiv.appendChild(price);
        content.appendChild(contentDiv);

    });

    document.getElementById("menu-toggle").addEventListener("click", function(){
        document.getElementById("menu").classList.toggle("active");
    });

    document.getElementById("menu-item").addEventListener("click", function(){
        document.getElementById("dropdown").classList.toggle("active");
    });
    
});