class SubmissionViewer {
  constructor(searchId, containerId) {
    this.searchBar = document.getElementById(searchId);
    this.container = document.getElementById(containerId);
    this.submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    this.searchBar.addEventListener("input", () => this.renderTable());
    this.renderTable();
  }

  renderTable() {
    const query = this.searchBar.value.toLowerCase();
    let filtered = this.submissions.filter(s =>
      s.name.toLowerCase().includes(query) ||
      s.checkIn.includes(query) ||
      s.checkOut.includes(query)
    );

    if (filtered.length === 0) {
      this.container.innerHTML = `<p class="text-danger">No data found</p>`;
      return;
    }

    let table = `
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Phone</th><th>Email</th><th>Address</th>
            <th>Aadhar</th><th>Check-In</th><th>Check-Out</th>
            <th>Adults</th><th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map(s => `
            <tr>
              <td>${s.name}</td>
              <td>${s.phone}</td>
              <td>${s.email}</td>
              <td>${s.address}</td>
              <td>${s.aadhar}</td>
              <td>${s.checkIn}</td>
              <td>${s.checkOut}</td>
              <td>${s.adults}</td>
              <td>${s.purpose}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;

    this.container.innerHTML = table;
  }
}

new SubmissionViewer("searchBar", "tableContainer");
