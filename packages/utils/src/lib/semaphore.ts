class Semaphore {
    private tasks:((value: unknown) => void)[]
    private counter:number
    constructor(max:number) {
        this.tasks = [];
        this.counter = max;
    }

    acquire() {
        return new Promise(resolve => {
            if (this.counter > 0) {
                this.counter--;
                resolve(null);
            } else {
                this.tasks.push(resolve);
            }
        });
    }

    release() {
        if (this.tasks.length > 0) {
            const resolve = this.tasks.shift() as any;
            resolve(null);
        } else {
            this.counter++;
        }
    }
}