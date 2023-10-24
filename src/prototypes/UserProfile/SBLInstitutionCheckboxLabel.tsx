/* SBL Specific */

interface ICLProperties {
  name: string;
  lei: string;
  taxid: string;
  agency: string;
}

export const SBLInstitutionCheckboxLabel = ({
  name,
  lei,
  taxid,
  agency
}: ICLProperties): JSX.Element => (
  <div>
    <b>{name}</b>
    <br />
    LEI: {lei}
    <br />
    Tax ID: {taxid}
    <br />
    Agency Code: {agency}
  </div>
);
