document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', document.getElementById('image').files[0]);
    formData.append('nama', document.getElementById('nama').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('link', document.getElementById('link').value);

    fetch('/add-product', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Produk berhasil ditambahkan!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Gagal menambahkan produk');
    });
});