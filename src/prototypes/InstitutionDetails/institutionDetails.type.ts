export interface InstitutionDetailsApiType {
  lei?: string;
  name?: string;
  tax_id?: string;
  rssd_id?: string;
  primary_federal_regulator_id?: string;
  hmda_institution_type_id?: string;
  sbl_institution_type_id?: string;
  hq_address_street_1?: string;
  hq_address_street_2?: string;
  hq_address_city?: string;
  hq_address_state?: string;
  hq_address_zip?: string;
  parent_lei?: string;
  parent_legal_name?: string;
  parent_rssd_id?: string;
  top_holder_lei?: string;
  top_holder_legal_name?: string;
  top_holder_rssd_id?: string;
  domains?: string[];
}
