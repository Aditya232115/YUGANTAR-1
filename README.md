# YUGANTAR

Complete Next.js frontend and backend source is stored in source-bundle.json. npm run build restores each file to its original folder using restore-source.mjs, then builds the website.

Run npm ci and npm run dev locally. Hosting: Node 24, build npm ci && npm run build, start npm run start -- --hostname 0.0.0.0 --port .

Free hosting resets the JSON database and uploaded files on service restart. Use persistent storage for lasting data.
