// Shared by every page, so each block first checks that its elements exist.

const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const params = new URLSearchParams(window.location.search);
const packages = typeof PACKAGES !== 'undefined' ? PACKAGES : [];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Header ----------

// Solid header once the page is scrolled past the top of the hero
function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

function setMenu(open) {
    header.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
}

menuToggle.addEventListener('click', () => {
    setMenu(!header.classList.contains('menu-open'));
});

navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
});

// ---------- Helpers ----------

function toDateValue(date) {
    const offset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - offset).toISOString().split('T')[0];
}

function formatINR(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

function durationText(pkg) {
    return `${pkg.days} Days / ${pkg.days - 1} Nights`;
}

// Photo with a gradient behind it, so a failed image still leaves a coloured card
function photoStyle(pkg, width) {
    const url = `https://images.unsplash.com/${pkg.photo}?auto=format&fit=crop&w=${width}&q=80`;
    return `background-image: url('${url}'), ${pkg.gradient}`;
}

function packageCard(pkg) {
    const url = `package.html?id=${pkg.id}`;
    return `
        <article class="package" data-tags="${pkg.tags.join(' ')}" data-keywords="${pkg.keywords}">
            <a href="${url}" class="package-img" style="${photoStyle(pkg, 800)}" aria-label="${pkg.name}">
                <span class="badge">${pkg.badge}</span>
            </a>
            <div class="package-body">
                <div class="package-meta"><span>${durationText(pkg)}</span><span class="rating">★ ${pkg.rating.toFixed(1)}</span></div>
                <h3><a href="${url}">${pkg.name}</a></h3>
                <p>${pkg.short}</p>
                <ul class="pkg-includes">${pkg.chips.map((chip) => `<li>${chip}</li>`).join('')}</ul>
                <div class="package-foot">
                    <div class="price"><strong>${formatINR(pkg.price)}</strong><span>/ person</span></div>
                    <a href="${url}" class="btn btn-small">View Details</a>
                </div>
            </div>
        </article>`;
}

// ---------- Package lists ----------

// <div data-packages="all"> or <div data-packages="kerala,ladakh">
document.querySelectorAll('[data-packages]').forEach((list) => {
    const wanted = list.dataset.packages;
    const items = wanted === 'all'
        ? packages
        : wanted.split(',').map((id) => packages.find((pkg) => pkg.id === id.trim())).filter(Boolean);
    list.innerHTML = items.map(packageCard).join('');
});

// ---------- Package details page ----------

const detailSection = document.getElementById('packageDetail');
if (detailSection) {
    const pkg = packages.find((item) => item.id === params.get('id'));
    const hero = document.getElementById('detailHero');
    const heroContent = document.getElementById('detailHeroContent');

    if (!pkg) {
        heroContent.innerHTML = `
            <h1>Package not found</h1>
            <p class="breadcrumb"><a href="index.html">Home</a> / <a href="packages.html">Packages</a></p>`;
        detailSection.hidden = true;
        document.getElementById('similarSection').hidden = true;
        document.getElementById('notFound').hidden = false;
    } else {
        document.title = `${pkg.name} | Safarnama`;
        hero.style.cssText = photoStyle(pkg, 1800);

        heroContent.innerHTML = `
            <p class="breadcrumb"><a href="index.html">Home</a> / <a href="packages.html">Packages</a> / ${pkg.name}</p>
            <span class="badge badge-static">${pkg.badge}</span>
            <h1>${pkg.name}</h1>
            <ul class="detail-meta">
                <li>${durationText(pkg)}</li>
                <li>${pkg.location}</li>
                <li><span class="rating">★ ${pkg.rating.toFixed(1)}</span> (${pkg.reviews} reviews)</li>
            </ul>`;

        const listItems = (items) => items.map((item) => `<li>${item}</li>`).join('');

        document.getElementById('detailMain').innerHTML = `
            <div class="fact-row detail-block">
                <div class="fact"><span>Duration</span><strong>${pkg.days} Days</strong></div>
                <div class="fact"><span>Best time</span><strong>${pkg.bestTime}</strong></div>
                <div class="fact"><span>Group size</span><strong>${pkg.groupSize}</strong></div>
                <div class="fact"><span>Rating</span><strong>${pkg.rating.toFixed(1)} / 5</strong></div>
            </div>

            <div class="detail-block">
                <p class="eyebrow">Overview</p>
                <h2>About this trip</h2>
                <p>${pkg.overview}</p>
            </div>

            <div class="detail-block">
                <p class="eyebrow">Highlights</p>
                <h2>What makes it special</h2>
                <ul class="highlight-grid">${listItems(pkg.highlights)}</ul>
            </div>

            <div class="detail-block">
                <p class="eyebrow">Itinerary</p>
                <h2>Day by day plan</h2>
                <ol class="timeline">
                    ${pkg.itinerary.map((day, index) => `
                        <li class="timeline-item">
                            <span class="timeline-day">Day ${index + 1}</span>
                            <h3>${day.title}</h3>
                            <p>${day.text}</p>
                        </li>`).join('')}
                </ol>
            </div>

            <div class="detail-block inc-grid">
                <div>
                    <h3>What's included</h3>
                    <ul class="inc-list">${listItems(pkg.includes)}</ul>
                </div>
                <div>
                    <h3>Not included</h3>
                    <ul class="inc-list exc-list">${listItems(DEFAULT_EXCLUDES)}</ul>
                </div>
            </div>`;

        document.getElementById('detailAside').innerHTML = `
            <div class="booking-card">
                <p class="booking-from">Starting from</p>
                <p class="booking-price"><strong>${formatINR(pkg.price)}</strong><span>/ person</span></p>

                <div class="field">
                    <label for="bookDate">Travel date</label>
                    <input type="date" id="bookDate" min="${toDateValue(new Date())}">
                </div>

                <div class="field">
                    <label id="travellersLabel">Travellers</label>
                    <div class="stepper" role="group" aria-labelledby="travellersLabel">
                        <button type="button" id="stepDown" aria-label="Fewer travellers">−</button>
                        <output id="stepValue">2</output>
                        <button type="button" id="stepUp" aria-label="More travellers">+</button>
                    </div>
                </div>

                <div class="booking-total">
                    <span>Total</span>
                    <strong id="bookTotal"></strong>
                </div>

                <a href="contact.html" class="btn btn-block" id="bookLink">Book This Trip</a>
                <p class="booking-note">No payment now. Free cancellation up to 15 days before travel.</p>
            </div>`;

        // Booking card: travellers stepper, live total and a pre-filled enquiry link
        const bookDate = document.getElementById('bookDate');
        const stepValue = document.getElementById('stepValue');
        const bookTotal = document.getElementById('bookTotal');
        const bookLink = document.getElementById('bookLink');
        let travellers = 2;

        function updateBooking() {
            stepValue.textContent = travellers;
            bookTotal.textContent = formatINR(pkg.price * travellers);
            const query = new URLSearchParams({ package: pkg.name, travellers: String(travellers) });
            if (bookDate.value) query.set('date', bookDate.value);
            bookLink.href = `contact.html?${query}#enquiry`;
        }

        document.getElementById('stepDown').addEventListener('click', () => {
            travellers = Math.max(1, travellers - 1);
            updateBooking();
        });
        document.getElementById('stepUp').addEventListener('click', () => {
            travellers = Math.min(20, travellers + 1);
            updateBooking();
        });
        bookDate.addEventListener('change', updateBooking);
        updateBooking();

        // Similar packages: ones sharing a tag first, then anything else
        const others = packages.filter((item) => item.id !== pkg.id);
        const related = others.filter((item) => item.tags.some((tag) => pkg.tags.includes(tag)));
        const unrelated = others.filter((item) => !related.includes(item));
        document.getElementById('similarList').innerHTML =
            related.concat(unrelated).slice(0, 3).map(packageCard).join('');
    }
}

// ---------- Home: search and newsletter ----------

const searchForm = document.getElementById('searchForm');
if (searchForm) {
    const checkin = document.getElementById('checkin');
    const checkout = document.getElementById('checkout');

    checkin.min = toDateValue(new Date());
    checkout.min = checkin.min;

    // Check-out must be after check-in
    checkin.addEventListener('change', () => {
        if (!checkin.value) return;
        const next = new Date(checkin.value + 'T00:00:00');
        next.setDate(next.getDate() + 1);
        checkout.min = toDateValue(next);
        if (checkout.value && checkout.value < checkout.min) {
            checkout.value = checkout.min;
        }
    });

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const destination = document.getElementById('destination').value.trim();
        window.location.href = 'packages.html?q=' + encodeURIComponent(destination);
    });
}

const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        document.getElementById('newsletterMessage').textContent = 'Thank you for subscribing!';
        newsletterForm.reset();
    });
}

// ---------- Destinations / Packages: filters ----------

const filterList = document.getElementById('filterList');
if (filterList) {
    const items = Array.from(filterList.children);
    const buttons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('filterSearch');
    const emptyState = document.getElementById('emptyState');
    let activeTag = 'all';

    function applyFilters(animate) {
        const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
        let visible = 0;

        items.forEach((item) => {
            const tags = (item.dataset.tags || '').split(' ');
            const text = (item.textContent + ' ' + (item.dataset.keywords || '')).toLowerCase();
            const show = (activeTag === 'all' || tags.includes(activeTag)) && text.includes(query);
            item.hidden = !show;
            if (show) visible++;
        });

        if (emptyState) emptyState.hidden = visible > 0;

        if (animate) {
            // Restart the fade-in on the cards that are left
            filterList.classList.remove('filtering');
            void filterList.offsetWidth;
            filterList.classList.add('filtering');
        }
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            activeTag = button.dataset.filter;
            buttons.forEach((b) => b.classList.toggle('active', b === button));
            applyFilters(true);
        });
    });

    if (searchInput) {
        searchInput.value = params.get('q') || '';
        searchInput.addEventListener('input', () => applyFilters(true));
    }

    applyFilters(false);
}

// ---------- Contact: enquiry form ----------

const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
    const packageSelect = document.getElementById('package');
    const travelDate = document.getElementById('travelDate');
    const travellersInput = document.getElementById('travellers');
    const phone = document.getElementById('phone');
    const message = document.getElementById('formMessage');

    travelDate.min = toDateValue(new Date());

    // Pre-fill from a "Book" button on another page
    const chosen = params.get('package');
    if (chosen && Array.from(packageSelect.options).some((option) => option.value === chosen)) {
        packageSelect.value = chosen;
    }
    const chosenDate = params.get('date');
    if (chosenDate && /^\d{4}-\d{2}-\d{2}$/.test(chosenDate) && chosenDate >= travelDate.min) {
        travelDate.value = chosenDate;
    }
    const chosenTravellers = parseInt(params.get('travellers'), 10);
    if (chosenTravellers >= 1 && chosenTravellers <= 50) {
        travellersInput.value = chosenTravellers;
    }

    enquiryForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const digits = phone.value.replace(/\D/g, '');
        if (digits.length < 10) {
            message.textContent = 'Please enter a valid phone number (at least 10 digits).';
            message.classList.add('error');
            phone.focus();
            return;
        }

        const name = document.getElementById('name').value.trim();
        message.classList.remove('error');
        message.textContent = `Thank you, ${name}! We have received your enquiry and will call you within 24 hours.`;
        enquiryForm.reset();
    });
}

// ---------- Contact: FAQ accordion ----------

// Opening one question closes the others
const faqItems = document.querySelectorAll('.faq-list details');
faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
        if (!item.open) return;
        faqItems.forEach((other) => {
            if (other !== item) other.open = false;
        });
    });
});

// ---------- Gallery: lightbox ----------

const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
if (galleryItems.length) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.hidden = true;
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Photo viewer');
    lightbox.innerHTML = `
        <button type="button" class="lightbox-close" aria-label="Close">✕</button>
        <button type="button" class="lightbox-prev" aria-label="Previous photo">‹</button>
        <figure>
            <img src="" alt="">
            <figcaption></figcaption>
        </figure>
        <button type="button" class="lightbox-next" aria-label="Next photo">›</button>`;
    document.body.appendChild(lightbox);

    const image = lightbox.querySelector('img');
    const caption = lightbox.querySelector('figcaption');
    const closeButton = lightbox.querySelector('.lightbox-close');
    let visibleItems = [];
    let currentIndex = 0;
    let openedFrom = null;

    function showPhoto(index) {
        currentIndex = (index + visibleItems.length) % visibleItems.length;
        const item = visibleItems[currentIndex];
        image.src = item.href;
        image.alt = item.querySelector('img').alt;
        caption.innerHTML = `${item.dataset.caption}<span>${currentIndex + 1} / ${visibleItems.length}</span>`;
    }

    function openLightbox(item) {
        // Only step through the photos the current filter is showing
        visibleItems = galleryItems.filter((el) => !el.hidden);
        openedFrom = item;
        showPhoto(visibleItems.indexOf(item));
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
        closeButton.focus();
    }

    function closeLightbox() {
        lightbox.hidden = true;
        image.src = '';
        document.body.style.overflow = '';
        if (openedFrom) openedFrom.focus();
    }

    galleryItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            openLightbox(item);
        });
    });

    closeButton.addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showPhoto(currentIndex - 1));
    lightbox.querySelector('.lightbox-next').addEventListener('click', () => showPhoto(currentIndex + 1));

    // Clicking the dark area around the photo closes the viewer
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (event) => {
        if (lightbox.hidden) return;
        if (event.key === 'Escape') closeLightbox();
        if (event.key === 'ArrowLeft') showPhoto(currentIndex - 1);
        if (event.key === 'ArrowRight') showPhoto(currentIndex + 1);
    });
}

// ---------- Animations ----------

// Fade elements up as they scroll into view. Runs last so cards built above are included.
const revealSelector = [
    '.section-head', '.dest-card', '.feature', '.package', '.review', '.team-card',
    '.about-img', '.about-text', '.contact-info', '.form-card', '.faq-list details',
    '.stats-grid > div', '.cta-inner > *', '.detail-block', '.booking-card',
    '.filter-bar', '.filter-search', '.section-more', '.gallery-item', '.legal-block'
].join(',');

if (!reduceMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target;
            const delay = parseInt(element.dataset.delay, 10) || 0;
            element.classList.add('is-visible');
            revealObserver.unobserve(element);
            // Drop the classes afterwards so hover transitions go back to normal speed
            setTimeout(() => {
                element.classList.remove('reveal', 'is-visible');
                element.style.removeProperty('--delay');
            }, 1000 + delay);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(revealSelector).forEach((element) => {
        // Stagger siblings so a row of cards comes in one after another
        const siblings = Array.from(element.parentElement.children).filter((el) => el.matches(revealSelector));
        const delay = Math.min(siblings.indexOf(element), 5) * 90;
        element.dataset.delay = delay;
        element.style.setProperty('--delay', delay + 'ms');
        element.classList.add('reveal');
        revealObserver.observe(element);
    });
}

// Count the stats up from zero, keeping any suffix such as "+" or "/5"
function animateCounter(element) {
    const match = element.textContent.trim().match(/^([\d,.]+)(.*)$/);
    if (!match) return;

    const target = parseFloat(match[1].replace(/,/g, ''));
    const decimals = (match[1].split('.')[1] || '').length;
    const suffix = match[2];
    const duration = 1600;
    const start = performance.now();

    function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = (target * eased).toLocaleString('en-IN', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
        element.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}

if (!reduceMotion && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        });
    }, { threshold: 0.6 });

    document.querySelectorAll('.stats-grid strong').forEach((element) => counterObserver.observe(element));
}

document.getElementById('year').textContent = new Date().getFullYear();
