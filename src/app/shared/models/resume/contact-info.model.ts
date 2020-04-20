import { Detail } from './detail.model';
export class ContactInfo {
  public email: string;
  public phone: string;
  public location: string;
  public intrests: Detail[];
  public languages: Detail[];

  public static fromJson(json: any = {}): ContactInfo | ContactInfo[] {
    if (Array.isArray(json)) {
      return json.map(ContactInfo.fromJson) as ContactInfo[];
    }

    const payload = new ContactInfo();
    Object.assign(payload, json);
    return payload;
  }
}
