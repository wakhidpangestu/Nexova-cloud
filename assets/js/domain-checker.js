function check(){

    var inputVal = document.getElementById("domainName").value;



    if (inputVal.length === 0) {
        alert("Please Enter Domain Name")
    }
    else{


        buttonTxt = document.querySelector(".btn"),
        buttonTxt.innerText = "Searching...";

        var domain = inputVal;
        var apiKey = "at_njDbnsNevp26A3agRtcpYBwcaNyCr";
    
        $.ajax({
            url: "https://domain-availability.whoisxmlapi.com/api/v1",
            dataType: "json",
            data: {apiKey: apiKey, domainName: domain},
            success: function(data) {
                // $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
                // $(".wrapper").append("<pre>"+ "The Domain name " + data.DomainInfo.domainName + " is " + data.DomainInfo.domainAvailability +"</pre>");
    
                buttonTxt = document.querySelector(".btn"),
                buttonTxt.innerText = "Check Domain";

                $(".messagehere").append(`
                <section class="input-part">
                 <p class="info-txt pending">
                    The Domain name  ${data.DomainInfo.domainName} is  ${data.DomainInfo.domainAvailability}
                 </p>
                </section>
                `);

                // console.log("The Domain name " + data.DomainInfo.domainName + " is " + data.DomainInfo.domainAvailability);
    
            }
        });

        
    }


};


// API : https://whoisxmlapi.github.io/domain-availability.html