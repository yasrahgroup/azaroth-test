import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { Home } from '../../pages/Home';
import { SlaMatrix } from './SlaMatrix';

describe('SlaMatrix', () => {
  it('uses scope-based delivery language instead of unsupported SLA guarantees', () => {
    render(
      <MemoryRouter>
        <SlaMatrix />
      </MemoryRouter>
    );

    expect(screen.getByText(/Transparent engagement models/i)).toBeInTheDocument();
    expect(screen.queryByText(/24\/7 war room response/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/99\.99%/i)).not.toBeInTheDocument();
  });
});

describe('Home page', () => {
  it('promotes enterprise-ready homepage messaging that clarifies business value', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/Enterprise software engineering for business-critical systems/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Schedule a consultation/i).length).toBeGreaterThan(0);
  });
});
