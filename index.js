var app = new Vue({
    el: "#app",
    data: {
        list: [
            {
                id: 1,
                name: "iphone",
                price: 9999,
                count:1
            },
            {
                id: 2,
                name: "ipad Pro",
                price: 5888,
                count:1
            },
            {
                id: 3,
                name: "Macbook Pro",
                price: 21888,
                count:1
            }
        ]
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                var item = this.list[i];
                total += item.price * item.count;
            }
            return total.toString();
        }
    },
    methods: {
        handleRuduce: function (index) {
            if (this.list[index].count === 1) {
                return;
            }
            this.list[index].count--;
        },
        handleAdd: function (index) {
            this.list[index].count++;
        },
        handleRemove: function (index) {
            this.list.splice(index, 1);
        }
    }
})