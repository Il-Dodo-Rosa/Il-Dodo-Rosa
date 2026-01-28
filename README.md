# 🎨 Corso di Illustrazione per Bambini

Un sito web completo in Angular 19 per un corso di illustrazione creativa per bambini dagli 8 ai 10 anni.

## 🚀 Quick Start

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
ng serve
```

Il sito sarà disponibile su **http://localhost:4200**

## ✨ Caratteristiche

- **Angular 19** con standalone components
- **Signals** per reattività moderna
- **Reactive Forms** con validazione completa
- **Tailwind CSS** per styling responsive
- **Mobile-first** design
- **Animazioni** fluide e micro-interazioni
- **Lightbox** per galleria progetti
- **Smooth scroll** navigation

## 📁 Struttura Progetto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Navigazione sticky con hamburger menu mobile
│   │   ├── home/            # Hero section con CTA
│   │   ├── info/            # Dettagli corso (orari, sede, struttura)
│   │   ├── insegnanti/      # Card insegnanti
│   │   ├── progetti/        # Galleria con lightbox
│   │   ├── contatto/        # Form con validazione
│   │   └── footer/          # Contatti e social
│   ├── services/
│   │   ├── config.service.ts    # Caricamento dati da JSON
│   │   └── contact.service.ts   # Invio form contatto
│   └── models/
│       └── site-config.model.ts # Interfacce TypeScript
├── assets/
│   └── data/
│       └── site-config.json     # Configurazione dati sito
└── styles.css                   # Stili globali + Tailwind
```

## 🔧 Configurazione

### Modificare i dati del sito

Tutti i contenuti sono configurabili in `src/assets/data/site-config.json`:

- **corso**: titolo, descrizione, orari, sede
- **insegnanti**: nome, ruolo, bio, immagine
- **progetti**: immagini, titoli, descrizioni
- **contatti**: telefono, email, indirizzo

### Sostituire placeholder

1. **Immagini insegnanti**: Sostituisci gli URL in `site-config.json` → `insegnanti[].immagine`
2. **Immagini progetti**: Sostituisci gli URL in `site-config.json` → `progetti[].immagine`
3. **API contatto**: In `src/app/services/contact.service.ts`, sostituisci `API_ENDPOINT` con il tuo servizio email (Formspree, EmailJS, backend custom)
4. **Contatti**: Modifica telefono, email e indirizzo in `site-config.json`

## 📧 Configurare invio email

Il form di contatto effettua una POST a `/api/contact`. Per abilitare l'invio reale:

### Opzione 1: Formspree (consigliato)
1. Crea un form su [formspree.io](https://formspree.io)
2. Sostituisci l'endpoint in `contact.service.ts`:
   ```typescript
   private readonly API_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

### Opzione 2: EmailJS
1. Registrati su [emailjs.com](https://www.emailjs.com)
2. Installa: `npm install @emailjs/browser`
3. Modifica `contact.service.ts` per usare EmailJS

## 🎨 Palette Colori

| Colore | HEX | Uso |
|--------|-----|-----|
| Verde Pastello | `#C8E6C9` | Sfondo sezioni, accenti |
| Arancione | `#FF9800` | CTA, hover, accenti principali |
| Giallo | `#FFD54F` | Highlights, decorazioni |
| Crema | `#FFF8E1` | Sfondo principale |

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🛠️ Comandi

```bash
# Development server
ng serve

# Build production
ng build

# Build con analisi bundle
ng build --stats-json

# Linting
ng lint
```

## 📝 Note per lo sviluppo

- I commenti `// PLACEHOLDER:` nel codice indicano dove sostituire con dati reali
- Il form simula il successo in development dopo un errore API (per demo)
- Le immagini usano `loading="lazy"` per ottimizzare le performance

## 📄 Licenza

© 2026 Corso di Illustrazione per Bambini. Tutti i diritti riservati.
