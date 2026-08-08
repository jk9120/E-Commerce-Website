

const icon = document.querySelector(".icon");
const navList = document.querySelector("nav ul");
const bar = document.getElementById("bar");

if (icon && navList && bar) {

    icon.addEventListener("click", () => {

        navList.classList.toggle("showData");

        if (navList.classList.contains("showData")) {
            bar.className = "fa-solid fa-xmark";
        } else {
            bar.className = "fa-solid fa-bars";
        }

    });
}




const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        
        if (window.innerWidth <= 600) {

            navList.classList.remove("showData");

            bar.className = "fa-solid fa-bars";
        }

    });

});


const cards = document.querySelectorAll(".crd");
const itemPage = document.querySelector(".itemPage");
const container = document.querySelector(".container");
const itemImg = document.getElementById("itemImg");
const buyBtn = document.getElementById("buyBtn");

const buyPage = document.querySelector(".buyPage");
const buyText = document.querySelector(".buyText");
const cross = document.querySelector(".cross");



cards.forEach((card) => {

    card.addEventListener("click", () => {

        const image = card.querySelector("img");

        if (!image) return;

        if (itemPage) {
            itemPage.style.display = "flex";
        }

        if (container) {
            container.style.display = "none";
        }

        if (itemImg) {
            itemImg.src = image.src;
            itemImg.alt = image.alt || "Product Image";
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});



if (buyBtn) {

    buyBtn.addEventListener("click", () => {

        if (!buyPage || !buyText) return;

        buyPage.style.display = "block";

        buyText.innerHTML = `
            <h3>Enter Details:</h3>

            <input
                type="text"
                placeholder="Enter Your Name"
                id="customerName"
            >

            <input
                type="text"
                placeholder="Enter Your Address"
                id="customerAddress"
            >

            <input
                type="tel"
                placeholder="Enter Your Mobile Number"
                id="customerNumber"
                maxlength="10"
            >

            <h3>Payment Option</h3>

            <select id="paymentOption">
                <option value="">Select Payment Method</option>
                <option value="Google-Pay">Google Pay</option>
                <option value="Phone-Pay">PhonePe</option>
                <option value="Bharat-Pay">Bharat Pay</option>
                <option value="Cash-On-Delivery">
                    Cash On Delivery
                </option>
            </select>

            <button id="submitOrder">
                Submit
            </button>
        `;

        const submitOrder =
            document.getElementById("submitOrder");

        submitOrder.addEventListener("click", () => {

            const name =
                document.getElementById("customerName");

            const address =
                document.getElementById("customerAddress");

            const number =
                document.getElementById("customerNumber");

            const payment =
                document.getElementById("paymentOption");



            if (
                name.value.trim() === "" ||
                address.value.trim() === "" ||
                number.value.trim() === "" ||
                payment.value === ""
            ) {

                alert("Please enter all details.");

                return;
            }



            if (!/^[0-9]{10}$/.test(number.value.trim())) {

                alert(
                    "Please enter a valid 10-digit mobile number."
                );

                return;
            }


    

            alert(
                "Your order response has been recorded successfully!"
            );

            buyPage.style.display = "none";

        });

    });

}

if (cross) {

    cross.addEventListener("click", () => {

        buyPage.style.display = "none";

    });

}



document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && buyPage) {

        buyPage.style.display = "none";

    }

});


function connect() {

    const names =
        document.getElementById("names");

    const number =
        document.getElementById("number");


    if (!names || !number) return;


    if (
        names.value.trim() === "" ||
        number.value.trim() === ""
    ) {

        alert("Please fill all details.");

        return;
    }


    if (!/^[0-9]{10}$/.test(number.value.trim())) {

        alert("Please enter a valid 10-digit number.");

        return;
    }


    alert("Thanks For Connecting!");

    names.value = "";
    number.value = "";
}



const backBtn = document.getElementById("backBtn");

if (backBtn) {
    backBtn.addEventListener("click", (event) => {
        event.preventDefault();

        itemPage.style.display = "none";
        container.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

