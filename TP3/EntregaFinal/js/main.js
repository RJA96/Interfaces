document.querySelector("#hovrandom").addEventListener("click", function () {
    let random = Math.floor(Math.random() * (4));
    switch (random) {
        case 0:
            document.querySelector("#hovrandom").className = '';
            document.querySelector("#hovrandom").classList.add("hov4")
            break;
        case 1:
                document.querySelector("#hovrandom").className = '';
            document.querySelector("#hovrandom").classList.add("hov1")
            break;
        case 2:
                document.querySelector("#hovrandom").className = '';
            document.querySelector("#hovrandom").classList.add("hov2")
            break;
        case 3:
                document.querySelector("#hovrandom").className = '';
            document.querySelector("#hovrandom").classList.add("hov3")
            break;

    }
});

