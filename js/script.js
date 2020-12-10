let app = new Vue ({
    el: "#root",
    data: {
        todoArray: [
            "Fare la spesa",
            "Andare a trovare i genitori",
            "Portare il cane a spasso",
        ],
        todoInputValue: "",
    },
    methods: {
        addNewItem: function (array) {
            if (this.todoInputValue == "") {
                alert("Campo vuoto");
            } else {
                array.push(this.todoInputValue);
                this.todoInputValue = "";
            }
        },
        deleteItem: function (index) {
            this.todoArray.splice(index, 1);
        },
    }
});
