import type { SelectOption } from '../../components/Dropdown/Dropdown';
import Institutions from './UserProfileInstitutions.json';

const makeSelectOption = (label: string, value: string): SelectOption => ({
  value,
  label
});

/**
 * Split the list of institutions based on the user's email domain.
 *
 * Provides
 *  - List of matching Institutions with the raw Institution data
 *  - SelectOptions for all other Institutions for presentation in the dropdown menu
 *
 * @param emailDomain
 * @returns [ MatchingRawInstitution[], SelectOptionsForOthers[] ]
 */
export const filterInstitutionOptionsByDomain = (
  emailDomain: string
): [Record<string, unknown>[], SelectOption[]] => {
  const matches = []; // Institutions that will be highlighted as matched based on email domain
  const other = []; // SelectOptions that will be presented in a dropdown for potential selection

  /**
   * Example Institution
   {
    "name": "Test Bank 230626",
    "lei": "TESTBANK230626",
    "domains": [
      {
        "domain": "baz.qux",
        "lei": "TESTBANK230626"
      },
      {
        "domain": "foo.bar",
        "lei": "TESTBANK230626"
      }
    ]
  }
   */

  for (const institution of Institutions) {
    if (institution.domains.length === 0) {
      // Nothing to match on
      other.push(institution);
    } else {
      const foundMatches = institution.domains.filter(
        ({ domain }) => domain === emailDomain
      );

      if (foundMatches.length > 0) matches.push(institution);
      else other.push(institution);
    }
  }

  console.log('matches', matches);
  console.log('other', other);

  return [
    matches,
    other.map(o => makeSelectOption(`${o.name} | ${o.lei}`, o.lei))
  ];
};
