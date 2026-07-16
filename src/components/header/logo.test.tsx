import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CfpbLogoEn from '../../assets/images/cfpb_logo.svg?url';
import CfpbLogoEs from '../../assets/images/cfpb_logo_es.svg?url';
import { Logo } from './logo';

describe('Logo', () => {
  it('renders the English logo by default', () => {
    render(<Logo />);

    const image = screen.getByRole('img', { name: 'CFPB Logo' });
    expect(image).toHaveAttribute('src', CfpbLogoEn);
    expect(image).toHaveClass('o-header__logo-img');
  });

  it('renders the English logo when language is en', () => {
    render(<Logo language='en' />);

    expect(screen.getByRole('img', { name: 'CFPB Logo' })).toHaveAttribute(
      'src',
      CfpbLogoEn,
    );
  });

  it('renders the Spanish logo when language is es', () => {
    render(<Logo language='es' />);

    const image = screen.getByRole('img', {
      name: 'Oficina para la Protección Financiera del Consumidor',
    });
    expect(image).toHaveAttribute('src', CfpbLogoEs);
  });
});
