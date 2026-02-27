
document.addEventListener('DOMContentLoaded', () => {
    // TALK_DATA_INJECT
    const talksData = talks;
    const eventTitle = eventData.eventTitle;
    const scheduleContainer = document.getElementById('schedule-container');
    const searchBar = document.getElementById('search-bar');

    document.title = eventTitle;
    document.getElementById('event-title').textContent = eventTitle;

    function formatTime(date) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    }

    function renderSchedule() {
        let currentTime = new Date();
        currentTime.setHours(10, 0, 0, 0); // Event starts at 10:00 AM

        talksData.forEach((talk, index) => {
            const startTime = new Date(currentTime);
            const endTime = new Date(startTime.getTime() + talk.duration * 60000);

            // Render Talk
            const talkElement = document.createElement('div');
            talkElement.className = 'schedule-item talk-item';
            talkElement.dataset.categories = talk.categories.join(',').toLowerCase();
            talkElement.innerHTML = `
                <div class="time">${formatTime(startTime)} - ${formatTime(endTime)}</div>
                <div class="details">
                    <h2>${talk.title}</h2>
                    <p class="speakers">By: ${talk.speakers.join(', ')}</p>
                    <p class="description">${talk.description}</p>
                    <div class="categories">
                        ${talk.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                    </div>
                </div>
            `;
            scheduleContainer.appendChild(talkElement);
            currentTime = endTime;

            // Add Lunch break after the 3rd talk
            if (index === 2) {
                const lunchStartTime = new Date(currentTime);
                const lunchEndTime = new Date(lunchStartTime.getTime() + 60 * 60000);
                const lunchElement = document.createElement('div');
                lunchElement.className = 'schedule-item break-item';
                lunchElement.innerHTML = `
                    <div class="time">${formatTime(lunchStartTime)} - ${formatTime(lunchEndTime)}</div>
                    <div class="details">
                        <h2>Lunch Break</h2>
                    </div>
                `;
                scheduleContainer.appendChild(lunchElement);
                currentTime = lunchEndTime;
            }

            // Add transition between talks
            if (index < talksData.length - 1) {
                const transitionStartTime = new Date(currentTime);
                const transitionEndTime = new Date(transitionStartTime.getTime() + 10 * 60000);
                const transitionElement = document.createElement('div');
                transitionElement.className = 'schedule-item transition-item';
                transitionElement.innerHTML = `
                     <div class="time">${formatTime(transitionStartTime)} - ${formatTime(transitionEndTime)}</div>
                    <div class="details">
                        <h2>Transition</h2>
                    </div>
                `;
                scheduleContainer.appendChild(transitionElement);
                currentTime = transitionEndTime;
            }
        });
    }

    function filterTalks() {
        const searchTerm = searchBar.value.toLowerCase().trim();
        const talkItems = document.querySelectorAll('.talk-item');

        talkItems.forEach(item => {
            const categories = item.dataset.categories;
            if (!searchTerm || categories.includes(searchTerm)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    renderSchedule();
    searchBar.addEventListener('input', filterTalks);
});
