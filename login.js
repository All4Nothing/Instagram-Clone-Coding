const loginButton = document.querySelector(".loginBtn");

loginButton.addEventListener("click", function () {
    const loginId = document.querySelector(".id").value;
    const loginPassword = document.querySelector(".password").value;

    loginId && loginPassword ? (document.querySelector(".loginBtn").style.backgroundColor = "#0095F6") : 0;
});