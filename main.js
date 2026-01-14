/**
 * MAIN.JS - ??????? ????????? ?? ????? ????? ??????????
 * ???????: Language Switcher, Location Sender, Analytics Tracking
 */

// ============= LANGUAGE SWITCHER =============
const currentPath = window.location.pathname.toLowerCase();
const pages = {
  'bg': currentPath.includes('kalotina') ? '/kalotina.html' : (currentPath.includes('petrohan') ? '/petrohan.html' : (currentPath.includes('dragoman') ? '/dragoman.html' : (currentPath.includes('magistralaevropa') ? '/magistralaevropa.html' : (currentPath.includes('ginci') ? '/ginci.html' : (currentPath.includes('voluiak') ? '/voluiak.html' : (currentPath.includes('slivnica') ? '/slivnica.html' : (currentPath.includes('kostinbrod') ? '/kostinbrod.html' : '/'))))),
  'en': '/english.html',
  'de': '/german.html',
  'tr': '/turk.html',
  'ro': '/rom.html'
};

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const lang = this.getAttribute('data-lang');
    if (pages[lang]) {
      window.location.href = pages[lang];
    }
  });
});

// ============= SEND LOCATION FUNCTION =============
/**
 * Функция за изпращане на координати чрез SMS или копиране в клипборда
 */
function sendLocation() {
  const fallbackMessage = "Моля позвънете директно на: 0877 845 569";
  const locationName = document.body?.dataset?.location || 'Костинброд';

  if (!navigator.geolocation) {
    alert(fallbackMessage);
    return;
  }

  navigator.geolocation.getCurrentPosition(
    function(pos) {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const message = `Здравейте! Нуждая се от пътна помощ в ${locationName}.\n\nМоята локация:\nhttps://maps.google.com/?q=${lat},${lng}`;
      const phone = '+359877845569';

      // Detect mobile
      if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = `sms:${phone}?body=${encodeURIComponent(message)}`;
      } else {
        // Desktop - copy to clipboard
        navigator.clipboard.writeText(message).then(() => {
          alert("✅ Локацията е копирана! Изпратете я на: " + phone);
        }).catch(() => {
          alert(message);
        });
      }
    },
    function() {
      alert(fallbackMessage);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
}

// ============= ANALYTICS EVENT TRACKING =============
/**
 * ?????????? ??????? ?? Google Analytics
 * @param {string} eventName - ??? ?? ?????????
 * @param {string} category - ????????? ?? ?????????
 * @param {string} label - ?????? ?? ?????????
 */
function trackEvent(eventName, category, label) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      'event_category': category,
      'event_label': label
    });
  }
}

// ============= TRACK CTA CLICKS =============
document.querySelectorAll('a[href^="tel:"], .btn-primary, .header-cta').forEach(el => {
  el.addEventListener('click', function() {
    trackEvent('cta_click', 'engagement', this.textContent.trim());
  });
});

// ============= DROPDOWN ACCESSIBILITY =============
const regionsBtn = document.getElementById('regions-btn');
if (regionsBtn) {
  regionsBtn.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
  });
}

// ============= SCROLL DEPTH TRACKING =============
/**
 * ?????????? ??????????? ?? ?????????? ?? ??????????
 * ??????? ??????? ????? 25% ?? ??????????? ??????????
 */
let scrollDepth = 0;
window.addEventListener('scroll', function() {
  const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  if (scrollPercentage > scrollDepth + 25) {
    scrollDepth = Math.floor(scrollPercentage / 25) * 25;
    trackEvent('scroll_depth', 'Engagement', scrollDepth + '%');
  }
});

// ============= TRACK LOCATION LEAD =============
/**
 * ?????????? ???? ???????????? ?????? ?? ?????? ?? ????????? ?? ???????
 */
const locationBtns = document.querySelectorAll('.btn-location, .btn-location-sticky');
locationBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    gtag('event', 'generate_lead', {
      'event_category': 'Contact',
      'event_label': 'Location Sent',
      'value': 1
    });
  });
});

// ============= DOCUMENT READY (Fallback) =============
/**
 * ???????? ???? DOM ? ??????? ????? ?? ???????? ?????????
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    // ?????????????? ?? ?????????
  });
}
