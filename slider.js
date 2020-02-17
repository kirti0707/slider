

var slides = [	   {"link":"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M30s/ICICI/M30s_Tall_hero_1500x600._CB422777870_.jpg"},

	               { "link":"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/Feb/Headsets/pTron/AvailableNow/Revision/P32618035_IN_WLA_Headsets_PTron_BassBuds_Pro_DesktopHero_3000x1200_2._CB422976601_.jpg"},

	               { "link":"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_8A_Dual/Launch/GW/Updated/English/New/Blue_ASIN/V176845577_IN_WLME_Redmi_8A_Dual_LandingPage_3000x1200._CB422628732_.jpg"},

	               { "link":"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Luggage/Feb/GW-12Feb/PC_bunk_feb_1._CB422684012_.jpg"}
	         ]

var c = 0 ;
console.log(slides[c].link);
//document.getElementById('img').src = slides[0].link1;
 document.getElementById('output').src = slides[c].link;
//var out =slides[0].link1;

function First_image(){ 
         
               document.getElementById("output").src = slides[0].link;
         }
         First_image();

function prev(){ 
              c--;
              if(c < 0){
              c = slides.length;
          }

 

              document.getElementById("output").src = slides[c].link;
              
                   }
          
          function next(){
              c++;
              if(c >= slides.length){
              c=0;
          }
              document.getElementById("output").src = slides[c].link;
            }