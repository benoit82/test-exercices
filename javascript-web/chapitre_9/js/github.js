var form = document.querySelector('form');
var infosDiv = document.getElementById('infos');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var profil = document.getElementById('profil').value;
    ajaxGet('https://api.github.com/users/' + profil, function (reponse) {
        infosDiv.innerHTML = '';
        var infosProfil = JSON.parse(reponse);
        var avatarElt = document.createElement('img');
        avatarElt.setAttribute("src", infosProfil.avatar_url);
        avatarElt.setAttribute("alt", "avatar");
        infosDiv.appendChild(avatarElt);

        var pElt = document.createElement('p');
        var linkElt = document.createElement('a');
        linkElt.href = infosProfil.html_url;
        var strongElt = document.createElement('strong');
        strongElt.textContent = infosProfil.login;
        linkElt.appendChild(strongElt);
        pElt.appendChild(linkElt);
        if (infosProfil.location != null) {
            pElt.innerHTML += ', se situe à <span>' + infosProfil.location + '</span>';
        }
        infosDiv.appendChild(pElt);
    });
});
