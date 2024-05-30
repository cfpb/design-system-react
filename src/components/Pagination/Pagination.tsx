import classNames from 'classnames';
import type { EventHandler, ReactElement, SyntheticEvent } from 'react';
import { useEffect, useId, useState } from 'react';
import { noOp } from '../../utils/noOp';
import { Icon } from '../Icon/Icon';
import { Label } from '../Label/Label';
import './pagination.less';
import { MIN_PAGE } from './paginationConstants';

export interface PaginationProperties {
  /** Identifier of the table this element controls */
  tableId?: string;
  /** Currently displayed page number  */
  page: number;
  /** Total number of available pages */
  pageCount: number;
  /** Event handler for `Previous` button */
  onClickPrevious: () => void;
  /** Event handler for `Next` button */
  onClickNext: () => void;
  /** Event handler for `Go` button */
  onClickGo: (value: number) => void;
  /** Text label for Previous button */
  previousLabel?: string;
  /** Text label for Next button */
  nextLabel?: string;
}

const PaginationSubmitButton = (): JSX.Element => (
  <button
    className='a-btn a-btn__link m-pagination_btn-submit'
    id='m-pagination_btn-submit-default'
    type='submit'
  >
    Go
  </button>
);

interface PaginationNavButtonProperties {
  iconName: string;
  onClick: EventHandler<SyntheticEvent>;
  label?: string;
  isPrevious?: boolean;
  isNext?: boolean;
  isDisabled?: boolean;
}
const PaginationNavButton = ({
  iconName,
  onClick,
  label,
  isPrevious = false,
  isNext = false,
  isDisabled = false
}: PaginationNavButtonProperties): React.ReactElement => {
  const buttonCnames = ['a-btn', 'flex-center'];
  const iconCnames = ['a-btn_icon'];

  if (isPrevious) {
    buttonCnames.push('m-pagination_btn-prev');
    iconCnames.push('a-btn_icon__on-left');
  } else {
    buttonCnames.push('m-pagination_btn-next');
    iconCnames.push('a-btn_icon__on-right');
  }

  if (isDisabled) buttonCnames.push('a-btn__disabled');

  return (
    <button
      type='button'
      className={classNames(buttonCnames)}
      onClick={onClick}
    >
      {isNext ? label : null}
      <span className={classNames(iconCnames)}>
        {iconName ? <Icon isPresentational name={iconName} /> : null}
      </span>
      {isPrevious ? label : null}
    </button>
  );
};

interface PaginationInputProperties {
  tableId: string;
  page: number;
  pageCount: number;
  onChange: (value: number) => void;
}

const PaginationInput = ({
  tableId,
  page,
  pageCount,
  onChange
}: PaginationInputProperties): React.ReactElement => {
  const onPageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(Number.parseInt(event.currentTarget.value, 10));
  };

  const inputId = `${tableId}-pagination_current-page`;

  return (
    <Label className='m-pagination_label' htmlFor={inputId} inline>
      Page
      <span className='u-visually-hidden'>number {page} out</span>
      <input
        className='m-pagination_current-page'
        id={inputId}
        name='page'
        type='number'
        min='1'
        max={pageCount}
        pattern='[0-9]*'
        inputMode='numeric'
        value={page}
        onChange={onPageChange}
      />
      of {pageCount}
    </Label>
  );
};

/**
 * Pagination is used to help split up long sets of data or content into shorter pieces, so as to make it easier for users to consume information.
 *
 * Source: https://cfpb.github.io/design-system/components/pagination
 */
export const Pagination = ({
  tableId,
  page,
  pageCount,
  onClickPrevious = noOp,
  onClickNext = noOp,
  onClickGo = noOp,
  previousLabel = ' Previous',
  nextLabel = 'Next '
}: PaginationProperties): ReactElement => {
  const [pageNumber, setPageNumber] = useState(page);
  useEffect(() => setPageNumber(page), [page]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget));
    const targetPage = Number.parseInt(formData.page, 10);
    if (targetPage === page) return;
    onClickGo(targetPage);
  };

  const paginationId = useId();

  const onInputChange = setPageNumber;

  return (
    <nav className='m-pagination' role='navigation' aria-label='Pagination'>
      <PaginationNavButton
        iconName='left'
        onClick={onClickPrevious}
        label={previousLabel}
        isDisabled={page === MIN_PAGE}
        isPrevious
      />
      <PaginationNavButton
        iconName='right'
        onClick={onClickNext}
        label={nextLabel}
        isDisabled={page === pageCount}
        isNext
      />

      <form
        className='m-pagination_form'
        action='#pagination_content'
        onSubmit={onSubmit}
      >
        <PaginationInput
          tableId={tableId ?? paginationId}
          page={pageNumber}
          pageCount={pageCount}
          onChange={onInputChange}
        />
        <PaginationSubmitButton />
      </form>
    </nav>
  );
};
