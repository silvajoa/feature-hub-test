export const countManagerDefinition = {
    id: 'test:countmvc-count-manager',

    create: (env) => {
        let count = 0;

        const v1 = (consumerId) => ({
            featureService: {
                plus() {
                    count += 1;
                    console.log(count);
                },

                minus() {
                    count -= 1;
                    console.log(count);
                },

                getCount() {
                    console.log(count);
                    return count;
                },

                subscribe(listener) {
                    this.listeners.add(listener);
                    console.log('subscribe:', this);

                    return () => this.listeners.delete(listener);
                },

                listeners: new Set(),

                notifyListeners() {
                    console.log('notifyListeners:', this.listeners);
                    this.listeners.forEach((listener) => listener());
                }
            },
        });

        return {
            '1.0.0': v1,
        };
    },
};
