// DOM Elements
const eventContainer = document.getElementById('eventContainer');
const filterCategory = document.getElementById('filterCategory');
const filterDate = document.getElementById('filterDate');
const refreshBtn = document.getElementById('refreshBtn');

// Global event data
let allEvents = [];

// Fetch events from the mock JSON file
const loadEvents = async () => {
  try {
    const res = await fetch('events.json');
    if (!res.ok) throw new Error('Unable to fetch event data');
    const data = await res.json();
    allEvents = data.events;
    displayEvents(allEvents);
  } catch (err) {
    eventContainer.innerHTML = `<p class="text-danger text-center">${err.message}</p>`;
  }
};

// Display event cards dynamically
const displayEvents = (events) => {
  eventContainer.innerHTML = '';

  if (events.length === 0) {
    eventContainer.innerHTML = `<p class="text-center text-muted">No events found</p>`;
    return;
  }

  events.forEach(({ title, category, date, description }) => {
    const card = `
      <div class="col-md-4">
        <div class="card p-3 shadow-sm border-0">
          <h5>${title}</h5>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p>${description}</p>
        </div>
      </div>
    `;
    eventContainer.innerHTML += card;
  });
};

// Filter events by category and date
const filterEvents = () => {
  const selectedCategory = filterCategory.value;
  const selectedDate = filterDate.value;

  let filtered = [...allEvents];

  if (selectedCategory !== 'all') {
    filtered = filtered.filter(e => e.category === selectedCategory);
  }

  if (selectedDate) {
    filtered = filtered.filter(e => e.date === selectedDate);
  }

  displayEvents(filtered);
};

// Event listeners for filters and refresh
filterCategory.addEventListener('change', filterEvents);
filterDate.addEventListener('change', filterEvents);
refreshBtn.addEventListener('click', () => {
  filterCategory.value = 'all';
  filterDate.value = '';
  loadEvents();
});

// Load events on page load
loadEvents();
