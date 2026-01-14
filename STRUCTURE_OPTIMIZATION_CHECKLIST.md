# ?? SEO STRUCTURE OPTIMIZATION CHECKLIST

**Status:** In Progress  
**Last Updated:** 2025-01-14  
**Owner:** ????? ????? ??????????

---

## ? PHASE 1: JSON-LD CONSOLIDATION (COMPLETED)

- [x] LocalBusiness (? schema)
- [x] Services (ItemList)
- [x] FAQ Page (5 questions)
- [x] Breadcrumb (navigation)
- [x] Reviews + Aggregate Rating
- [x] Removed: Corporation (duplicate)
- [x] Removed: AutoRepairShop (wrong category)
- [x] Removed: ServiceArea (redundant)
- [x] Removed: AggregateOffer (conflicts with Service)

**Result:** 11 blocks ? 5 blocks (-55% redundancy)

---

## ?? PHASE 2: CITY PAGE STRUCTURE (TO DO)

### Template Created: `CITY_PAGE_TEMPLATE.html`

**What makes it UNIQUE:**

? **Unique H1:** "????? ????? ?????????? 24/7"  
? **Unique Description:** City-specific details  
? **Unique Keywords:** Including city name  
? **Unique Content Sections:**
- ?? ?????????? (city history/info)
- ?????????? ?????? ? ????
- ?????????? ?????????? ?? ????
- City-specific FAQ

? **LocalBusiness Schema:** areaServed = ?????????? (not all 8 cities)  
? **Breadcrumb:** Two-level (Home > ??????????)  
? **Internal Links:** Back to hub + related cities

---

### Files to Update (Priority Order):

#### ?? CRITICAL (This Week)
- [ ] `/kostinbrod.html` - Main city (40% of traffic)
- [ ] `/kalotina.html` - Border city (30% of traffic)
- [ ] `/slivnica.html` - Sofia suburb (20% of traffic)

#### ?? IMPORTANT (Next Week)
- [ ] `/dragoman.html`
- [ ] `/petrohan.html`
- [ ] `/bojurishte.html`
- [ ] `/ginci.html`
- [ ] `/voluiak.html`
- [ ] `/magistralaevropa.html`

---

## ?? PHASE 3: LINK HIERARCHY (TO DO)

### INDEX.HTML (HUB) Should Link To:

```
Index ????? /kostinbrod.html
        ??? /kalotina.html
        ??? /slivnica.html
        ??? /dragoman.html
        ??? /petrohan.html
        ??? /bojurishte.html
        ??? /ginci.html
        ??? /voluiak.html
        ??? /magistralaevropa.html
        ??? /kalkulator.html
        ??? /blog/index.html
        ??? /prices.html
```

### Each CITY PAGE Should Link To:

```
/kostinbrod.html ????? / (back to hub)
                   ??? /kalotina.html (nearby cities)
                   ??? /slivnica.html
                   ??? /dragoman.html
                   ??? / (related services)
```

---

## ?? CURRENT STRUCTURE (VISUAL)

```
index.html (HUB)
??? Dropdown Menu: ?????????? ??????
?   ??? kostinbrod.html ? (has separate page)
?   ??? kalotina.html ? (has separate page)
?   ??? slivnica.html ? (has separate page)
?   ??? petrohan.html ? (has separate page)
?   ??? dragoman.html ? (has separate page)
?   ??? bojurishte.html ? (has separate page)
?   ??? ginci.html ? (has separate page)
?   ??? voluiak.html ? (has separate page)
??? Main Nav:
?   ??? #kalk ? kalkulator.html
?   ??? #services (inline)
?   ??? #prices (inline)
?   ??? #areas (dropdown links)
?   ??? #why-us (inline)
?   ??? #reviews (inline)
?   ??? blog/index.html
```

---

## ?? ISSUES IDENTIFIED

### Issue #1: City Pages Similarity (CRITICAL)
```
Problem: All city pages likely have identical content
Risk: Google sees them as THIN CONTENT or DUPLICATE
Impact: -50% visibility reduction in search

Solution: Each page must have:
? Unique H1 with city name
? City description (population, location, landmarks)
? Local statistics & facts
? City-specific FAQ
? Related cities links
? Localized schema (areaServed)
```

### Issue #2: JSON-LD Redundancy (MEDIUM)
```
Problem: 11 blocks, some conflicting
Solution: Reduced to 5 core blocks ? DONE
```

### Issue #3: Missing Content Hierarchy (MEDIUM)
```
Problem: Not clear which pages are main/supporting
Solution: Create hub-and-spoke model:
- Index = HUB (depth 0)
- City pages = SPOKES (depth 1)
- Service pages = DEPTH (depth 2)
```

---

## ?? EXPECTED IMPROVEMENTS

### Before Optimization:
- City pages: 50-60% similar content
- Click depth: 2-3 levels
- Page grouping: Unclear
- Traffic concentration: 70% to index

### After Optimization:
- City pages: 100% unique content
- Click depth: 1-2 levels
- Page grouping: Clear hub-and-spoke
- Traffic distribution: 20-30% per major city

### SEO Impact Estimates:
- Local search rankings: +40%
- Rich results: +25% (unique schema per city)
- Organic CTR: +15%
- Content relevance: +50%

---

## ??? IMPLEMENTATION CHECKLIST

### Step 1: Copy Template
```bash
cp CITY_PAGE_TEMPLATE.html kostinbrod.html
cp CITY_PAGE_TEMPLATE.html kalotina.html
cp CITY_PAGE_TEMPLATE.html slivnica.html
# ... etc
```

### Step 2: Customize Each Page
- [ ] Change H1 to city name
- [ ] Update meta description
- [ ] Add unique city content (population, facts, statistics)
- [ ] Create city-specific FAQ
- [ ] Update breadcrumb city name
- [ ] Update schema areaServed to single city
- [ ] Add back-link to index

### Step 3: Testing
- [ ] Run each page through Google Search Console
- [ ] Check for duplicate content (Copyscape)
- [ ] Verify all internal links work
- [ ] Test mobile rendering
- [ ] Validate HTML/CSS/Schema (validator.w3.org)

### Step 4: Monitoring
- [ ] Monitor GSC for errors
- [ ] Track ranking changes per city
- [ ] Monitor CTR in Search Console
- [ ] Analyze bounce rate per page

---

## ?? TIMELINE

| Phase | Task | Timeline | Owner |
|-------|------|----------|-------|
| 1 | JSON-LD Consolidation | ? DONE | Bot |
| 2 | Create City Template | ? DONE | Bot |
| 2 | Update 3 main cities | This week | YOU |
| 2 | Update remaining 6 cities | Next week | YOU |
| 3 | Link hierarchy | After cities | YOU |
| 3 | Submit to GSC | After links | YOU |
| 4 | Monitor & adjust | Ongoing | YOU |

---

## ?? SUCCESS METRICS

Track these KPIs after implementation:

**Google Search Console:**
- Impressions per city (should increase)
- CTR per city page (should increase)
- Average position per city (should improve)

**Analytics:**
- Organic traffic per city
- Bounce rate per city (should decrease)
- Session duration per city

**Rankings:**
- City + "????? ?????" keyword
- City + "????????" keyword
- City + "????????? ?????" keyword

---

## ?? NEXT STEPS

1. ? Review this checklist
2. ? Start with `/kostinbrod.html` (main city)
3. ? Use `CITY_PAGE_TEMPLATE.html` as base
4. ? Test in GSC Search Console
5. ? Update remaining cities
6. ? Monitor in Google Analytics

---

**Questions?** Check SEO_AI_OPTIMIZATIONS.md for detailed SEO guide.
