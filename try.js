const urlParams = new URLSearchParams(window.location.search);
var param = urlParams.get('q');
console.log(param);
document.title = param;
axios.get('https://skitter-adaptable-shallot.glitch.me/receive-data')
.then(response => {
  const data = response.data;
  var receivedData = data;
  var companiesArray = data["company_name_list"];
  var jobArray = data["company_posting_array"];
  console.log(companiesArray);
  console.log(jobArray);

      var htm = "";
      var j = companiesArray.indexOf(param);
      for(let i =0; i< jobArray[j].length; i++){
        htm = htm + `<div class="feuille" style="display: flex;align-items: center;justify-content: space-evenly;z-index:0">
                        <div style="display: flex;align-items: center;justify-content: space-between;width: 90%;margin-top: 10px;">  
                            <p style="max-width:40%;font-size:13px;padding-top:3px">${jobArray[j][i].job_title}</p>
                            <p style="max-width:40%;font-size:13px;padding-top:3px">${jobArray[j][i].job_location}</p>
                            <div style="z-index:1000">
                              <a href='${jobArray[j][i].job_link}' onclick="window.open(this.href,'_blank');return false;" style="text-decoration: none;color: white">
                                <span style="background-color: black;color: white;padding: 10px;border-radius: 20px;">Apply</span>
                              </a>
                            </div>
                        </div>
                    </div> `
            }
    
    $(".scroll").html(htm);

})
.catch(error => {
  console.error('Error:', error);
});