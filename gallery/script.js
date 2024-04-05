window.onload = function() {
    let selectImage = document.querySelector('.new_image');
    let inputFile = document.querySelector('#file');
    let galleryContainer= document.querySelector('.gallery-container');

    selectImage.addEventListener('click', function () {
        inputFile.click();
    });

    inputFile.addEventListener('change', function() {
        let url=URL.createObjectURL(this.files[0])
        if (this.files && this.files[0]) {
            let reader = new FileReader();
            
            reader.onload = function(e) {
                let newImageContainer = document.createElement('a');
                newImageContainer.setAttribute('href', url);
                newImageContainer.classList.add('gallery-itens');

                let newImage = document.createElement('img');
                newImage.setAttribute('src', e.target.result);
                newImage.setAttribute('alt', 'Preview');

            

                
                newImageContainer.appendChild(newImage);
                galleryContainer.appendChild(newImageContainer);
                newImageContainer.appendChild(newName);

            }

            reader.readAsDataURL(this.files[0]);
        }
    });
    function sendImageToServer(imageData) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'save_image.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('image=' + encodeURIComponent(imageData));
    }
};
        
