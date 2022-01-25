class CountManager {
    count = 0;
    listeners = new Set();

    plus() {
        this.count += 1;
        console.log(this.count);
    }

    minus() {
        this.count -= 1;
        console.log(this.count);
    }

    getCount() {
        console.log(this.count);
        return this.count;
    }

    subscribe(listener) {
        this.listeners.add(listener);
        console.log('subscribe[this]:', this);

        return () => this.listeners.delete(listener);
    }

    notifyListeners() {
        console.log('notifyListeners[this]:', this);
        this.listeners.forEach((listener) => listener());
    }
}

export const countManagerDefinition = {
    id: 'test:countmvc-count-manager',

    create: (env) => {
        const v1 = (consumerId) => ({
            featureService: new CountManager(),
        });

        return {
            '1.0.0': v1,
        };
    },
};
