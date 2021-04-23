const $template = document.createElement('template');
$template.innerHTML = `
<div class="container">
<form class="sign-in">
    <h1 class="title">Sign In</h1>
    <input-dn class="email" placeholder="Your email" type="email"></input-dn>
    <input-dn class="password" placeholder="Your password" type="password"></input-dn>
    <button class="signIn-btn">Đăng nhập</button>
</form>
</div>

`;

export default class Signin extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$container = this.querySelector(".container");
        this.$email = this.querySelector(".email");
        this.$password = this.querySelector(".password");
    }

   connectedCallback() {
        this.$container.onsubmit = (event) => {
            event.preventDefault();
            

            let isPassed = this.$email.validate((value) => {
                return value != '';
            }, "Invalid Email") & 
            this.$password.validate((value) => {
                return value != '';
            }, "Invalid Password");


            let data = {
                email: this.$email.value,
                password: this.$password.value
            };
            if(isPassed==true) {
                console.log("ok đã lấy được dữ liệu");
            }
        }
    }
}


window.customElements.define("sign-in", Signin);