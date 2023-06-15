import classNames from 'classnames';
import type { EventHandler, SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';
import { noOp } from '../../utils/noOp';
import { Icon } from '../Icon/Icon';
import { Label } from '../Label/Label';
import { FIRST_PAGE } from '../Table/TableComplexUtils';

export interface PaginationProperties {
  /** Currently displayed page number  */
  page: number;
  /** Total number of available pages */
  pageCount: number;
  /** Event handler for `Previous` button */
  onClickPrev?: () => void;
  /** Event handler for `Next` button */
  onClickNext?: () => void;
  /** Event handler for `Go` button */
  onClickGo?: (argument?: any) => void;
  /** Text label for Previous button */
  prevLabel?: string;
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

interface PaginationButtonProperties {
  iconName: string;
  onClick: EventHandler<SyntheticEvent>;
  label?: string;
  isPrev?: boolean;
  isNext?: boolean;
  isDisabled?: boolean;
}
const PaginationButton = ({
  iconName,
  onClick,
  label,
  isPrev: isPrevious = false,
  isNext = false,
  isDisabled = false
}: PaginationButtonProperties): React.ReactElement => {
  const buttonCnames = ['a-btn'];
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
        {iconName ? <Icon name={iconName} /> : null}
      </span>
      {isPrevious ? label : null}
    </button>
  );
};

interface PaginationInputProperties {
  page: number;
  pageCount: number;
  onChange: Function;
}
const PaginationInput = ({
  page,
  pageCount,
  onChange
}: PaginationInputProperties): React.ReactElement => (
  <Label
    className='m-pagination_label'
    htmlFor='m-pagination_current-page'
    inline
  >
    Page
    <span className='u-visually-hidden'>number {page} out</span>
    <input
      className='m-pagination_current-page'
      id='m-pagination_current-page-default'
      name='page'
      type='number'
      min='1'
      max={pageCount}
      pattern='[0-9]*'
      inputMode='numeric'
      value={page}
      onChange={(event): void => {
        onChange(Number.parseInt(event.target.value));
      }}
    />
    of {pageCount}
  </Label>
);

export const Pagination = ({
  page,
  pageCount,
  onClickPrev: onClickPrevious = noOp,
  onClickNext = noOp,
  onClickGo = noOp,
  prevLabel: previousLabel = 'Previous',
  nextLabel = 'Next'
}: PaginationProperties): React.ReactElement => {
  const [pageNumber, setPageNumber] = useState(page);
  useEffect(() => setPageNumber(page), [page]);

  return (
    <nav className='m-pagination' role='navigation' aria-label='Pagination'>
      <PaginationButton
        iconName='left'
        onClick={onClickPrevious}
        label={previousLabel}
        isDisabled={pageNumber === FIRST_PAGE}
        isPrev
      />
      <PaginationButton
        iconName='right'
        onClick={onClickNext}
        label={nextLabel}
        isDisabled={pageNumber === pageCount}
        isNext
      />

      <form
        className='m-pagination_form'
        action='#pagination_content'
        onSubmit={e => {
          e.preventDefault();
          if (pageNumber == page) return;
          onClickGo(pageNumber - 1);
        }}
      >
        <PaginationInput
          page={pageNumber}
          pageCount={pageCount}
          onChange={setPageNumber}
        />
        <PaginationSubmitButton />
      </form>
    </nav>
  );
};
