import Expandable from './Expandable';
import ExtendableProps from './Expandable';

interface ExpandableProps {
  header: string;
  paragraphText: string;
  expandableLink: string;
}

const ExpandableGroup: React.FC<ExpandableProps> = ({
  header,
  paragraphText,
  expandableLink
}) => {
  return (
    <div className='o-expandable-group'>
      <Expandable
        header={header}
        paragraphText={paragraphText}
        expandableLink={expandableLink}
      />
      <Expandable
        header={header}
        paragraphText={paragraphText}
        expandableLink={expandableLink}
      />
      <Expandable
        header={header}
        paragraphText={paragraphText}
        expandableLink={expandableLink}
      />
    </div>
  );
};

export default ExpandableGroup;
