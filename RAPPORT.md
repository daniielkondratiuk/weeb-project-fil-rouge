# Rapport technique — Weeb

Ce rapport explique les choix faits pendant la première semaine du projet : la partie vitrine du
site de Weeb, et les premières pages du blog.

## L'architecture des dossiers

    src/
      api/          d'où viennent les données (fetch, localStorage)
      components/
        blog/       carte d'article, articles liés
        contact/    formulaire de la page Contact
        home/       les sections de l'accueil
        layout/     Header, Footer, RootLayout
        login/      formulaire de connexion
        ui/         les briques partagées
        Logo/       le logo du site
      data/         les articles écrits en dur
      hooks/        useArticles
      pages/        une page par route
      router/       les routes
      styles/       les styles globaux

L'idée tient en une phrase : les pages assemblent, les composants affichent. Une page ne fait
presque rien d'autre que poser des sections les unes sous les autres, tout le détail de la mise en
page vit dans les composants.

Chaque composant a son fichier CSS juste à côté de son fichier .jsx. C'est plus simple à retrouver,
et ça évite le fichier de styles global qui gonfle à chaque nouvelle section.

Dans components/, seul le dossier ui/ contient des briques vraiment partagées : le bouton, les
champs de formulaire, le bouton de retour en haut. Les autres dossiers portent le nom d'une page.
J'ai préféré ranger par page plutôt que d'inventer des catégories dont je n'ai pas encore besoin.

## Les bibliothèques

Quatre dépendances, pas plus.

react et react-dom pour l'application elle-même.

react-router-dom pour la navigation, et pour deux choses bien pratiques : useParams, qui lit
l'identifiant d'un article dans l'URL, et useSearchParams, qui garde les filtres du blog dans
l'adresse de la page.

lucide-react pour les quelques icônes : les flèches du slider et le bouton de retour en haut.

vite pour lancer le projet et le construire.

Je n'ai pris ni bibliothèque de composants, ni framework CSS. La maquette a un style très marqué :
l'écrire directement en CSS demande moins de travail que de repeindre un thème existant. Les
classes suivent la convention BEM, ce qui suffit à éviter les collisions sans passer par des CSS
modules.

## Comment l'application fonctionne

main.jsx monte App, App rend le routeur. Toutes les routes passent par RootLayout, qui pose le
header, la page en cours, le footer et le bouton de retour en haut.

Il y a sept routes : l'accueil, la liste du blog, le formulaire de création, la page d'un article,
Contact, Login, et une page 404 pour tout le reste.

Les articles viennent de trois endroits, que le hook useArticles réunit en une seule liste : ceux
écrits depuis le formulaire et gardés dans le localStorage du navigateur, ceux écrits en dur dans
data/articles.js, et ceux de l'API publique jsonplaceholder, que l'énoncé autorise en attendant une
vraie base. L'accueil, lui, ne fait aucun appel réseau : son slider lit seulement les articles en
dur. Et si l'API tombe, le blog affiche un message mais continue de montrer le reste.

Les trois formulaires sont bâtis pareil : on bloque l'envoi par défaut, on vérifie que les champs
obligatoires ne sont pas vides une fois les espaces retirés, on affiche un message en cas d'oubli,
et on vide les champs quand tout est bon. Rien n'est envoyé nulle part, il n'y a pas encore de
serveur.

L'état reste dans les composants, avec useState. Pas besoin d'un gestionnaire d'état global : rien
ne circule entre deux endroits éloignés de l'application. Seuls les filtres du blog sortent du
composant, et ils partent dans l'URL. Comme ça un lien filtré se partage, et on retrouve sa
recherche en revenant d'un article.

## Ce qui s'écarte de la maquette

La maquette ne donne la page Login qu'en version mobile. Pour le desktop, j'ai repris le panneau du
formulaire de Contact, histoire que les deux pages se ressemblent.

Sur le formulaire de Contact, il y a un rectangle sans libellé, coupé en deux. Je l'ai lu comme un
champ téléphone en deux parties, l'indicatif et le numéro. Ça remplit aussi la demande d'un autre
type d'input.

Les logos partenaires sont figés sur la maquette ; chez moi ils défilent en continu.

## Ce que j'ai ajouté

La bande défilante des logos, un slider des articles à la une, le champ téléphone en deux parties,
un bloc d'inscription à la newsletter, un bouton de retour en haut de page et une page 404.

Le bloc newsletter n'est pas venu de nulle part : le bouton « S'abonner à la newsletter » existait
déjà dans la maquette, mais il ne menait nulle part. Maintenant il mène quelque part.

## Le responsive et l'accessibilité

Trois tailles : desktop au-delà de 1100 px, tablette entre 1100 et 700 px, mobile en dessous. Sur
petit écran le menu passe derrière un bouton hamburger, et il se referme tout seul dès qu'on change
de page.

Côté accessibilité : chaque champ a son label ou son aria-label, les boutons qui ne contiennent
qu'une icône sont nommés, les états actifs utilisent aria-pressed et aria-expanded, le focus au
clavier reste visible partout, et les animations s'arrêtent si le système demande à les réduire.

## Prendre le code en main

    npm install
    npm run dev

Pour s'y retrouver ensuite : une page se modifie dans src/pages, dans son .jsx et son .css. Les
sections de l'accueil sont dans src/components/home. Une route s'ajoute dans src/router/index.jsx.
Les couleurs et la largeur du contenu se règlent dans src/styles/globals.css. Et la provenance des
articles se change dans src/api/articles.js pour l'API, ou dans src/data/articles.js pour les
articles en dur.
