import React from 'react';

const mockOwner = {
  name: 'Ravi Mehta',
  phone: '+91-9999999999',
  connectedSince: 'Feb 2021',
  verification: 'Verified',
  properties: ['Green Apartments', 'Sunrise Villa'],
  inquiries: 12,
  contact: 'ravi.mehta@email.com',
  photo: '/profile.jpg',
};

export default function OwnerFile() {
  const owner = mockOwner;

  return (
    <div style={{
      display: 'flex',
      border: '1px solid #dedede',
      borderRadius: 10,
      maxWidth: 900,
      margin: '40px auto',
      minHeight: 400,
      fontFamily: 'sans-serif',
      background: '#f8f9fb'
    }}>
      {/* Left Sidebar */}
      <aside style={{ width: 250, borderRight: '1px solid #ddd', padding: 24, background: '#fff' }}>
        <img src={owner.photo} alt="Profile" style={{ width: 80, height: 80, borderRadius: '50%', marginBottom: 24 }} />
        <div style={{ marginBottom: 20 }}>
          <strong>Properties Owned</strong>
          <ul style={{ paddingLeft: 18, margin: '8px 0' }}>
            {owner.properties.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
        <div style={{ marginBottom: 10 }}>
          <strong>Verification: </strong>{owner.verification}
        </div>
        <div style={{ marginBottom: 10 }}>
          <strong>Inquiries: </strong>{owner.inquiries}
        </div>
        <div>
          <strong>Contact: </strong>{owner.contact}
        </div>
      </aside>
      {/* Main Section */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 32 }}>
        <h2 style={{ marginBottom: 10 }}>{owner.name}</h2>
        <div style={{ marginBottom: 16 }}><strong>Phone:</strong> {owner.phone}</div>
        <div><strong>Connected Since:</strong> {owner.connectedSince}</div>
      </main>
    </div>
  );
}
