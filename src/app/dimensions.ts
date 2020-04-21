export class Dimensions {

    public getArea(length: number, width: number): number {
        let area = length * width;
        return area;
    }

    public greetingsTo(personName: string) {
        return 'Welcome ' + personName;
    }

    public getCountry() {

        return ['India', 'Russia', 'Japan', 'israel', 'France'];

    }


}
