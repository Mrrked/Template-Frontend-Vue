# TEMPLATE - FRONTEND  v1.0
###  Base Framework
 - Vite
 - Vue 3
 - TypeScript

### Additional Libraries
- TailwindCSS - styling
- PrimeVue - components, themes, color schemes
- Pinia - store / state
- VueRouter - routing
- QRCode - generation of QR codes
- HTML2PDF.JS - generation of pdf files
- Axios - HTTP requests
- JWTDecode - decoding of JWT tokens

### Existing Configuration:
- Authentication, Authorization, error handling
	- axios and vue-router middlewares
- Pre-defined Component Tree
	- contains login and main page with navigation bar for system name and actions dropdown (ex. logout)
- Configured PrimeVue modules
	- imported modules on root component
- Color Scheme Selection
	- modify system color scheme

### HOW TO RUN

 1. Clone repository
	- `git clone git@github.com:Mrrked/Template-Frontend-Vue.git`
 2. Go inside the program directory
 3. Install dependencies
	- `npm i`
 4. Run the program
	-  `npm run dev`

### IMPORTANT THINGS TO CONFIGURE

 1. Axios Base URL
	- set the proper IP/PORT of the backend for this frontend application where it will always make the requests
 2. Modify Login and Main Component Tree (if necessary)
 3. Set desired PORT where the program should run in vite config file
 4. Use configStore, coreDataStore, types for centralized data and actions.
