// Referência ao Firebase Authentication
const auth = firebase.auth();

// Cadastro de usuário
function cadastrar() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            window.location.href = "index.html"; // Redireciona após o cadastro
        })
        .catch(error => alert(error.message));
}

// Login de usuário
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("Login realizado com sucesso!");
            window.location.href = "index.html"; // Redireciona após login
        })
        .catch(error => alert(error.message));
}

// Logout de usuário
function logout() {
    auth.signOut().then(() => {
        alert("Logout realizado com sucesso!");
        window.location.href = "login.html"; // Redireciona para login
    });
}

// Verificação de usuário autenticado
auth.onAuthStateChanged(user => {
    if (!user && window.location.pathname !== "/login.html" && window.location.pathname !== "/cadastro.html") {
        window.location.href = "login.html"; // Redireciona se não estiver logado
    }
});
