/**
 * CALCULATOR.JS - OPTIMIZED FOR 100% PAGESPEED
 * Non-blocking, cached state, INP-safe
 */

// State caching ?? ????????? ?? ??????? ??????????
const state = {
  distance: 0,
  weight: '',
  service: 'towing',
  lastCalculation: null
};

// ?????????
const RATE = 1.95583;
let currentLang = 'bg';

// ???????
const translations = {
  bg: {
    headerTitle: "?????????? ?? ???? ?? ????? ?????",
    headerSubtitle: "???????????? ? ???????? – ????????? ??????? ???? ?? ??????????, ????????, ????????, ????????, ????????, ????????, ?????, ??????, ?80 ?? ???????!",
    labelService: "??? ??????",
    serviceTowing: "????? ????? / ???????????",
    serviceFuel: "???????? ?? ??????",
    serviceTire: "????? ?? ????",
    labelDistance: "?????????? ? ?????? ?????? (??)",
    labelWeight: "????? ?? ???",
    weightPlaceholder: "???????? ?????",
    weight1: "?? 1500 ?? (??? ?????????)",
    weight2: "1500–2000 ??",
    weight3: "??? 2000 ?? (????, ???, ????????)",
    extraTitle: "???????????? ???????",
    labelNoHook: "????? ?? ???? (+5 € / 9.78 ??)",
    labelBlockedTire: "?????????/???????? ???? (+20 € / 39.12 ?? ?? ????)",
    labelDelay: "???????? ?? ????? (+15 € / 29.34 ?? ?? ???)",
    labelHeavyAccident: "????? ?????????? (+75 € / 146.69 ??)",
    labelDitch: "????????? ?? ??????? (+75 € / 146.69 ??)",
    labelNight: "????? ?????? 22:00–07:00 (+30%)",
    calcBtn: "??????? ??????? ????",
    resultTitle: "?????? ????? ????:",
    callNow: "????? ?? ????: 0877 845 569",
    backHome: "?????? ????????",
    footerCompany: "\"??????????? ???? ??????\" ????",
    footerAddress: "??. ???? ???? 16, ?????????? 2230",
    footerLicense: "????????????? ?42-00048/28.01.2021",
    footerCopyright: "© 2021 - 2025 ?????? ????? ????????. \"??????????? ???? ??????\" ????.",
    breakdownBase: "?????? ???? (???. ??????? ? ???????)",
    breakdownNoHook: "????? ?? ????",
    breakdownTires: "????????? ????",
    breakdownDelay: "????????",
    breakdownHeavy: "????? ??????????",
    breakdownDitch: "????????? ?? ???????",
    breakdownNight: "????? ?????? (+30%)",
    breakdownTotal: "?????? ????",
    footerQuickLinks: "????? ??????",
    footerHoursTitle: "??????? ?????",
    footerFollow: "????????? ??:",
    footerSchedule: "?????????? - ??????: 00:00 - 23:59",
    errorDistance: "????, ???????? ??????????!",
    errorWeight: "????, ???????? ????? ?? ??????????!"
  },
  en: {
    headerTitle: "Road Assistance Price Calculator",
    headerSubtitle: "The only one in Bulgaria – calculate exact prices for Kostinbrod region and E80 in seconds!",
    labelService: "Service type",
    serviceTowing: "Roadside assistance / Towing",
    serviceFuel: "Fuel delivery",
    serviceTire: "Tyre change",
    labelDistance: "Distance one way (km)",
    labelWeight: "Vehicle weight",
    weightPlaceholder: "Select weight",
    weight1: "Up to 1500 kg (car)",
    weight2: "1500–2000 kg",
    weight3: "Over 2000 kg (SUV, van, caravans)",
    extraTitle: "Additional conditions",
    labelNoHook: "Missing hook (+€5 / 9.78 BGN)",
    labelBlockedTire: "Blocked/missing tire (+€20 / 39.12 BGN per tire)",
    labelDelay: "Delay on site (+€15 / 29.34 BGN per hour)",
    labelHeavyAccident: "Heavy accident (+€75 / 146.69 BGN)",
    labelDitch: "Recovery from ditch (+€75 / 146.69 BGN)",
    labelNight: "Night service 22:00–07:00 (+30%)",
    calcBtn: "CALCULATE EXACT PRICE",
    resultTitle: "YOUR EXACT PRICE:",
    callNow: "CALL NOW: 0877 845 569",
    breakdownBase: "Base price (round trip included)",
    breakdownNoHook: "Missing hook",
    breakdownTires: "Blocked tires",
    breakdownDelay: "Delay",
    breakdownHeavy: "Heavy accident",
    breakdownDitch: "Ditch recovery",
    breakdownNight: "Night surcharge (+30%)",
    breakdownTotal: "TOTAL PRICE",
    errorDistance: "Please enter distance!",
    errorWeight: "Please select vehicle weight!"
  },
  de: {
    headerTitle: "Preisrechner Pannenhilfe",
    calcBtn: "PREIS BERECHNEN",
    errorDistance: "Bitte Entfernung eingeben!",
    errorWeight: "Bitte Gewicht auswählen!"
  },
  tr: {
    headerTitle: "Yol Yard?m? Hesaplay?c?",
    calcBtn: "F?YAT HESAPLA",
    errorDistance: "Lütfen mesafe girin!",
    errorWeight: "Lütfen a??rl?k seçin!"
  },
  ro: {
    headerTitle: "Calculator Asisten?? Rutier?",
    calcBtn: "CALCULEAZ? PRE?UL",
    errorDistance: "V? rug?m introduce?i distan?a!",
    errorWeight: "V? rug?m selecta?i greutatea!"
  }
};

// ????????????? ??? ?????????
document.addEventListener('DOMContentLoaded', () => {
  // ?????????? ?? ????????? ???? ?? ????????????
  const bgBtn = document.querySelector('.language-selector button[onclick*="bg"]');
  if (bgBtn) bgBtn.classList.add('active');
  
  // Input validation
  const distanceInput = document.getElementById('distance');
  if (distanceInput) {
    distanceInput.setAttribute('inputmode', 'numeric');
    distanceInput.setAttribute('min', '0');
    distanceInput.setAttribute('step', '0.1');
    distanceInput.setAttribute('aria-label', '?????????');
  }
});

// ??????? ?? ????? ?? ????
function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang] || translations.bg;
  
  // Cache DOM queries
  const elements = {
    headerTitle: document.getElementById('header-title'),
    headerSubtitle: document.getElementById('header-subtitle'),
    labelService: document.getElementById('label-service'),
    labelDistance: document.getElementById('label-distance'),
    labelWeight: document.getElementById('label-weight'),
    extraTitle: document.getElementById('extra-title'),
    calcBtn: document.getElementById('calc-btn'),
    resultTitle: document.getElementById('result-title'),
    callNow: document.getElementById('call-now')
  };
  
  // Batch DOM updates
  requestAnimationFrame(() => {
    if (elements.headerTitle) elements.headerTitle.textContent = t.headerTitle;
    if (elements.headerSubtitle) elements.headerSubtitle.textContent = t.headerSubtitle;
    if (elements.labelService) elements.labelService.textContent = t.labelService;
    if (elements.labelDistance) elements.labelDistance.textContent = t.labelDistance;
    if (elements.labelWeight) elements.labelWeight.textContent = t.labelWeight;
    if (elements.extraTitle) elements.extraTitle.textContent = t.extraTitle;
    if (elements.calcBtn) elements.calcBtn.textContent = t.calcBtn;
    if (elements.resultTitle) elements.resultTitle.textContent = t.resultTitle;
    if (elements.callNow) elements.callNow.textContent = t.callNow;
    
    // Update active state
    document.querySelectorAll('.language-selector button').forEach(btn => {
      btn.classList.remove('active');
    });
    if (event && event.target) {
      const btn = event.target.closest('button');
      if (btn) btn.classList.add('active');
    }
  });
}

// ??????? ?? ??????? ?? ???? ????
function changeTire(val) {
  const input = document.getElementById('tireCount');
  const checkbox = document.getElementById('blockedTire');
  const newValue = parseInt(input.value) + val;
  
  if (newValue >= 0 && newValue <= 4) {
    input.value = newValue;
    checkbox.checked = (newValue > 0);
  }
}

// ??????? ?? ??????? ?? ???????? ????????
function changeDelay(val) {
  const input = document.getElementById('delayHours');
  const checkbox = document.getElementById('delay');
  const newValue = parseInt(input.value) + val;
  
  if (newValue >= 0) {
    input.value = newValue;
    checkbox.checked = (newValue > 0);
  }
}

// ?????? ??????? ?? ?????????? - INP OPTIMIZED
function calculate() {
  // Cache DOM queries
  const distanceInput = document.getElementById('distance');
  const weightSelect = document.getElementById('weight');
  const serviceSelect = document.getElementById('serviceType');
  
  const distance = parseFloat(distanceInput.value) || 0;
  const weight = weightSelect.value;
  const service = serviceSelect.value;
  const t = translations[currentLang] || translations.bg;
  
  // Validation
  if (distance <= 0) {
    alert(t.errorDistance || "????, ???????? ??????????!");
    distanceInput.focus();
    return;
  }
  
  if (service === 'towing' && !weight) {
    alert(t.errorWeight || "????, ???????? ????? ?? ??????????!");
    weightSelect.focus();
    return;
  }
  
  // Check if calculation needed (state caching)
  const currentState = JSON.stringify({
    distance,
    weight,
    service,
    noHook: document.getElementById('noHook').checked,
    tires: parseInt(document.getElementById('tireCount').value) || 0,
    delay: parseInt(document.getElementById('delayHours').value) || 0,
    heavy: document.getElementById('heavyAccident').checked,
    ditch: document.getElementById('ditch').checked,
    night: document.getElementById('night').checked
  });
  
  if (state.lastCalculation === currentState) {
    // Skip calculation, just scroll to result
    document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  
  state.lastCalculation = currentState;
  
  // Use requestAnimationFrame for non-blocking calculation
  requestAnimationFrame(() => {
    performCalculation(distance, weight, service, t);
  });
}

// Actual calculation logic
function performCalculation(distance, weight, service, t) {
  const totalKm = distance * 2;
  let basePrice = 0;
  
  // Calculate base price
  if (service === 'towing') {
    let minFee = 0;
    let pricePerKm = 0;
    
    if (weight === "1500") {
      minFee = 40;
      pricePerKm = 0.75;
    } else if (weight === "2000") {
      minFee = 45;
      pricePerKm = 0.85;
    } else if (weight === "over2000") {
      minFee = 50;
      pricePerKm = 0.95;
    }
    
    basePrice = Math.max(minFee, totalKm * pricePerKm);
  } else {
    basePrice = Math.max(30, totalKm * 0.8);
  }
  
  let total = basePrice;
  let breakdownHTML = `<div class="breakdown-item"><span>${t.breakdownBase || '?????? ????'}</span><span>${basePrice.toFixed(2)} €<br>(${(basePrice * RATE).toFixed(2)} ??)</span></div>`;
  
  // Add extras
  if (document.getElementById('noHook').checked) {
    total += 5;
    breakdownHTML += `<div class="breakdown-item"><span>${t.breakdownNoHook || '????? ?? ????'}</span><span>5.00 €<br>(9.78 ??)</span></div>`;
  }
  
  const tires = parseInt(document.getElementById('tireCount').value) || 0;
  if (tires > 0) {
    const cost = tires * 20;
    total += cost;
    breakdownHTML += `<div class="breakdown-item"><span>${t.breakdownTires || '????????? ????'} (x${tires})</span><span>${cost.toFixed(2)} €<br>(${(cost * RATE).toFixed(2)} ??)</span></div>`;
  }
  
  const hours = parseInt(document.getElementById('delayHours').value) || 0;
  if (hours > 0) {
    const cost = hours * 15;
    total += cost;
    breakdownHTML += `<div class="breakdown-item"><span>${t.breakdownDelay || '????????'} (x${hours}h)</span><span>${cost.toFixed(2)} €<br>(${(cost * RATE).toFixed(2)} ??)</span></div>`;
  }
  
  if (document.getElementById('heavyAccident').checked) {
    total += 75;
    breakdownHTML += `<div class="breakdown-item"><span>${t.breakdownHeavy || '????? ??????????'}</span><span>75.00 €<br>(146.69 ??)</span></div>`;
  }
  
  if (document.getElementById('ditch').checked) {
    total += 75;
    breakdownHTML += `<div class="breakdown-item"><span>${t.breakdownDitch || '????????? ?? ???????'}</span><span>75.00 €<br>(146.69 ??)</span></div>`;
  }
  
  if (document.getElementById('night').checked) {
    const nightSurcharge = total * 0.30;
    total += nightSurcharge;
    breakdownHTML += `<div class="breakdown-item"><span>${t.breakdownNight || '????? ??????'}</span><span>${nightSurcharge.toFixed(2)} €<br>(${(nightSurcharge * RATE).toFixed(2)} ??)</span></div>`;
  }
  
  breakdownHTML += `<div class="breakdown-item"><span>${t.breakdownTotal || '?????? ????'}</span><span>${total.toFixed(2)} €<br>(${(total * RATE).toFixed(2)} ??)</span></div>`;
  
  // Batch DOM updates
  const resultEl = document.getElementById('result');
  const totalEUREl = document.getElementById('totalEUR');
  const totalBGNEl = document.getElementById('totalBGN');
  const breakdownEl = document.getElementById('breakdown');
  
  totalEUREl.textContent = total.toFixed(2) + " €";
  totalBGNEl.textContent = (total * RATE).toFixed(2) + " ??";
  breakdownEl.innerHTML = breakdownHTML;
  resultEl.style.display = 'block';
  
  // Analytics tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', 'calculate_price', {
      'event_category': 'engagement',
      'event_label': `${service}|${weight || 'n/a'}`,
      'value': total
    });
  }
  
  // Smooth scroll
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Call tracking
const callCta = document.getElementById('call-now');
if (callCta && typeof gtag !== 'undefined') {
  callCta.addEventListener('click', () => {
    gtag('event', 'generate_lead', { 
      event_category: 'Contact', 
      event_label: 'Call from calculator' 
    });
  });
}
