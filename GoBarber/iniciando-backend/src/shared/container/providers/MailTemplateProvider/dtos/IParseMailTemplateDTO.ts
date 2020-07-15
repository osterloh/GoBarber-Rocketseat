interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IPareseMailTemplateDTO {
  file: string;
  variables: ITemplateVariables;
}
