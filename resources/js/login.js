var vm = new Vue({
    el: '#loginPage',
    data: {
        email: '',
        password: '',
        loginMessage: 'Login',
        type: "password",
        eye: "mdi:eye-off",
    },
    methods: {

        showPassword() {
            if (this.eye == "mdi:eye-off") {
                this.eye = "bi:eye-fill";
                this.type = "text";
            } else {
                this.eye = "mdi:eye-off";
                this.type = "password";
            }
        },

        login() {

            // Show loader
            document.querySelector('.loader').style.display = 'block';
            document.querySelector('.login').style.backgroundColor = '#828493';
            this.loginMessage = 'Wait...';

            if (this.email == 'stargraphix2010@gmail.com' && this.password == 'Star@123') {
                setTimeout(() => {
                    // Hide loader
                    document.querySelector('.loader').style.display = 'none';
                    document.querySelector('.login').style.backgroundColor = '#d82240';
                    this.loginMessage = 'Login';
                    window.location = 'invoice.html';
                }, 2000);
            }

            else {
                setTimeout(() => {
                    // Hide loader
                    document.querySelector('.loader').style.display = 'none';
                    document.querySelector('.login').style.backgroundColor = '#d82240';
                    this.loginMessage = 'Login';
                    const notyf = new Notyf({
                        position: {
                            x: 'right',
                            y: 'bottom',
                        },
                    });

                    notyf.error('Login Failed');
                }, 2000);
            }
        }
    },
});