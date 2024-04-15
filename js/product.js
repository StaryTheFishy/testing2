console.log("hello world!");

var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

console.log(id);

var client = contentful.createClient({
    space: 'f7mp64jz9fcp',
    accessToken: 'UWiDchefAhl13tJ2Vh9UkgZeKVZaMmHgap4vtd6bp7U',
});

var content = document.getElementById('products');
  client.getEntry(id).then(function (entry) {
    console.log(entry.fields.mainImage.fields.file.url)

    console.log(entry);
    var sideImages = document.createElement('div');
    sideImages.classList.add('side-images');
    entry.fields.sideImages.forEach(function(image){
        var img = document.createElement('img');
        img.src = image.fields.file.url;
        sideImages.appendChild(img);
    });
    content.appendChild(sideImages);

    var mainImage = document.createElement('img');
    mainImage.classList.add('product-main-image')
    if (entry.fields.mainImage){
        var hero = document.createElement('div');
        hero.style.backgroundImage = entry.fields.mainImage.fields.file.url;
        
        mainImage.src = entry.fields.mainImage.fields.file.url;
        content.append(mainImage);
    }

  });

  var content = document.getElementById('details');
  client.getEntry(id).then(function (entry) {
    console.log(entry.fields.mainImage.fields.file.url)

    var name = document.createElement('h3');
    name.innerHTML = entry.fields.name;
    name.classList.add('details-h3')
    content.appendChild(name);

    var price = document.createElement('p');
    price.innerHTML = entry.fields.price;
    content.appendChild(price);

    var color = document.createElement('p');
    color.innerHTML = entry.fields.color;
    content.appendChild(color);

    var description = document.createElement('p');
    description.innerHTML = entry.fields.description;
    description.classList.add('details-p')
    content.appendChild(description);

    var buttonText = document.createElement('button');
    buttonText.innerHTML = entry.fields.buttonText;
    content.append(buttonText);

    var sizeFit = document.createElement('p');
    sizeFit.innerHTML = entry.fields.sizeFit;
    content.append(sizeFit);

    var fabricCare = document.createElement('p');
    fabricCare.innerHTML = entry.fields.fabricCare;
    content.append(fabricCare);

    var linkToDetails = document.createElement('a');
    linkToDetails.href = 'checkout.html?id=' + entry.sys.id;
    linkToDetails.appendChild(buttonText);
    
    content.appendChild(name);
    content.appendChild(price);
    content.appendChild(color);
    content.appendChild(description);
    content.appendChild(sizeFit);
    content.appendChild(fabricCare);
    content.appendChild(linkToDetails);
    content.appendChild(content);


    document.getElementById("menu-toggle").addEventListener("click", function(){
        document.getElementById("menu").classList.toggle("active");
    });


    document.getElementById("menu-item").addEventListener("click", function(){
        document.getElementById("dropdown").classList.toggle("active");
    });
    

    });