// const productContainers = [...document.querySelectorAll('.product-container')];
// const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
// const preBtn = [...document.querySelectorAll('.pre-btn')];

// productContainers.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nxtBtn[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth;
//     })

//     preBtn[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth;
//     })
// })

function openPage(pageUrl){
    setTimeout(2000);
    window.open(pageUrl);
  }

axios.get('https://skitter-adaptable-shallot.glitch.me/receive-data')
.then(response => {
  const data = response.data;
  // Process the retrieved data
  var receivedData = data;
  console.log(data);
  var companiesArray = data["company_name_list"];
  var jobArray = data["company_posting_array"];
  console.log(companiesArray);
  console.log(jobArray);
  let dictionary = {};

    for (let charCode = 97; charCode <= 122; charCode++) {
    let key = String.fromCharCode(charCode);
    dictionary[key] = []; // Initialize the value as an empty array
    }
    for (let i=0;i<companiesArray.length;i++){
        var company = companiesArray[i];
        let firstLetter = company.charAt(0).toLowerCase();
        dictionary[firstLetter].push(company);
    }

    console.log(dictionary);
    
    var overall = "";
    for (let charCode = 97; charCode <= 122; charCode++) {
        let key = String.fromCharCode(charCode);
        var htm = "";
        if (dictionary[key].length!=0){
            for (let i=0;i<dictionary[key].length;i++){
                var comp = dictionary[key][i];
                htm = htm+`<div class="card">
                                <a href='http://127.0.0.1:5500/Jobs_Website/index2.html?q=${comp}'>   
                                    <span class="inside-text">${comp}</span>                             
                                </a>
                                
                            </div>`
                let url = `http://127.0.0.1:5500/Jobs_Website/index2.html?q=${comp}`;
                const urlParams = new URL(url).searchParams;
                const product = urlParams.get('q');
            }
            
            var letter = `<br>
            <div class="a">
            <div id="a">   
                <h2 class="cmpny-alpha"> ${key.toUpperCase()} </h2>  
            </div>
            <section class="product a"> 
                <div class="product-container">`+htm+`</div>
                </section>
        
                <br>
                </div>`;
            overall = overall+letter;
        }
        
        

    }
    $(".xyz").html(overall);
})
.catch(error => {
  // Handle any errors that occurred during the request
  console.error('Error:', error);
});





// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://skitter-adaptable-shallot.glitch.me/', true);
// xhr.responseType = 'json';

// xhr.onload = function () {
//   if (xhr.status === 200) {
//     const data = xhr.response;
//     // Process the retrieved data
//     console.log(data);
//   } else {
//     // Handle request errors
//     console.error('Request failed with status:', xhr.status);
//   }
// };

// xhr.onerror = function () {
//   // Handle network errors
//   console.error('Network error occurred');
// };

// xhr.send();
