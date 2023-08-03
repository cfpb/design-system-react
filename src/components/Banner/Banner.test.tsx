import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Banner } from './Banner';
import { LanguageLink } from './BannerLanguageLink';

describe('<Banner />', () => {
  it('Propagates additional HTML properties to main component element', () => {
    const testClass = 'this-is-a-test-classname';
    const testTitle = 'test-title';

    const testId = 'eyebrow';

    render(<Banner className={testClass} title={testTitle} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(testId)).toHaveClass(testClass);
    expect(screen.getByTestId(testId)).toHaveAttribute('title', testTitle);
  });

  it('renders tagline correctly', () => {
    render(
      <Banner tagline='An official website of the United States government' />
    );

    expect(
      screen.getByText('An official website of the United States government')
    ).toBeInTheDocument();
  });

  it('renders phoneNumber correctly', () => {
    // Formatting applied
    render(<Banner phoneNumber='1-855-411-2372' />);
    expect(screen.getByText('(855) 411-2372')).toBeInTheDocument();

    // Formatting skipped
    render(<Banner phoneNumber='855-411-2372' />);
    expect(screen.getByText('855-411-2372')).toBeInTheDocument();
  });

  it('renders links correctly', () => {
    render(
      <Banner
        links={[
          <LanguageLink code='es' key='es' />,
          <LanguageLink code='zh' key='zh' />,
          <LanguageLink code='vi' key='vi' />,
          <LanguageLink
            code=':)'
            key=':)'
            href='/customLang'
            label='Custom language'
          />
        ]}
      />
    );

    const spanish = screen.getByText('Español');
    const chinese = screen.getByText('中文');
    const vietnamese = screen.getByText('Tiếng Việt');
    const custom = screen.getByText('Custom language');

    expect(spanish).toBeInTheDocument();
    expect(spanish).toHaveAttribute('href', '/es/');
    expect(spanish).toHaveAttribute('lang', 'es');
    expect(spanish).toHaveAttribute('hrefLang', 'es');

    expect(chinese).toBeInTheDocument();
    expect(chinese).toHaveAttribute('href', '/language/zh/');
    expect(chinese).toHaveAttribute('lang', 'zh');
    expect(chinese).toHaveAttribute('hrefLang', 'zh');

    expect(vietnamese).toBeInTheDocument();

    expect(custom).toBeInTheDocument();
    expect(custom).toHaveAttribute('href', '/customLang');
    expect(custom).toHaveAttribute('hrefLang', ':)');
    expect(custom).toHaveAttribute('lang', ':)');

    expect(screen.queryByText('Tagalog')).not.toBeInTheDocument();
  });

  it('renders non-horizontal version', () => {
    const taglineText = 'This should not be displayed';

    render(<Banner isHorizontal={false} tagline={taglineText} />);

    expect(screen.getByTestId('eyebrow')).toHaveClass('m-global-eyebrow__list');
    expect(screen.queryByText(taglineText)).not.toBeInTheDocument();
  });
});
