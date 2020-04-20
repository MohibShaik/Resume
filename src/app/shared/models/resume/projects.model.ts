import { Detail } from './detail.model';

export class Projects {
    public title: string;
    public description: string;
    public technologies: Detail[];

    public static fromJson(json: any = {}): Projects | Projects[] {
        if (Array.isArray(json)) {
            return json.map(Projects.fromJson) as Projects[];
        }

        const { technologies } = json;
        // json.duties = Detail.fromJson(duties);
        json.technologies = Detail.fromJson(technologies);
        const payload = new Projects();
        Object.assign(payload, json);
        return payload;
    }
}