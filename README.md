# 🏎 F1 Live

Application Android et site web pour suivre la Formule 1 2026 — calendrier, compte à rebours, équipes, résultats et stream live.

---

## 📱 App Android

### Fonctionnalités

| Page | Description |
|---|---|
| **Accueil** | Menu principal avec navigation |
| **Calendrier** | 23 GP 2026 avec drapeaux, badge prochaine course, notifications |
| **Compte à rebours** | Timer en temps réel jusqu'à la prochaine course |
| **Équipes & Pilotes** | 11 écuries et 22 pilotes de la saison 2026 |
| **Résultats** | Podiums des courses passées via API Ergast |
| **Paramètres** | Modifier l'URL du stream live |
| **Player** | Lecture du flux HLS/m3u8 en plein écran |

### Structure du projet

```
app/src/main/
├── assets/
│   └── formula1.ttf                  ← Police F1 (à ajouter manuellement)
├── java/com/example/hlsplayer/
│   ├── MainActivity.java             ← Menu principal
│   ├── CalendarActivity.java         ← Calendrier 2026
│   ├── CountdownActivity.java        ← Compte à rebours
│   ├── TeamsActivity.java            ← Équipes & pilotes
│   ├── ResultsActivity.java          ← Résultats courses
│   ├── PlayerActivity.java           ← Lecteur vidéo
│   ├── SettingsActivity.java         ← Paramètres URL
│   ├── RaceNotificationReceiver.java ← Récepteur notifications
│   └── NotificationScheduler.java   ← Planification alarmes
└── res/
    ├── drawable/
    │   └── ic_launcher_foreground.xml
    ├── mipmap-anydpi-v26/
    │   └── ic_launcher.xml
    └── layout/
        └── activity_main.xml
```

### Prérequis

- Android Studio ou **CodeAssist** (Android)
- Min SDK : 21 (Android 5.0)
- Target SDK : 33
- Java 8
- Aucune dépendance externe (SDK Android natif uniquement)

### Installation

1. Crée un nouveau projet vide dans CodeAssist
   - Package : `com.example.hlsplayer`
   - Langage : Java
   - Min SDK : 21

2. Copie tous les fichiers `.java` dans :
   ```
   app/src/main/java/com/example/hlsplayer/
   ```

3. Remplace `AndroidManifest.xml` et `app/build.gradle`

4. Ajoute la police `formula1.ttf` dans `app/src/main/assets/`

5. **Clean Project** puis **Build**

### Permissions requises

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
```

### Changer l'URL du stream

Via l'app : **Paramètres → URL du stream → Sauvegarder**

Ou directement dans `SettingsActivity.java` :
```java
public static final String DEFAULT_URL = "https://ton-url.m3u8";
```

---

## 🌐 Site Web

Un seul fichier `index.html`, aucune dépendance à installer.

### Fonctionnalités

- Mêmes pages que l'app Android
- Notifications via l'API Web Notifications du navigateur
- Lecture HLS via `hls.js` (chargé depuis CDN)
- URL du stream sauvegardée dans `localStorage`
- Responsive mobile

### Utilisation

#### En local
Ouvre simplement `index.html` dans un navigateur.

#### Hébergement GitHub Pages
```bash
git init
git add index.html
git commit -m "init"
git branch -M main
git remote add origin https://github.com/TON_USER/f1live.git
git push -u origin main
```
Puis active GitHub Pages dans les paramètres du repo (branche `main`, dossier `/`).

---

## 🔔 Notifications

### Android
Appuie sur **🔔 Activer notifications** sur une course dans le calendrier.
Deux alarmes sont planifiées :
- 30 minutes avant le départ
- À l'heure exacte du départ

### Web
Le navigateur demande la permission lors du premier clic sur **🔔 Activer notifications**.
Fonctionne uniquement si la page est ouverte au moment de la course.

---

## 📡 API utilisée

Les résultats des courses sont récupérés via l'API **Jolpi (mirror Ergast)** :
```
https://api.jolpi.ca/ergast/f1/2026/results.json
```
Gratuite, sans clé API requise.

---

## 🎨 Design

- Couleurs : `#E10600` (rouge F1) sur fond `#0a0a0a`
- Police : Formula1 Display (propriétaire FIA) ou fallback `Titillium Web`
- Thème 100% sombre

---

## 📁 Fichiers

| Fichier | Description |
|---|---|
| `MainActivity.java` | Menu principal Android |
| `CalendarActivity.java` | Calendrier Android |
| `CountdownActivity.java` | Compte à rebours Android |
| `TeamsActivity.java` | Équipes Android |
| `ResultsActivity.java` | Résultats Android |
| `PlayerActivity.java` | Lecteur vidéo Android |
| `SettingsActivity.java` | Paramètres Android |
| `RaceNotificationReceiver.java` | Notifications Android |
| `NotificationScheduler.java` | Alarmes Android |
| `AndroidManifest.xml` | Manifest Android |
| `app/build.gradle` | Config Gradle |
| `ic_launcher_foreground.xml` | Icône app (drawable) |
| `index.html` | Site web complet |

---

*Projet personnel — non affilié à la FIA ou Formula One Group.*
