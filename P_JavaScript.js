  document.getElementById("cadastroForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let nome = document.getElementById("nome").value.trim();
        let email = document.getElementById("email").value.trim();
        let senha = document.getElementById("senha").value;
        let confirmaSenha = document.getElementById("confirmaSenha").value;
        let dataNascimento = document.getElementById("dataNascimento").value;

        if (nome === "" || email === "" || senha === "" || confirmaSenha === "" || dataNascimento === "") {
            alert("Todos os campos devem ser preenchidos!");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        if (senha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        let regexCaracteresEspeciais = /[!@#$%^&*(),.?":{}|<>]/;
        if (!regexCaracteresEspeciais.test(senha)) {
            alert("A senha deve conter pelo menos um caractere especial (!@#$%^&* etc.).");
            return;
        }

        if (senha !== confirmaSenha) {
            alert("As senhas não coincidem.");
            return;
        }
        alert("Cadastro realizado com sucesso!");
        window.location.href = "P_Login.html";
    });


    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let email = document.getElementById("email").value.trim();
        let senha = document.getElementById("senha").value;

        if (!email.includes("@") || !email.includes(".")) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        if (senha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        let regexCaracteresEspeciais = /[!@#$%^&*(),.?":{}|<>]/;
        if (!regexCaracteresEspeciais.test(senha)) {
            alert("A senha deve conter pelo menos um caractere especial.");
            return;
        }

        alert("Login realizado com sucesso!");
        window.location.href = "P_main.html";

    });