# Exercice Gestionnaire d'annonces en POO JS

Il s'agit d'un exercice produit dans le cadre de mon poste de formateur en développement web. Cet exercice fait office de projet hebdomadaire afin de s'assurer que les étudiants maîtrisent la programmation orientée objet en JavaScript. Il met l'accent sur la manipulation du DOM, la création de nodes et la récupération de données de formulaire.

Une version de l'exercice est disponible à :

Au travers de cet exercice, ils apprennent à :
- déclarer des attributs
- déclarer des méthodes
- utiliser le constructeur d'objet
- automatiser la gestion du DOM via des objets
- Créer des nodes manuellement
- organiser leur code de manière logique
- atomiser les méthodes


## Consignes

Dans ce projet, nous allons créer un espace d'administration en JavaScript, le principe est simple, vous allez créer une page HTML avec un formulaire de fiche produit. Ce formulaire contiendra 3 inputs (titre, phrase d'accroche et description du produit).

Quand vous cliquez sur le bouton envoyer, votre programme JavaScript récupère les valeurs rentrées dans le formulaire, crée une fiche produit sous la forme d'une carte et l'ajoute sur la page. Une fois la carte ajoutée, les inputs du formulaire sont vidés. On peut alors ajouter une nouvelle fiche.

Pour vous aider dans la réalisation de cette application, sachez que vous aurez besoin de :

- Un objet pour créer vos produits. Nous allons créer un nombre inconnu de produits, il faut donc pouvoir instancier des objets à la demande.

- Un objet pour gérer votre formulaire (récupérer les données des inputs, créer un produit et l'insérer dans le DOM). En effet, un produit est un produit, il ne fait rien d'autre que d'exister, ne mélangez pas les rôles de vos objets, la gestion du DOM est l'affaire d'un objet dédidé.

Essayez au maximum de vous entraînez à la création de nodes et à leur manipulation. Autrement-dit, essayez d'utiliser innerHTML le moins possible. 

Un conseil, prenez le temps de bien penser l'organisation de votre programme et les relations entre les différents objets. N'hésitez pas à faire un plan sur papier avant ;-)
