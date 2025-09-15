if (!document.location.href.startsWith('file://')) {
  // Prevent background scrolling
  document.body.style.overflow = 'hidden';

  // Create background overlay
  const backgroundModal = document.createElement('div');
  backgroundModal.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(0,0,0,0.3); z-index: 9998;
  `;
  backgroundModal.setAttribute('tabindex', '-1');
  backgroundModal.setAttribute('aria-hidden', 'true');

  // Create content modal
  const contentModal = document.createElement('div');
  contentModal.style.cssText = `
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
    border: 1px solid var(--nc-tx-1); background: var(--nc-bg-2);
    width: min(600px, 90vw); max-width: 95vw; max-height: 80vh;
    padding: 30px 20px 20px 20px; z-index: 9999; border-radius: 12px;
    overflow-y: auto; box-shadow: 0 6px 36px rgba(0,0,0,0.13);
  `;
  contentModal.setAttribute('role', 'dialog');
  contentModal.setAttribute('aria-modal', 'true');
  contentModal.setAttribute('aria-labelledby', 'modalTitle');
  contentModal.setAttribute('tabindex', '0');

  contentModal.innerHTML = `
    <header>
      <h2 id="modalTitle" style="margin-top:0;">Gams Online Demo</h2>
    </header>
    <main>
      <p>Welcome to the online demo for Gams offline.</p>
      <p>You can change the way games open in the dropdown "Open Gam Mode".</p>
      <p>If you enjoy the site and want to use it offline, download it
        <a href="https://github.com/Gams-Offline/Gams/archive/refs/heads/main.zip" target="_blank" rel="noopener">here</a>.
      </p>
      <blockquote>
        <i>Right-click (two finger click) the link and click: "Save link as...", this usually works better than just clicking it.</i>
      </blockquote>
    </main>
    <footer style="margin-top:24px;">
      <button id="closeModalBtn" style="
        padding: 7px 20px; font-size: 1.1em; background: var(--nc-bg-1);
        border: 1px solid var(--nc-tx-1); border-radius: 6px; cursor: pointer;
      ">Close</button>
    </footer>
  `;

  // Close modal function
  function closeModal() {
    document.body.removeChild(backgroundModal);
    document.body.removeChild(contentModal);
    document.body.style.overflow = '';
  }

  // Focus trap and close on Esc key
  contentModal.focus();
  contentModal.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab') e.preventDefault(); // Keep focus inside modal
    document.getElementById('closeModalBtn').focus();
  });

  // Button click closes modal
  contentModal.querySelector('#closeModalBtn').addEventListener('click', closeModal);

  // Click outside modal closes it
  backgroundModal.addEventListener('click', closeModal);

  // Prevent click in modal from closing
  contentModal.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  // Add to DOM
  document.body.appendChild(backgroundModal);
  document.body.appendChild(contentModal);
  // Focus on button for accessibility
  document.getElementById('closeModalBtn').focus();
}
