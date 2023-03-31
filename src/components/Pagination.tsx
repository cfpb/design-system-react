import classnames from 'classnames';
import { EventHandler, SyntheticEvent, useEffect, useState } from 'react';
import { noOp } from '../utils/noOp';
import { Icon } from './Icon';
import Label from './Label';
import TextInput from './TextInput';

export interface PaginationProps {
  /** Currently displayed page number  */
  page: number;
  /** Total number of available pages */
  pageCount: number;
  /** Event handler for `Previous` button */
  onClickPrev?: () => void;
  /** Event handler for `Next` button */
  onClickNext?: () => void;
  /** Event handler for `Go` button */
  onClickGo?: (arg?: any) => void;
  /** Text label for Previous button */
  prevLabel?: string;
  /** Text label for Next button */
  nextLabel?: string;
}

export const Pagination = ({
  page,
  pageCount,
  onClickPrev = noOp,
  onClickNext = noOp,
  onClickGo = noOp,
  prevLabel = 'Previous',
  nextLabel = 'Next'
}: PaginationProps): React.ReactElement => {
  const [pageNum, setPageNum] = useState(page);
  useEffect(() => setPageNum(page), [page]);

  return (
    <nav className='m-pagination' role='navigation' aria-label='Pagination'>
      <PaginationBtn
        iconName='left'
        onClick={onClickPrev}
        label={prevLabel}
        isPrev
      />
      <PaginationBtn
        iconName='right'
        onClick={onClickNext}
        label={nextLabel}
        isNext
      />

      <form
        className='m-pagination_form'
        action='#pagination_content'
        onSubmit={e => {
          e.preventDefault();
          if (pageNum == page) return;
          onClickGo(pageNum - 1);
        }}
      >
        <PaginationInput
          page={pageNum}
          pageCount={pageCount}
          onChange={setPageNum}
        />
        <PaginationSubmitBtn />
      </form>
    </nav>
  );
};

const PaginationSubmitBtn = () => (
  <button
    className='a-btn a-btn__link m-pagination_btn-submit'
    id='m-pagination_btn-submit-default'
    type='submit'
  >
    Go
  </button>
);

interface PaginationBtnProps {
  iconName: string;
  onClick: EventHandler<SyntheticEvent>;
  label?: string;
  isPrev?: boolean;
  isNext?: boolean;
}
const PaginationBtn = ({
  iconName,
  onClick,
  label,
  isPrev = false,
  isNext = false
}: PaginationBtnProps): React.ReactElement => {
  const buttonCnames = ['a-btn'];
  const iconCnames = ['a-btn_icon'];

  if (isPrev) {
    buttonCnames.push('m-pagination_btn-prev');
    iconCnames.push('a-btn_icon__on-left');
  } else {
    buttonCnames.push('m-pagination_btn-next');
    iconCnames.push('a-btn_icon__on-right');
  }

  return (
    <button
      type='button'
      className={classnames(buttonCnames)}
      onClick={onClick}
    >
      {isNext && label}
      <span className={classnames(iconCnames)}>
        {iconName && <Icon name={iconName} />}
      </span>
      {isPrev && label}
    </button>
  );
};

interface PaginationInputProps {
  page: number;
  pageCount: number;
  onChange: Function;
}
const PaginationInput = ({
  page,
  pageCount,
  onChange
}: PaginationInputProps): React.ReactElement => (
  <Label
    className='m-pagination_label'
    htmlFor='m-pagination_current-page'
    inline
  >
    Page
    <span className='u-visually-hidden'>number {page} out</span>
    <TextInput
      className='m-pagination_current-page'
      id='m-pagination_current-page-default'
      name='page'
      type='number'
      min='1'
      max={pageCount}
      pattern='[0-9]*'
      inputMode='numeric'
      defaultValue={page}
      value={page}
      onChange={e => onChange(parseInt(e.target.value))}
    />
    of {pageCount}
  </Label>
);
