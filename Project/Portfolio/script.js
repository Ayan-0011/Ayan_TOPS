 // <!--hide/show navbar -->
        var navlink = document.getElementById("navlink");
        function showmenu() {
            navlink.style.display = "block";
        }
        function hidemenu() {
            navlink.style.display = "none";
        }

 // <!--hide/show navbar in responsive  -->
        function hd() {
            const bodyWidth = document.body.clientWidth;

            if (bodyWidth < 800) {
                 navlink.style.display = "none";
              
            } else {
                navlink.style.display = "block";
            }
        }

//<!-- Setup and start animation! -->
        var typed = new Typed('#element', {
            strings: ['Frontend Devloper', 'Web Design', 'Web Devloper'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true

        });

        AOS.init({
            duration: 1000, // animation duration (ms)
            once: false,      // animation runs only once
            easing: 'ease-in-out',
            mirror: false,
        });


        const topBtn = document.getElementById("topBtn");

        // Show button when user scrolls 100px down
        window.onscroll = function () {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 100) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        };

        // When clicked, scroll to top smoothly
        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        VANTA.RINGS({
            el: "#vanta-bg",   // jaha apply karna hai
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            scale: 1.00,
            scaleMobile: 2.00
        })
   