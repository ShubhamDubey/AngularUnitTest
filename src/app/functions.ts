export class Functions {

    public counterParameter(num: number): number {
        if (num < 0) {
            return 0
        } else {
            return num + 1;
        }
    }
}
