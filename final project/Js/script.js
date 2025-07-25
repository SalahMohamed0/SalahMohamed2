
  const counters = document.querySelectorAll('.counter');
  const speed = 100;

  const startCounter = (counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        startCounter(counter);
        observer.unobserve(counter); // stop observing after running
      }
    });
  }, { threshold: 0.6 }); // visible 60% at least

  counters.forEach(counter => {
    observer.observe(counter);
  });



if (document.querySelector('.owl-carousel')) {
    $(document).ready(function () {
        // document.querySelector('.owl-carousel')
        $(".owl-carousel").owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                }
            },
            navText: ['<i class="fa-solid fa-arrow-left text-primary"></i>', '<i class="fa-solid fa-arrow-right"></i>']
        });
    });
}

let myForm = document.getElementById('myForm')

let handleError = (element, msg = "") => {
    element.nextElementSibling.innerText = msg
}

let nameValidation = (element) => {
    let inputValue = element.value.trim()
    if (inputValue.length < 3) handleError(element, "enter at least 3 character")
    else handleError(element)

}

let emailValidation = (element) => {
    // nouran_ahmed269@hotmail.com
    // $%*_-&! ==> special characters
    // console.log(element.value)
    // let regExp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    // let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

    // https://www.mailercheck.com/articles/email-validation-javascript
    let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    console.log(regExp.test(element.value));
        (!regExp.test(element.value)) ?
        handleError(element, "please enter a valid email")
        : handleError(element)
}

let passwordValidation =(element)=>{
    // let d = new Date()
    // var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    // https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    console.log(strongRegex.test(element.value));
    (!strongRegex.test(element.value))?
     handleError(element , 'please enter at least 1 lowercase letter , 1 uppercase letter .......')
    : handleError(element)
}



myForm.addEventListener('input', function (e) {
    // console.log(e)
    // console.log(e.target.id)
    if (e.target.id == "userName") {
        // console.log(e.target.value.length)
        nameValidation(e.target)
    }
    else if (e.target.id == 'userEmail') {
        emailValidation(e.target)
    }
    else if (e.target.id == 'userPassword') {
        passwordValidation(e.target)
    }
})

