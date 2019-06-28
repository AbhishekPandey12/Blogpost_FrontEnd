function signUp(signUpElem){
    signUpElem.style.display = "block";
}

function signIn(signInElem){
    signInElem.style.display = "block";
}

function openSignUpModal(ele){
    closeModal(ele);
    document.getElementById('signUpModal').style.display = "block";
}

function closeModal(elem){
    elem.style.display = "none";
}

function openCreatePostModal(createPostElem){
    createPostElem.style.display = "block";
}