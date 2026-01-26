import type { ReactElement } from 'react';
import { useEffect, useId, useState } from 'react';
import { noOp } from '../../utils/noOp';
import { MIN_PAGE } from './paginationConstants';
import { Button } from '~/src';
import '@cfpb/cfpb-design-system/src/components/cfpb-pagination/pagination.scss'

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
  <Button
    asLink
    className='m-pagination__btn-submit'
    id='m-pagination__btn-submit-default'
    label='Go'
    type='submit'
  />
);

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
    <label className='m-pagination__label' htmlFor={inputId}>
      Page
      <span className='u-visually-hidden'>{ `number ${page} out`}</span>
      <input
        className='m-pagination__current-page'
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
      {`of ${pageCount}`}
    </label>
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
      <Button
        iconLeft='left'
        className=className={'m-pagination__btn-prev' + (page === MIN_PAGE ? ' a-btn--disabled' : '')}
        onClick={onClickPrevious}
        label={previousLabel}
        disabled={page === MIN_PAGE}
      />
      <Button
        iconRight='right'
        className=className={'m-pagination__btn-next' + (page === pageCount ? ' a-btn--disabled' : '')}
        onClick={onClickNext}
        label={nextLabel}
        disabled={page === pageCount}
      />

      <form
        className='m-pagination__form'
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
