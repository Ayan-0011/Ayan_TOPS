// viewer.js
import { getItem, setItem, clearAll } from './storage.js';

class SubmissionViewer {
  constructor(tableContainerSelector, searchSelector) {
    this.container = document.querySelector(tableContainerSelector);
    this.searchInput = document.querySelector(searchSelector);
    this.noData = document.getElementById('noData');
    this.fileInput = document.getElementById('fileInput');

    this.setup();
    this.render();
  }

  setup() {
    // delegate clicks (delete)
    this.container.addEventListener('click', (e) => {
      const del = e.target.closest('.btn-delete');
      if (del) {
        const id = del.dataset.id;
        this.deleteRecord(Number(id));
      }
    });

    this.searchInput.addEventListener('input', () => this.render());
    document.getElementById('exportBtn').addEventListener('click', () => this.exportJSON());
    document.getElementById('importBtn').addEventListener('click', () => this.fileInput.click());
    this.fileInput.addEventListener('change', (e) => this.importJSON(e.target.files));
    document.getElementById('clearAll').addEventListener('click', () => {
      if (!confirm('Clear all records from localStorage?')) return;
      clearAll();
      this.render();
    })
  }

  getRecords() {
    return getItem();
  }

  deleteRecord(id) {
    let records = this.getRecords();
    records = records.filter(r => r.id !== id);
    setItem(records);
    this.render();
  }

  filterRecords(records, q) {
    if (!q) return records;
    q = q.trim().toLowerCase();
    return records.filter(r => {
      const nameMatch = r.fullName.toLowerCase().includes(q);
      const dateMatch = (r.checkIn && r.checkIn.includes(q)) || (r.checkOut && r.checkOut.includes(q));
      const createdMatch = r.createdAt && r.createdAt.toLowerCase().includes(q);
      return nameMatch || dateMatch || createdMatch;
    });
  }

  render() {
    const q = this.searchInput.value || '';
    const records = this.filterRecords(this.getRecords(), q);
    if (!records.length) {
      this.container.innerHTML = '';
      this.noData.style.display = 'block';
      return;
    }
    this.noData.style.display = 'none';

    const rows = records.map(r => {
      return `
        <tr>
          <td>${escapeHtml(r.fullName)}</td>
          <td>${escapeHtml(r.phone)}</td>
          <td>${escapeHtml(r.email)}</td>
          <td>${escapeHtml(r.aadhar)}</td>
          <td>${escapeHtml(r.checkIn)} → ${escapeHtml(r.checkOut)}</td>
          <td>${escapeHtml(String(r.adults))}</td>
          <td style="max-width:250px">${escapeHtml(r.purpose)}</td>
          <td>${new Date(r.createdAt).toLocaleString()}</td>
          <td>
            <button class="btn btn-sm btn-danger btn-delete" data-id="${r.id}">Delete</button>
          </td>
        </tr>
      `;
    }).join('');

    this.container.innerHTML = `
      <table class="table table-striped table-bordered">
        <thead class="table-light">
          <tr>
            <th>Name</th><th>Phone</th><th>Email</th><th>Aadhar</th>
            <th>Stay</th><th>Adults</th><th>Purpose</th><th>Registered At</th><th>Action</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  exportJSON() {
    const data = this.getRecords();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hotel_submissions_${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  importJSON(files) {
    if (!files || !files.length) return;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (!Array.isArray(parsed)) throw new Error('Expected array of records');
        // merge: keep existing, append new but avoid id collisions
        const existing = this.getRecords();
        const existingIds = new Set(existing.map(r => r.id));
        for (const item of parsed) {
          if (!item.id) item.id = Date.now() + Math.floor(Math.random()*1000);
          while (existingIds.has(item.id)) item.id = Date.now() + Math.floor(Math.random()*100000);
          existing.push(item);
          existingIds.add(item.id);
        }
        setItem(existing);
        this.render();
        alert('Import successful');
      } catch (err) {
        alert('Failed to import: ' + err.message);
      }
    }
    reader.readAsText(file);
    this.fileInput.value = ''; // reset
  }
}

// small helper
function escapeHtml(text) {
  if (text === null || text === undefined) return '';
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

document.addEventListener('DOMContentLoaded', () => {
  new SubmissionViewer('#tableContainer', '#searchInput');
});
