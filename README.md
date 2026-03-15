# <img src="https://img.shields.io/badge/F1-LIVE-E10600?style=for-the-badge&logoColor=white"/> F1 Live

<div align="center">

![Android](https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Min SDK](https://img.shields.io/badge/Min%20SDK-21-green?style=flat-square)

**Suis la Formule 1 2026 en direct — App Android & Site Web**

[📱 Télécharger l'APK](#-télécharger) · [🌐 Voir le site](#-site-web) · [✨ Fonctionnalités](#-fonctionnalités)

---

</div>

## ✨ Fonctionnalités

| | Fonctionnalité | Android | Web |
|---|---|:---:|:---:|
| 📅 | Calendrier des 23 GP 2026 | ✅ | ✅ |
| ⏱ | Compte à rebours avant la prochaine course | ✅ | ✅ |
| 🏎 | Équipes & pilotes 2026 (11 écuries, 22 pilotes) | ✅ | ✅ |
| 🏆 | Résultats des courses passées (API Ergast) | ✅ | ✅ |
| 🔔 | Notifications 30 min avant + au départ | ✅ | ✅ |
| ▶ | Lecture du stream HLS/m3u8 en direct | ✅ | ✅ |
| ⚙ | URL du stream personnalisable | ✅ | ✅ |

---

## 📱 Télécharger

<div align="center">

[![Télécharger APK](https://img.shields.io/badge/⬇%20Télécharger%20l'APK-E10600?style=for-the-badge&logoColor=white)](../../releases/latest/download/f1live.apk)

> Min Android 5.0 (SDK 21) · Aucune dépendance externe

</div>

---

## 🗂 Structure

```
f1live/
├── app/src/main/
│   ├── assets/
│   │   └── formula1.ttf                  ← Police F1
│   ├── java/com/example/hlsplayer/
│   │   ├── MainActivity.java             ← Menu principal
│   │   ├── CalendarActivity.java         ← Calendrier 2026
│   │   ├── CountdownActivity.java        ← Compte à rebours
│   │   ├── TeamsActivity.java            ← Équipes & pilotes
│   │   ├── ResultsActivity.java          ← Résultats courses
│   │   ├── PlayerActivity.java           ← Lecteur vidéo
│   │   ├── SettingsActivity.java         ← Paramètres URL
│   │   ├── RaceNotificationReceiver.java ← Notifications
│   │   └── NotificationScheduler.java   ← Alarmes
│   └── res/
│       ├── drawable/ic_launcher_foreground.xml
│       └── mipmap-anydpi-v26/ic_launcher.xml
└── index.html                            ← Site web complet
```

---

## ⚙ Installation (CodeAssist)

```
1. Nouveau projet vide — package : com.example.hlsplayer — Java — Min SDK 21
2. Copier les fichiers .java dans app/src/main/java/com/example/hlsplayer/
3. Remplacer AndroidManifest.xml et app/build.gradle
4. Ajouter formula1.ttf dans app/src/main/assets/
5. Clean Project → Build
```

---

## 🌐 Site Web

Un seul fichier `index.html`, aucune installation. Ouvre-le dans un navigateur ou héberge-le sur GitHub Pages.

```bash
# GitHub Pages
git add index.html && git commit -m "deploy" && git push
# Activer Pages : Settings → Pages → Branch main
```

---

## 📡 API

Résultats via **[Jolpi / Ergast](https://api.jolpi.ca)** — gratuite, sans clé.
```
GET https://api.jolpi.ca/ergast/f1/2026/results.json
```

---

## 🎨 Stack technique

- **Android** : Java pur, SDK natif uniquement (zéro dépendance)
- **Web** : HTML/CSS/JS vanilla + [hls.js](https://github.com/video-dev/hls.js) pour le stream
- **Notifications** : `AlarmManager` (Android) · Web Notifications API (web)
- **Persistance** : `SharedPreferences` (Android) · `localStorage` (web)

---

<div align="center">

*Projet personnel — non affilié à la FIA ou Formula One Group.*

</div>
