$(document).ready(function() {
    var orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length === 0) {
        $(".order-list").html("<p>No orders found.</p>");
    } else {
        orders.forEach(function(order, index) {
            $(".order-list").append(`
                <div class="order">
                    <p><strong>Name:</strong> ${order.nickname}</p>
                    <p><strong>Website Type:</strong> ${order.site}</p>
                    <p><strong>Order Date:</strong> ${order.siparis}</p>
                    <p><strong>Delivery Date:</strong> ${order.teslim}</p>
                </div>
                <hr/>
            `);
        });
    }
});
