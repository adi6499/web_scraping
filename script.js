   let full_data = []
        fetch('products_split.json') // Replace 'data.json' with your file path or URL
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); // Parse the JSON data
            })
            .then(data => {
                fullData = data
                get_data(fullData)
            })
            .catch(error => {
                console.error('Error fetching the JSON file:', error);
            });

        let i = 6
        const selectedOption = document.querySelector('.selection');
        const next = document.querySelector('.next');
        const previous = document.querySelector('.previous');
      
        let show = document.querySelector(".show")

        function get_data(data) {
            for (let i = 0; i < data.length; i++) {
                show.innerHTML += `
                <div class="card">
                <img src=${data[i].image} alt="">
                <div class="head">${data[i].head}</div>
                <div class="price">${data[i].price}</div>
                <div class="info">${data[i].info}</div>
                </div>
                `
            }
        }
