// Captures deck screenshots from the REAL prototype (prototype/person-1) running at http://localhost:5179/.
// Usage: start the prototype (cd prototype/person-1 && npx vite --port 5179 --strictPort), then
//   npm install --no-save puppeteer-core && node capture-screens.mjs
// Element screenshots only: phone frames, laptop frames and technical-package sections, with their stamps.
import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'node:url';
import { mkdirSync } from 'node:fs';
const OUT = process.argv[2] || fileURLToPath(new URL('./shots', import.meta.url));
mkdirSync(OUT, { recursive: true });
const CHROME = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const b = await puppeteer.launch({ executablePath: CHROME, headless: true });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 2 });
const errs = []; p.on('console', m => m.type()==='error' && errs.push(m.text())); p.on('pageerror', e => errs.push(String(e)));
await p.goto('http://localhost:5179/', { waitUntil: 'networkidle0' });
const click = async (txt) => {
  const ok = await p.evaluate((t) => { const el=[...document.querySelectorAll('button')].find(x=>x.textContent.includes(t)); if(!el) return false; el.click(); return true; }, txt);
  if (!ok) throw new Error('no button: '+txt);
  await new Promise(r=>setTimeout(r,400));
};
const shot = async (sel, name) => { const el = await p.waitForSelector(sel, {visible:true}); await el.screenshot({ path: `${OUT}/${name}.png` }); console.log('saved', name); };
const toResult = async (verdict) => {
  await p.goto('http://localhost:5179/', { waitUntil: 'networkidle0' });
  await shot('.phone', 'sc01');
  await click('Continue: the app has started'); await click('Continue: calibration is complete');
  await shot('.phone', 'sc03');
  await click('Continue: a GPS fix is available'); await shot('.phone', 'sc04');
  await click('Start 3-second clip'); await shot('.phone', 'sc05');
  await click('Continue: the 3-second clip ends'); await shot('.phone', 'sc06');
  await p.waitForFunction(()=>[...document.querySelectorAll('button')].some(x=>x.textContent.includes('Show sample result')), {timeout:15000});
  await new Promise(r=>setTimeout(r,2500));
  await click('Show sample result: '+verdict);
};
for (const [v, tag] of [['Likely Genuine','lg'],['Needs Review','nr'],['Likely Fraudulent','lf']]) {
  await toResult(v); await shot('.phone', 'sc07-'+tag);
  await click('View certificate'); await shot('.phone', 'sc08-'+tag);
  await click('Share certificate'); await shot('.phone', 'sc09-'+tag);
  await click('Continue: the certificate file reaches'); await shot('.laptop-wrap', 'sc10-'+tag);
  await click('Open sample certificate'); await click('Verify signature'); await shot('.laptop-wrap', 'sc11-'+tag);
  await click('See evidence'); await shot('.laptop-wrap', 'sc12-'+tag);
}
await p.goto('http://localhost:5179/', { waitUntil: 'networkidle0' });
await click('Technical and evidence package');

await shot('.arch', 'architecture');
for (const [i,n] of [[1,'explainers'],[2,'manifest'],[3,'problem']]) {
  const h = await p.$$('h2.gallery-section'); const sec = await h[i].evaluateHandle(e=>e.parentElement);
  await sec.asElement().screenshot({ path: `${OUT}/${n}.png` }); console.log('saved', n);
}
console.log('ERRORS', JSON.stringify(errs));
await b.close();
