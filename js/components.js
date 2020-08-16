// de luu cac trang thai nguoi dung

const components = {}
components.welcomeScreen = `
<h1>Welcome to Chat App of Nho</h1>
` 
components.loginScreen = ``
components.registerScreen = `
<div class="register-container">
        <div class="aside-right">
            <h3 class="header">LET CHAT'S NHO</h3>
            <form id="register-form">
                <div class="input-name-wrapper">
                    <div class="input-wrapper">
                        <input type="name" placeholder="First Name" name="firstName">
                        <div class="error" id="first-name-error"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="name" placeholder="Last Name" name="lastName">
                        <div class="error" id="last-name-error"></div>
                    </div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Email" name="email">
                    <div class="error" id="email-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="Password" name="password">
                    <div class="error" id="password-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="Confirm Password" name="confirmPassword">
                    <div class="error" id="confirm-password-error"></div>
                </div>
                <div class="form-action">
                    <span id="redirect-to-login">Already have an account? Login</span>
                    <button type="submit" class="btn">
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
`