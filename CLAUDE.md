# BonusBevakning.se

## Projektöversikt

BonusBevakning.se är en svensk affiliatewebbplats som samlar och presenterar bonuserbjudanden från spelbolag. Besökare kan bläddra bland bonusar och klicka vidare till spelbolagen via affiliatelänkar. Den unika funktionen är att besökare kan skapa konton och prenumerera på notiser när nya bonusar publiceras.

## Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS (byggt med [Lovable](https://lovable.dev))
- **Kompatibilitet**: Ska fungera i alla moderna webbläsare (Chrome, Firefox, Safari, Edge)

## Kärnfunktioner

- Lista och filtrera bonuserbjudanden från spelbolag
- Affiliatelänkar till spelbolagen
- Användarkonton (registrering, inloggning)
- Notissystem – användare får notiser när nya bonusar publiceras

## Kodkonventioner

- Språk i kod: engelska (variabelnamn, funktioner, kommentarer)
- Språk i UI: svenska
- Komponenter skrivs i TypeScript med tydliga typdefinitioner
- Styling med Tailwind CSS utility-klasser
- Mobilanpassad design (mobile-first)

## Viktigt att tänka på

- All kod ska vara cross-browser kompatibel – undvik CSS/JS-funktioner med dåligt webbläsarstöd
- Affiliatelänkar ska öppnas i ny flik (`target="_blank"` med `rel="noopener noreferrer"`)
- Håll komponenter återanvändbara och enkla