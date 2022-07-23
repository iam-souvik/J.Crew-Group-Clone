let signupPage = document.getElementById("container");
function createForm() {
  

   signupPage.innerHTML = `<div id="sign-up">
    <div><h3>Sign Up</h3> <button onclick="removeSignUpPage()">X</button></div>

    <div><input type="email" placeholder="Email Address*"></div>

    <div><input type="password" placeholder="Create Password*"></div>

    <select  id="country" placeholder="Country">

    <option value="India">India</option>
    <option value="Pakistan">Pakisthan</option>
    <option value="USA">USA</option>
    <option value="Germany">Germany</option>
    </select>


    

    <div><input type="checkbox" id="remember-me">

    <label for="remember-me">Remember me</label>

    <div><button id="btn-singup" onclick="storeData()">CREATE AN ACCOUNT</button></div>

    <p id="pera">By clicking "Create an Account", you agree to our Terms of Use and Privacy Policy, including the Use of Cookies and the transfer of your personal information to the United States, a jurisdiction that may not provide an equivalent level of data protection to the laws in your home country.</p>
    <hr>
    <div id="alredy-have-an-acc"><p>Already have an account?</p> <a href=${"#"}>Sign In</a></div>
    </div>
</div>`;
}
function removeSignUpPage() {
    signupPage.innerHTML =null;
}
