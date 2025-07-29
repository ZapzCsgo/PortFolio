# Webserv - Serveur HTTP en C++

*Implémentation d'un serveur HTTP compatible avec nginx*

---

## Introduction

Webserv est l'un des projets les plus complexes du tronc commun de 42. L'objectif est de créer un serveur HTTP en C++98 qui doit être compatible avec nginx pour la configuration et capable de gérer les requêtes HTTP basiques.

## Objectifs du projet

- ⚙️ **Serveur HTTP complet** : Implémentation d'un serveur capable de traiter les requêtes GET, POST et DELETE
- 🔧 **Configuration nginx** : Fichier de configuration compatible avec la syntaxe nginx
- 🌐 **CGI Support** : Exécution de scripts CGI (Python, PHP, etc.)
- 📁 **Gestion des fichiers** : Upload, download et gestion des fichiers statiques
- 🔒 **Sécurité** : Gestion des erreurs HTTP et protection contre les attaques basiques

## Architecture technique

### Modèle d'architecture
Le serveur utilise une architecture non-bloquante basée sur les sockets :
- **I/O multiplexing** avec `select()` ou `poll()`
- **Gestion multi-clients** simultanés
- **Parser HTTP** pour analyser les requêtes
- **Générateur de réponses** HTTP conformes au standard

### Technologies utilisées
- **Langage** : C++98 (standard 42)
- **Sockets** : API Berkeley sockets
- **Parsing** : Parser manuel pour HTTP et configuration
- **CGI** : Interface Common Gateway Interface

## Fonctionnalités implémentées

### Requêtes HTTP
- **GET** : Récupération de ressources statiques
- **POST** : Upload de fichiers et soumission de données
- **DELETE** : Suppression de ressources

### Configuration
```nginx
server {
    listen 8080;
    server_name localhost;
    root ./www;
    index index.html;
    
    location / {
        allowed_methods GET POST;
    }
    
    location /upload {
        allowed_methods POST;
        upload_path ./uploads;
    }
    
    location .php {
        cgi_path /usr/bin/php-cgi;
    }
}
```

### Gestion d'erreurs
- **404** : Page non trouvée
- **405** : Méthode non autorisée
- **500** : Erreur interne du serveur
- **413** : Payload trop volumineuse

## Défis techniques rencontrés

### 1. Parsing HTTP
La partie la plus complexe fut l'implémentation d'un parser HTTP robuste :
- Gestion des headers multiples
- Parsing du body pour POST
- Chunked transfer encoding
- Validation de la syntaxe HTTP

### 2. I/O Non-bloquant
Gérer plusieurs clients simultanément sans threads :
- Utilisation de `select()` pour surveiller les file descriptors
- Gestion des états de connexion
- Buffer management pour les requêtes partielles

### 3. CGI Implementation
Interface avec des scripts externes :
- Variables d'environnement CGI
- Communication via pipes
- Timeout et gestion d'erreurs

## Tests et validation

### Tests manuels
- Navigation web classique
- Upload de fichiers volumineux
- Tests de charge avec `ab` (Apache Bench)
- Validation avec différents navigateurs

### Comparaison nginx
Le serveur a été testé pour sa compatibilité avec nginx :
- Même fichier de configuration
- Réponses HTTP identiques
- Gestion d'erreurs similaire

## Résultats

✅ **Serveur HTTP fonctionnel** capable de servir des sites web statiques et dynamiques
✅ **Configuration nginx compatible** permettant une transition facile
✅ **Performance correcte** pour un serveur éducatif
✅ **Code maintenable** respectant les standards C++98

## Apprentissages

Ce projet m'a permis de comprendre :
- **Le protocole HTTP** en profondeur
- **La programmation réseau** en C++
- **L'architecture des serveurs web** modernes
- **Les défis de la programmation système**

---

*Projet réalisé dans le cadre du cursus 42 - Note obtenue : 125/100*
