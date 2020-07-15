import IPareseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IPareseMailTemplateDTO): Promise<string>;
}
