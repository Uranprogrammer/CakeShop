   window.onload = function () {
         window.addEventListener('scroll', function (e){
            if(window.pageYOffset > 100) {
               document.querySelector("header").classList.add('is-scrolling'); 
            } else{
               document.querySelector('header').classList.remove('is-scrolling');
            }
         });

         const menu_btn = document.querySelector('.hamburger');
         const mobile_menu = document.querySelector('.mobile-nav');

         menu_btn.addEventListener('click', function() {
            menu_btn.classList.toggle('is-active')
            mobile_menu.classList.toggle('is-active')
         }) 
      }


      const backToTopButton = document.querySelector("#btnScrollToTop");

      window.addEventListener("scroll", scrollFunction);

      function scrollFunction() {
         if(window.pageYOffset > 100) {
            if(!backToTopButton.classList.contains("btnEntrance")){
               backToTopButton.classList.remove("btnExit")
               backToTopButton.classList.add("btnEntrance");
               backToTopButton.style.display = "block";
            }
         }
         else{
            if(backToTopButton.classList.contains("btnEntrance")){
               backToTopButton.classList.remove("btnEntrance");
               backToTopButton.classList.add("btnExit");
               setTimeout(function() {
                  backToTopButton.style.display = "none"; 
               }, 250);
               
            }
            
         }
      }

      backToTopButton.addEventListener("click", backToTop);

      function backToTop(){
         window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
                     
         });
      }

      const first_card = document.querySelector(".card1");
      window.addEventListener("scroll", scrollFunction1);
      function scrollFunction1() {
         if(window.pageYOffset > 100) {
            first_card.classList.add('show');
            }  
            
         }

         const second_card = document.querySelector(".card2");
         window.addEventListener("scroll", scrollFunction2);
         function scrollFunction2() {
            if(window.pageYOffset > 100) {
               second_card.classList.add('show');
               }
               
            }
   
         const third_card = document.querySelector(".card3");
         window.addEventListener("scroll", scrollFunction3);
         function scrollFunction3() {
            if(window.pageYOffset > 100) {
               third_card.classList.add('show');
               }
               
            }

         const winkIcon = document.querySelector(".wink");
         window.addEventListener("scroll", scrollFunction4);
         function scrollFunction4() {
            if(window.pageYOffset > 600) {
               winkIcon.classList.add('show');
               }
               
            }

         const houseIcon = document.querySelector(".house");
         window.addEventListener("scroll", scrollFunction5);
         function scrollFunction5() {
            if(window.pageYOffset > 600) {
               houseIcon.classList.add('show');
               }
            }

         const carIcon = document.querySelector(".car");
         window.addEventListener("scroll", scrollFunction6);
         function scrollFunction6() {
            if(window.pageYOffset > 600) {
               carIcon.classList.add('show');
               }
               
            }

         
         
               
           