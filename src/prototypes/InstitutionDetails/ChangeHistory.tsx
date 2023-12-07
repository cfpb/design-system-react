import { Heading, Table } from '~/src/';

export function ChangeHistory(): JSX.Element {
  return (
    <>
      <Heading type='2' className='u-mt45'>
        History of changes
      </Heading>
      <Table
        isPaginated
        className='w-100pct'
        perPage={5}
        columns={[
          'Change ID',
          'Field',
          'Description of change',
          'Source',
          'Date'
        ]}
        rows={[
          [
            '004',
            'Tax ID',
            <div key='change4'>
              <b>New value:</b>
              <p>01-01234567</p>
              <br />
              <b>Old value:</b>
              <p>01-98765432 </p>
            </div>,
            'NIC',
            '8/23/2023'
          ],
          [
            '003',
            'Headquarters address',
            <div key='change3'>
              <b>New value:</b>
              <p>
                321 Anywhere Street
                <br />
                Anytown, AR 12312
              </p>
              <br />
              <b>Old value:</b>
              <p>
                123 Everywhere Street
                <br />
                Everytown, AR 12312
              </p>
            </div>,
            'NIC',
            '8/23/2023'
          ],
          [
            '002',
            'RSSD ID',
            <div key='change2'>
              <b>New value:</b>
              <p>9876543</p>
              <br />
              <b>Old value:</b>
              <p>0987654</p>
            </div>,
            'CFPB Reported by: Judy Jones',
            '5/21/2021'
          ],
          [
            '001',
            'Financial institution name',
            <div key='change1'>
              <b>New value:</b>
              <p>Fintech 1</p>
              <br />
              <b>Old value:</b>
              <p>Fintech 0</p>
            </div>,
            'NIC',
            '2/28/2020'
          ]
        ]}
      />
    </>
  );
}

export default ChangeHistory;
