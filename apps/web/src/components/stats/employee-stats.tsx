import React from 'react'

const EmployeeStats = () => (
  <div className="daisy-stats border-2 border-primary">

    <div className="daisy-stat">
      <div className="daisy-stat-figure text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      </div>
      <div className="daisy-stat-title">Total Employees</div>
      <div className="daisy-stat-value text-primary">1242</div>
      <div className="daisy-stat-desc">21% more than last year</div>
    </div>

    <div className="daisy-stat">
      <div className="daisy-stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div className="daisy-stat-title">New Job Applications</div>
      <div className="daisy-stat-value text-secondary">1520</div>
      <div className="daisy-stat-desc">21% more than last month</div>
    </div>

    <div className="daisy-stat">
      <div className="daisy-stat-figure text-secondary">
        <div className="daisy-avatar daisy-online">
          <div className="w-16 rounded-full">
            <img src="https://faces-img.xcdn.link/image-lorem-face-6149.jpg" alt='avatar' />
          </div>
        </div>
      </div>
      <div className="daisy-stat-value">86%</div>
      <div className="daisy-stat-title">Customer Satisfaction</div>
      <div className="daisy-stat-desc text-secondary">42 customers reviews</div>
    </div>

  </div>
)

export default EmployeeStats